import {
	createOAuthState,
	createStateCookie,
	getAllowedOrigins,
	getOAuthScope,
	getSingleQueryValue,
	isAllowedSite,
	sendOAuthResult,
} from './lib/oauth.js';

const DEFAULT_CALLBACK_URL =
	'https://www.graphitedge.com.au/api/auth-callback';

export default async function handler(req, res) {
	if (req.method !== 'GET') {
		res.setHeader('Allow', 'GET');
		return res.status(405).json({ message: 'Method not allowed' });
	}

	const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
	const clientSecret = process.env.OAUTH_GITHUB_CLIENT_SECRET;
	const provider = getSingleQueryValue(req.query?.provider);
	const siteId = getSingleQueryValue(req.query?.site_id);
	const allowedOrigins = getAllowedOrigins();

	if (provider !== 'github') {
		return sendOAuthResult(res, {
			allowedOrigins,
			error: 'This Git provider is not supported.',
		});
	}

	if (!isAllowedSite(siteId, allowedOrigins)) {
		return sendOAuthResult(res, {
			allowedOrigins,
			error: 'This site is not allowed to use the CMS authenticator.',
		});
	}

	if (!clientId || !clientSecret) {
		console.error('GitHub OAuth credentials are not configured');
		return sendOAuthResult(res, {
			allowedOrigins,
			error: 'CMS authentication is temporarily unavailable.',
		});
	}

	const callbackUrl =
		process.env.OAUTH_GITHUB_CALLBACK_URL || DEFAULT_CALLBACK_URL;
	const state = createOAuthState();
	const params = new URLSearchParams({
		client_id: clientId,
		redirect_uri: callbackUrl,
		scope: getOAuthScope(),
		state,
	});

	res.setHeader('Cache-Control', 'no-store');
	res.setHeader('Set-Cookie', createStateCookie(state));
	return res.redirect(
		302,
		`https://github.com/login/oauth/authorize?${params.toString()}`,
	);
}
