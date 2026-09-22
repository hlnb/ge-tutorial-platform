import {
	clearStateCookie,
	getAllowedOrigins,
	getSingleQueryValue,
	readStateCookie,
	sendOAuthResult,
	statesMatch,
} from './lib/oauth.js';

const DEFAULT_CALLBACK_URL =
	'https://www.graphitedge.com.au/api/auth-callback';

export default async function handler(req, res) {
	if (req.method !== 'GET') {
		res.setHeader('Allow', 'GET');
		return res.status(405).json({ message: 'Method not allowed' });
	}

	const allowedOrigins = getAllowedOrigins();
	const code = getSingleQueryValue(req.query?.code);
	const state = getSingleQueryValue(req.query?.state);
	const expectedState = readStateCookie(req.headers?.cookie);

	res.setHeader('Set-Cookie', clearStateCookie());

	if (
		!code ||
		code.length > 1024 ||
		!state ||
		!expectedState ||
		!statesMatch(expectedState, state)
	) {
		return sendOAuthResult(res, {
			allowedOrigins,
			error: 'Authentication could not be verified. Please try again.',
		});
	}

	const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
	const clientSecret = process.env.OAUTH_GITHUB_CLIENT_SECRET;
	if (!clientId || !clientSecret) {
		console.error('GitHub OAuth credentials are not configured');
		return sendOAuthResult(res, {
			allowedOrigins,
			error: 'CMS authentication is temporarily unavailable.',
		});
	}

	try {
		const tokenResponse = await fetch(
			'https://github.com/login/oauth/access_token',
			{
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					client_id: clientId,
					client_secret: clientSecret,
					code,
					redirect_uri:
						process.env.OAUTH_GITHUB_CALLBACK_URL || DEFAULT_CALLBACK_URL,
				}),
			},
		);

		if (!tokenResponse.ok) {
			console.error('GitHub OAuth token exchange failed', {
				status: tokenResponse.status,
			});
			return sendOAuthResult(res, {
				allowedOrigins,
				error: 'GitHub authentication failed. Please try again.',
			});
		}

		const data = await tokenResponse.json();
		if (
			typeof data.access_token !== 'string' ||
			!data.access_token ||
			data.access_token.length > 2048
		) {
			console.error('GitHub OAuth response did not include a valid token');
			return sendOAuthResult(res, {
				allowedOrigins,
				error: 'GitHub authentication failed. Please try again.',
			});
		}

		return sendOAuthResult(res, {
			allowedOrigins,
			token: data.access_token,
		});
	} catch (error) {
		console.error('GitHub OAuth request failed', {
			name: error instanceof Error ? error.name : 'UnknownError',
		});
		return sendOAuthResult(res, {
			allowedOrigins,
			error: 'CMS authentication is temporarily unavailable.',
		});
	}
}
