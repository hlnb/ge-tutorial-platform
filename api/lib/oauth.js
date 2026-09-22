import { randomBytes, timingSafeEqual } from 'node:crypto';

const DEFAULT_ALLOWED_ORIGINS = [
	'https://www.graphitedge.com.au',
	'https://graphitedge.com.au',
];

const STATE_COOKIE_NAME = '__Host-ge_oauth_state';

export function getAllowedOrigins(value = process.env.OAUTH_ALLOWED_ORIGINS) {
	const candidates = value
		? value.split(',').map((origin) => origin.trim())
		: DEFAULT_ALLOWED_ORIGINS;

	const origins = candidates.flatMap((candidate) => {
		try {
			const url = new URL(candidate);
			if (!['https:', 'http:'].includes(url.protocol) || url.pathname !== '/') {
				return [];
			}
			return [url.origin];
		} catch {
			return [];
		}
	});

	return [...new Set(origins.length ? origins : DEFAULT_ALLOWED_ORIGINS)];
}

export function isAllowedSite(siteId, allowedOrigins = getAllowedOrigins()) {
	if (typeof siteId !== 'string' || !siteId.trim()) return false;

	try {
		const siteUrl = new URL(
			siteId.includes('://') ? siteId : `https://${siteId}`,
		);
		return allowedOrigins.some(
			(origin) => new URL(origin).hostname === siteUrl.hostname,
		);
	} catch {
		return false;
	}
}

export function getOAuthScope(value = process.env.OAUTH_GITHUB_SCOPE) {
	return value === 'repo' ? 'repo' : 'public_repo';
}

export function createOAuthState() {
	return randomBytes(32).toString('hex');
}

export function getSingleQueryValue(value) {
	return typeof value === 'string' ? value : null;
}

export function createStateCookie(state) {
	return `${STATE_COOKIE_NAME}=github.${state}; HttpOnly; Path=/; Max-Age=600; SameSite=Lax; Secure`;
}

export function clearStateCookie() {
	return `${STATE_COOKIE_NAME}=deleted; HttpOnly; Path=/; Max-Age=0; SameSite=Lax; Secure`;
}

export function readStateCookie(cookieHeader = '') {
	const cookies = cookieHeader.split(';').map((part) => part.trim());
	const prefix = `${STATE_COOKIE_NAME}=`;
	const cookie = cookies.find((part) => part.startsWith(prefix));
	if (!cookie) return null;

	const value = cookie.slice(prefix.length);
	const match = value.match(/^github\.([a-f0-9]{64})$/);
	return match?.[1] ?? null;
}

export function statesMatch(expected, received) {
	if (
		typeof expected !== 'string' ||
		typeof received !== 'string' ||
		expected.length !== received.length
	) {
		return false;
	}

	return timingSafeEqual(Buffer.from(expected), Buffer.from(received));
}

function serializeForScript(value) {
	return JSON.stringify(value).replaceAll('<', '\\u003c');
}

export function createOAuthResultHtml({
	token,
	error,
	allowedOrigins = getAllowedOrigins(),
}) {
	const outcome = error ? 'error' : 'success';
	const content = error
		? { provider: 'github', error }
		: { provider: 'github', token };
	const resultMessage = `authorization:github:${outcome}:${JSON.stringify(content)}`;

	return `<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>GraphitEdge CMS authentication</title>
	</head>
	<body>
		<p>Completing authentication...</p>
		<script>
			(() => {
				const allowedOrigins = ${serializeForScript(allowedOrigins)};
				const resultMessage = ${serializeForScript(resultMessage)};

				window.addEventListener('message', (event) => {
					if (
						event.source !== window.opener ||
						event.data !== 'authorizing:github' ||
						!allowedOrigins.includes(event.origin)
					) {
						return;
					}

					window.opener.postMessage(resultMessage, event.origin);
					window.close();
				});

				for (const origin of allowedOrigins) {
					window.opener?.postMessage('authorizing:github', origin);
				}
			})();
		</script>
	</body>
</html>`;
}

export function sendOAuthResult(res, options) {
	res.setHeader('Cache-Control', 'no-store');
	res.setHeader('Content-Type', 'text/html; charset=utf-8');
	res.setHeader(
		'Content-Security-Policy',
		"default-src 'none'; script-src 'unsafe-inline'; base-uri 'none'; frame-ancestors 'none'",
	);
	res.setHeader('Referrer-Policy', 'no-referrer');
	res.setHeader('X-Content-Type-Options', 'nosniff');
	return res.status(200).send(createOAuthResultHtml(options));
}
