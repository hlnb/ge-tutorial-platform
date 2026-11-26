import DOMPurify from 'dompurify';

export function sanitizeHtml(html) {
	if (typeof DOMPurify?.sanitize !== 'function') {
		throw new Error('HTML sanitization is unavailable');
	}
	return DOMPurify.sanitize(html);
}
