import DOMPurify from 'dompurify';

export function sanitizeHtml(html) {
	if (typeof DOMPurify?.sanitize === 'function') {
		return DOMPurify.sanitize(html);
	}

	return html;
}
