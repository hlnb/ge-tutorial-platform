const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_SOURCES = new Set(['blog', 'tutorial']);

export function normalizeEmail(value) {
	return typeof value === 'string' ? value.trim() : '';
}

export function isValidEmail(value) {
	const email = normalizeEmail(value);
	return email.length > 0 && email.length <= 254 && EMAIL_PATTERN.test(email);
}

export function isValidSubscriptionSource(value) {
	return typeof value === 'string' && ALLOWED_SOURCES.has(value);
}

export function getClientKey(req) {
	const forwarded =
		req.headers?.['x-vercel-forwarded-for'] ||
		req.headers?.['x-forwarded-for'];
	const value = Array.isArray(forwarded) ? forwarded[0] : forwarded;
	return value?.split(',')[0]?.trim() || req.socket?.remoteAddress || 'unknown';
}

export function createFixedWindowRateLimiter({
	limit = 5,
	windowMs = 10 * 60 * 1000,
	maxEntries = 5000,
} = {}) {
	const clients = new Map();

	return function checkRateLimit(key, now = Date.now()) {
		let entry = clients.get(key);
		if (!entry || now >= entry.resetAt) {
			entry = { count: 0, resetAt: now + windowMs };
		}

		entry.count += 1;
		clients.set(key, entry);

		if (clients.size > maxEntries) {
			for (const [clientKey, clientEntry] of clients) {
				if (now >= clientEntry.resetAt || clients.size > maxEntries) {
					clients.delete(clientKey);
				}
			}
		}

		return {
			allowed: entry.count <= limit,
			retryAfterSeconds: Math.max(
				1,
				Math.ceil((entry.resetAt - now) / 1000),
			),
		};
	};
}
