/**
 * RSSFeedService.js
 * Service for generating RSS feeds from blog posts and tutorials
 */

import { tutorials } from '@/data/tutorials.js';

const SITE_URL = 'https://graphitedge.com.au';
const DEFAULT_AUTHOR = 'Helen Burgess';

// ---------------------------------------------------------------------------
// Shared helpers
// ---------------------------------------------------------------------------

function escapeXml(unsafe) {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function buildChannelXml({ title, description, feedPath }) {
  const feedUrl = `${SITE_URL}/${feedPath}`;
  const pubDate = new Date().toUTCString();

  let xml = '<?xml version="1.0" encoding="UTF-8" ?>\n';
  xml += '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n';
  xml += '<channel>\n';
  xml += `  <title>${escapeXml(title)}</title>\n`;
  xml += `  <link>${SITE_URL}</link>\n`;
  xml += `  <description>${escapeXml(description)}</description>\n`;
  xml += `  <language>en-au</language>\n`;
  xml += `  <lastBuildDate>${pubDate}</lastBuildDate>\n`;
  xml += `  <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />\n`;
  return xml;
}

function buildItemsXml(items) {
  let xml = '';
  items.forEach((item) => {
    const itemUrl = `${SITE_URL}/${item.urlPath}/${item.slug}`;
    const itemDate = item.publishDate.toUTCString();

    xml += '  <item>\n';
    xml += `    <title>${escapeXml(item.title)}</title>\n`;
    xml += `    <link>${itemUrl}</link>\n`;
    xml += `    <guid isPermaLink="true">${itemUrl}</guid>\n`;
    xml += `    <pubDate>${itemDate}</pubDate>\n`;
    xml += `    <description>${escapeXml(item.description)}</description>\n`;

    if (item.tags.length > 0) {
      item.tags.forEach((tag) => {
        xml += `    <category>${escapeXml(tag)}</category>\n`;
      });
    }

    xml += `    <author>info@graphitedge.com.au (${escapeXml(item.author)})</author>\n`;

    if (item.imageUrl) {
      xml += `    <enclosure url="${SITE_URL}${item.imageUrl}" type="image/svg+xml" length="0" />\n`;
    }

    xml += '  </item>\n';
  });
  return xml;
}

// ---------------------------------------------------------------------------
// Data normalisers
// ---------------------------------------------------------------------------

function getNormalizedPosts(postsData) {
  return Object.entries(postsData)
    .map(([slug, post]) => ({
      slug,
      title: post.title,
      description: post.description,
      publishDate: new Date(post.publishDate),
      status: post.status,
      author: post.author || DEFAULT_AUTHOR,
      tags: post.tags || [],
      imageUrl: post.imageUrl,
      urlPath: 'posts',
    }))
    .filter(
      (item) =>
        item.publishDate &&
        (item.status === 'published' ||
          (item.status === 'scheduled' && item.publishDate <= new Date())),
    )
    .sort((a, b) => b.publishDate - a.publishDate);
}

function getNormalizedTutorials() {
  return tutorials
    .filter((tut) => !tut.hiddenFromCurriculum)
    .map((tut) => ({
      slug: tut.slug,
      title: tut.title,
      description: tut.summary || '',
      publishDate: tut.publishDate ? new Date(tut.publishDate) : null,
      status: 'published',
      author: DEFAULT_AUTHOR,
      tags: tut.tags || [],
      imageUrl: null,
      urlPath: 'tutorials',
    }))
    .filter((item) => item.publishDate)
    .sort((a, b) => b.publishDate - a.publishDate);
}

// ---------------------------------------------------------------------------
// Public feed generators
// ---------------------------------------------------------------------------

/** Blog posts only — served at /rss.xml */
function generateRSSFeed(postsData) {
  const items = getNormalizedPosts(postsData);
  let xml = buildChannelXml({
    title: 'GraphiteEdge — Blog',
    description: 'Web development articles and guides from GraphiteEdge.',
    feedPath: 'rss.xml',
  });
  xml += buildItemsXml(items);
  xml += '</channel>\n</rss>';
  return xml;
}

/** Tutorials only — served at /tutorials.xml */
function generateTutorialsFeed() {
  const items = getNormalizedTutorials();
  let xml = buildChannelXml({
    title: 'GraphiteEdge — Tutorials',
    description: 'Structured web development tutorials from GraphiteEdge.',
    feedPath: 'tutorials.xml',
  });
  xml += buildItemsXml(items);
  xml += '</channel>\n</rss>';
  return xml;
}

export default { generateRSSFeed, generateTutorialsFeed };