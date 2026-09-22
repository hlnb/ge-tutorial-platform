import {
	createFixedWindowRateLimiter,
	getClientKey,
	isValidEmail,
	isValidSubscriptionSource,
	normalizeEmail,
} from './lib/subscription.js';

const checkRateLimit = createFixedWindowRateLimiter();

export default async function handler(req, res) {
	if (req.method !== 'POST') {
		res.setHeader('Allow', 'POST');
		return res.status(405).json({ message: 'Method not allowed' });
	}

	const contentType = req.headers?.['content-type'] || '';
	if (!contentType.toLowerCase().startsWith('application/json')) {
		return res.status(415).json({ message: 'JSON request required' });
	}

	if (!req.body || typeof req.body !== 'object' || Array.isArray(req.body)) {
		return res.status(400).json({ message: 'Invalid subscription request' });
	}

	const { email: rawEmail, source, website } = req.body;

	// A filled honeypot receives the same response without touching Brevo.
	if (typeof website === 'string' && website.trim()) {
		return res.status(200).json({
			message: 'Please check your email to confirm your subscription.',
		});
	}

	const rateLimit = checkRateLimit(getClientKey(req));
	if (!rateLimit.allowed) {
		res.setHeader('Retry-After', String(rateLimit.retryAfterSeconds));
		return res.status(429).json({
			message: 'Too many requests. Please try again later.',
		});
	}

	const email = normalizeEmail(rawEmail);
	if (!isValidEmail(email) || !isValidSubscriptionSource(source)) {
		return res.status(400).json({ message: 'Invalid subscription request' });
	}

	const listIdValue =
		source === 'blog'
			? process.env.BREVO_BLOG_LIST_ID
			: process.env.BREVO_TUTORIAL_LIST_ID;
	const listId = Number.parseInt(listIdValue, 10);

	if (!process.env.BREVO_API_KEY || !Number.isInteger(listId) || listId <= 0) {
		console.error('Brevo subscription service is not configured', { source });
		return res.status(503).json({
			message: 'Subscription service is temporarily unavailable.',
		});
	}

	try {
		const response = await fetch('https://api.brevo.com/v3/contacts', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'api-key': process.env.BREVO_API_KEY,
			},
			body: JSON.stringify({
				email,
				listIds: [listId],
				updateEnabled: true,
				attributes: {
					SIGNUP_SOURCE: source,
				},
			}),
		});

		if (!response.ok) {
			console.error('Brevo subscription request failed', {
				status: response.status,
				source,
			});
			return res.status(502).json({
				message: 'Subscription service is temporarily unavailable.',
			});
		}

		return res.status(200).json({
			message: 'Please check your email to confirm your subscription.',
		});
	} catch (error) {
		console.error('Brevo subscription request failed', {
			name: error instanceof Error ? error.name : 'UnknownError',
			source,
		});
		return res.status(502).json({
			message: 'Subscription service is temporarily unavailable.',
		});
	}
}
