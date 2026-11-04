import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { test } from 'node:test';

// Run after npm run build: check the actual pre-rendered lesson and shipped files.
const route = '/tutorials/advanced/black-swan-bistro-part-9';
const html = readFileSync(new URL(`../dist${route}/index.html`, import.meta.url), 'utf8');
const text = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ');

test('Part 9 renders its introduction, all five activities, and escaped example', () => {
  assert.equal((html.match(/<h1(?:\s[^>]*)?>/g) || []).length, 1);
  assert.match(text, /Businesses change/);
  assert.match(text, /maintaining one for a client/);
  for (let activity = 1; activity <= 5; activity++) {
    assert.match(text, new RegExp(`Activity ${activity}:`));
  }
  assert.match(html, /&lt;article/);
  assert.doesNotMatch(html, /Missing required prop|Under Construction/);
});

test('approved business details and approval boundary survive rendering', () => {
  for (const detail of ['5:30 pm', '9:00 pm', '8:30 pm', '1 November 2026', '9 May 2027', '5 May 2027', '$75', '$30', '$16', 'shortbread biscuit', 'dairy, eggs, wheat and gluten', 'simulated approval']) {
    assert.ok(text.includes(detail), detail);
  }
  assert.match(text, /before deploying to production/);
  assert.doesNotMatch(text, /native berry compote/);
});

test('four distinct downloadable worksheets are included in the build', () => {
  const links = [...html.matchAll(/href="(\/resources\/black-swan-bistro-part-9\/[^"#]+\.md)"/g)].map(match => match[1]);
  assert.equal(new Set(links).size, 4);
  for (const link of links) {
    const source = readFileSync(new URL(`../public${link}`, import.meta.url), 'utf8');
    assert.equal(readFileSync(new URL(`../dist${link}`, import.meta.url), 'utf8'), source);
    assert.ok(source.length > 1000, link);
  }
});

test('indexable canonical lesson has educational schema and working section targets', () => {
  assert.ok(html.includes(`rel="canonical" href="https://www.graphitedge.com.au${route}"`));
  assert.doesNotMatch(html, /name="robots" content="noindex"/);
  const schemas = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].flatMap(match => JSON.parse(match[1]));
  assert.ok(schemas.some(schema => schema['@type']?.includes('TechArticle')));
  assert.ok(schemas.some(schema => schema['@type']?.includes('LearningResource')));
  assert.ok(schemas.some(schema => schema['@type'] === 'BreadcrumbList'));
  for (const match of html.matchAll(/href="#([^"]+)"/g)) {
    assert.ok(html.includes(`id="${match[1]}"`), match[1]);
  }
  assert.ok(readFileSync(new URL('../public/sitemap.xml', import.meta.url), 'utf8').includes(route));
  assert.ok(existsSync(new URL('../dist/tutorials/advanced/black-swan-bistro-part-8/index.html', import.meta.url)));
});


test('further reading appears within Recommended Next Steps', () => {
  assert.doesNotMatch(html, /id="resources"/);
  const recommendations = html.slice(html.indexOf('id="recommended-next-steps"'));
  assert.match(recommendations, /Recommended Next Steps/);
  assert.match(recommendations, /Additional Resources/);
  for (const url of [
    'https://developer.mozilla.org/en-US/docs/Learn_web_development',
    'https://git-scm.com/book/en/v2',
    'https://web.dev/learn/accessibility',
    'https://developer.chrome.com/docs/lighthouse/',
    'https://vercel.com/docs/deployments/environments',
    'https://docs.netlify.com/deploy/deploy-types/deploy-previews/',
  ]) {
    assert.ok(recommendations.includes(`href="${url}"`), url);
    assert.equal(html.split(`href="${url}"`).length - 1, 1, url);
  }
});


test('lesson section titles use H2 and H3 without deeper heading levels', () => {
  const lesson = html.slice(html.indexOf('bsb-client-lesson'), html.indexOf('<footer'));
  const headings = [...lesson.matchAll(/<h([1-6])\b[^>]*>/g)].map(match => Number(match[1]));
  assert.equal(headings[0], 1);
  assert.ok(headings.includes(2));
  assert.ok(headings.includes(3));
  assert.ok(headings.every(level => level <= 3));
  for (let index = 1; index < headings.length; index++) {
    assert.ok(headings[index] <= headings[index - 1] + 1, 'Heading levels must not skip');
  }
});

test('client emails render in labelled containers with their full content', () => {
  const articles = [...html.matchAll(/<article\b[^>]*class="client-email"[^>]*aria-labelledby="([^"]+)"[^>]*>([\s\S]*?)<\/article>/g)];
  assert.equal(articles.length, 2);
  assert.deepEqual(articles.map(match => match[1]), ['client-email-title', 'client-response-title']);
  assert.match(articles[0][2], /A few updates to our website/);
  assert.match(articles[0][2], /Black Swan Bistro Management/);
  assert.match(articles[1][2], /RE: A few updates to our website/);
  assert.match(articles[1][2], /Sarah Mitchell/);
});

test('request-to-release diagram preserves the six-step reading order', () => {
  const flow = html.match(/<ol class="change-flow"[^>]*>([\s\S]*?)<\/ol>/);
  assert.ok(flow);
  const steps = [...flow[1].matchAll(/<li[^>]*>([\s\S]*?)<\/li>/g)].map(match => match[1].replace(/<span[^>]*aria-hidden="true"[^>]*>.*?<\/span>/g, '').replace(/<[^>]*>/g, '').trim());
  assert.deepEqual(steps, [
    'Clarify the request',
    'Plan and branch',
    'Change and test',
    'Preview and get approval',
    'Publish that version',
    'Verify live and hand over',
  ]);
});

test('independent practice uses the shared challenge styling and correct heading levels', () => {
  const section = html.slice(html.indexOf('id="independent-practice"'), html.indexOf('id="closure"'));
  assert.match(section, /class="box practice-independent"/);
  assert.match(section, /<h2[^>]*class="practice-title"[^>]*>/);
  assert.match(section, /class="challenge-box"/);
  assert.match(section, /<h3[^>]*class="task-heading"[^>]*>Your task<\/h3>/);
  assert.match(section, /<h3[^>]*class="requirements-heading"[^>]*>Requirements<\/h3>/);
  assert.match(section, /real or clearly simulated approval/);

  const earlierLesson = readFileSync(new URL('../dist/tutorials/advanced/black-swan-bistro-part-8/index.html', import.meta.url), 'utf8');
  const earlierSection = earlierLesson.slice(earlierLesson.indexOf('id="independent-practice"'), earlierLesson.indexOf('id="recap"'));
  assert.match(earlierSection, /<h3[^>]*class="practice-title"[^>]*>/);
  assert.match(earlierSection, /<h4[^>]*class="task-heading"[^>]*>/);
  assert.match(earlierSection, /<h5[^>]*class="requirements-heading"[^>]*>/);
});


test('completion email example uses the client email format', () => {
  const example = html.match(/<article\b[^>]*class="client-email"[^>]*aria-label="Example completion email"[^>]*>([\s\S]*?)<\/article>/);
  assert.ok(example);
  assert.match(example[1], /Subject: Black Swan Bistro website updates completed/);
  assert.match(example[1], /Your Name/);
});
