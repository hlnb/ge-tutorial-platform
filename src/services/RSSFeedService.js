/**
 * RSSFeedService.js
 * Service for generating RSS feeds from blog posts
 */

import { posts } from '@/router/index.js';

// Generate RSS feed XML
function generateRSSFeed() {
	const siteUrl = 'https://graphitedge.com.au'; // Replace with your actual domain
	const feedUrl = `${siteUrl}/rss.xml`;
	const siteTitle = 'GraphiteEdge';
	const siteDescription = 'Web Development Tutorials and Articles';

	// Current date in RFC 822 format
	const pubDate = new Date().toUTCString();

	// XML header
	let xml = '<?xml version="1.0" encoding="UTF-8" ?>\n';
	xml += '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n';
	xml += '<channel>\n';

	// Required channel elements
	xml += `  <title>${siteTitle}</title>\n`;
	xml += `  <link>${siteUrl}</link>\n`;
	xml += `  <description>${siteDescription}</description>\n`;
	xml += `  <language>en-au</language>\n`;
	xml += `  <lastBuildDate>${pubDate}</lastBuildDate>\n`;

	// Atom self link (required by some feed readers)
	xml += `  <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />\n`;

	// Get published posts and sort by date (newest first)
	const publishedPosts = Object.entries(posts)
		.map(([slug, post]) => ({
			slug,
			...post,
			publishDate: new Date(post.publishDate),
		}))
		.filter(
			(post) =>
				post.status === 'published' ||
				(post.status === 'scheduled' && post.publishDate <= new Date()),
		)
		.sort((a, b) => b.publishDate - a.publishDate);

	// Add items for each post
	publishedPosts.forEach((post) => {
		const postUrl = `${siteUrl}/posts/${post.slug}`;
		const postDate = post.publishDate.toUTCString();

		xml += '  <item>\n';
		xml += `    <title>${escapeXml(post.title)}</title>\n`;
		xml += `    <link>${postUrl}</link>\n`;
		xml += `    <guid isPermaLink="true">${postUrl}</guid>\n`;
		xml += `    <pubDate>${postDate}</pubDate>\n`;
		xml += `    <description>${escapeXml(post.description)}</description>\n`;

		// Add categories/tags if available
		if (post.tags && post.tags.length > 0) {
			post.tags.forEach((tag) => {
				xml += `    <category>${escapeXml(tag)}</category>\n`;
			});
		}

		// Add author if available
		if (post.author) {
			xml += `    <author>info@graphitedge.com.au (${escapeXml(
				post.author,
			)})</author>\n`;
		}

		// Add image if available
		if (post.imageUrl) {
			xml += '    <enclosure ';
			xml += `url="${siteUrl}${post.imageUrl}" `;
			xml += 'type="image/svg+xml" ';
			xml += 'length="0" />\n';
		}

		xml += '  </item>\n';
	});

	// Close tags
	xml += '</channel>\n';
	xml += '</rss>';

	return xml;
}

// Helper function to escape XML special characters
function escapeXml(unsafe) {
	if (!unsafe) return '';
	return unsafe
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

export default {
	generateRSSFeed,
};
