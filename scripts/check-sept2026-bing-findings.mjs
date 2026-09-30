import fs from 'node:fs';

/* global console, process */

const errors = [];

function read(path) {
  return fs.readFileSync(path, 'utf8');
}

function assert(condition, message) {
  if (!condition) {
    errors.push(message);
  }
}

function distHtml(route) {
  return read(`dist/${route}/index.html`);
}

function staticHtml(path) {
  return read(`public/${path}`);
}

function title(html) {
  return html.match(/<title[^>]*>([^<]*)<\/title>/)?.[1] || '';
}

function description(html) {
  return html.match(/<meta name="description" content="([^"]*)"/)?.[1] || '';
}

function h1Texts(html) {
  return [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/g)].map((match) =>
    match[1].replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim(),
  );
}

function imgAltValues(html) {
  return [...html.matchAll(/<img\b[^>]*>/g)].map(
    (match) => match[0].match(/alt="([^"]*)"/)?.[1],
  );
}

const staticMetaPages = [
  'projects/css-debugging/independent-practice/detective-challenge.html',
  'projects/css-debugging/guided-practice/debug-practice.html',
  'projects/rotto-rocks/wireframes/index.html',
];

for (const page of staticMetaPages) {
  const metaDescription = description(staticHtml(page));
  assert(metaDescription.length > 50, `${page} needs a meaningful meta description`);
}

const titlePages = [
  'tutorials/seo-analytics/status-codes-redirects-and-removals',
  'tutorials/seo-analytics/google-search-console',
  'tutorials/seo-analytics/measuring-and-improving-a-website',
  'tutorials/seo-analytics/technical-seo-basics',
];

for (const route of titlePages) {
  const pageTitle = title(distHtml(route));
  assert(pageTitle.length <= 70, `${route} title is ${pageTitle.length} characters`);
}

const oneH1Pages = [
  'tutorials/beginner/why-your-css-isnt-working',
  'tutorials/beginner/dom-basics/advanced-events',
  'tutorials/beginner/dom-basics/dynamic-content',
  'tutorials/beginner/css-basics/responsive',
  'tutorials/beginner/html-basics/html-text',
  'tutorials/beginner/dom-basics/dom-traversal',
  'tutorials/beginner/html-basics/html-first-page',
  'tutorials/beginner/html-basics/introduction',
  'posts/modern-js-patterns',
  'tutorials/beginner',
  'tutorials/intermediate',
];

for (const route of oneH1Pages) {
  const headings = h1Texts(distHtml(route));
  assert(headings.length === 1, `${route} has ${headings.length} H1 tags`);
}

const bistroPages = [
  'projects/black-swan-bistro/complete/contact.html',
  'projects/black-swan-bistro/complete/about.html',
  'projects/black-swan-bistro/complete/menu.html',
  'projects/black-swan-bistro/complete/index.html',
];

for (const page of bistroPages) {
  const altValues = imgAltValues(staticHtml(page));
  assert(altValues.every((alt) => alt !== undefined), `${page} has an image without alt`);
  assert(
    altValues.filter((alt) => alt === '').length === 1,
    `${page} should keep one decorative logo alt`,
  );
}

const briefAltValues = imgAltValues(distHtml('projects/black-swan-bistro/brief'));
assert(briefAltValues.every((alt) => alt !== undefined), 'Black Swan Bistro brief has an image without alt');
assert(
  briefAltValues.filter((alt) => alt === '').length >= 1,
  'Black Swan Bistro brief should preserve decorative wireframe logo alt text',
);

const robotsTxt = read('public/robots.txt');
assert(
  robotsTxt.includes('Disallow: /auth/'),
  'public/robots.txt should continue intentionally blocking /auth/',
);

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log('Bing sept2026 remediation checks passed.');
