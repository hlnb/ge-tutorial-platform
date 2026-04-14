/**
 * RSSFeedService.js
 * Service for generating RSS feeds from blog posts and tutorials
 */

// 1. Import tutorials alongside posts
import { posts, tutorials } from '@/router/index.js'; 

// Generate RSS feed XML
function generateRSSFeed() {
  const siteUrl = 'https://graphitedge.com.au';
  const feedUrl = `${siteUrl}/rss.xml`;
  const siteTitle = 'GraphiteEdge';
  const siteDescription = 'Web Development Tutorials and Articles';

  const pubDate = new Date().toUTCString();

  let xml = '<?xml version="1.0" encoding="UTF-8" ?>\n';
  xml += '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n';
  xml += '<channel>\n';

  xml += `  <title>${siteTitle}</title>\n`;
  xml += `  <link>${siteUrl}</link>\n`;
  xml += `  <description>${siteDescription}</description>\n`;
  xml += `  <language>en-au</language>\n`;
  xml += `  <lastBuildDate>${pubDate}</lastBuildDate>\n`;
  xml += `  <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />\n`;

  // 2. Prepare and normalize both sets of data
  const allContent = [
    ...Object.entries(posts).map(([slug, item]) => ({
      slug,
      ...item,
      type: 'post',
      urlPath: 'posts' // URL structure: /posts/slug
    })),
    ...Object.entries(tutorials).map(([slug, item]) => ({
      slug,
      ...item,
      type: 'tutorial',
      urlPath: 'tutorials' // URL structure: /tutorials/slug
    }))
  ];

  // 3. Filter and sort the combined array
  const publishedContent = allContent
    .map((item) => ({
      ...item,
      publishDate: new Date(item.publishDate),
    }))
    .filter(
      (item) =>
        item.status === 'published' ||
        (item.status === 'scheduled' && item.publishDate <= new Date()),
    )
    .sort((a, b) => b.publishDate - a.publishDate);

  // Add items for each piece of content
  publishedContent.forEach((item) => {
    // Dynamic URL based on content type
    const itemUrl = `${siteUrl}/${item.urlPath}/${item.slug}`;
    const itemDate = item.publishDate.toUTCString();

    xml += '  <item>\n';
    xml += `    <title>${escapeXml(item.title)}</title>\n`;
    xml += `    <link>${itemUrl}</link>\n`;
    xml += `    <guid isPermaLink="true">${itemUrl}</guid>\n`;
    xml += `    <pubDate>${itemDate}</pubDate>\n`;
    xml += `    <description>${escapeXml(item.description)}</description>\n`;

    // 4. Add the Content Type as a category for automation filtering
    xml += `    <category>${item.type === 'tutorial' ? 'Tutorial' : 'Blog'}</category>\n`;

    if (item.tags && item.tags.length > 0) {
      item.tags.forEach((tag) => {
        xml += `    <category>${escapeXml(tag)}</category>\n`;
      });
    }

    if (item.author) {
      xml += `    <author>info@graphitedge.com.au (${escapeXml(item.author)})</author>\n`;
    }

    if (item.imageUrl) {
      xml += '    <enclosure ';
      xml += `url="${siteUrl}${item.imageUrl}" `;
      xml += 'type="image/svg+xml" ';
      xml += 'length="0" />\n';
    }

    xml += '  </item>\n';
  });

  xml += '</channel>\n';
  xml += '</rss>';

  return xml;
}

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