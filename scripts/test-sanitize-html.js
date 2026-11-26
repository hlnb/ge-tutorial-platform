import assert from 'node:assert/strict';
import { test } from 'node:test';
import { JSDOM } from 'jsdom';

// Initialize DOMPurify as it is initialized in a browser.
globalThis.window = new JSDOM('').window;
const browser = await import('../src/utils/sanitizeHtml.js');
const server = await import('../src/utils/sanitizeHtml.server.js');

for (const [environment, sanitizeHtml] of [['browser', browser.sanitizeHtml], ['server', server.sanitizeHtml]]) {
  await test(`${environment} removes executable HTML while preserving lesson markup`, () => {
    const result = sanitizeHtml('<h2 id="intro">Introduction</h2><p>Learn <strong>HTML</strong>.</p><script>alert(1)</script><img src="x" onerror="alert(1)"><a href="javascript:alert(1)">link</a>');
    assert.match(result, /<h2 id="intro">Introduction<\/h2>/);
    assert.match(result, /<strong>HTML<\/strong>/);
    assert.doesNotMatch(result, /<script|onerror|javascript:/i);
  });

  await test(`${environment} preserves code examples and form controls`, () => {
    const result = sanitizeHtml('<pre><code>&lt;p&gt;Hello&lt;/p&gt;</code></pre><form><label for="visitor-name">Name</label><input id="visitor-name" type="text"></form>');
    assert.match(result, /<code>&lt;p&gt;Hello&lt;\/p&gt;<\/code>/);
    assert.match(result, /<label for="visitor-name">Name<\/label>/);
    assert.match(result, /<input id="visitor-name" type="text">/);
  });
}

await test('server and browser produce the same HTML for representative lessons', () => {
  const input = '<h2 id="start">Start</h2><p>See <a href="/tutorials">lessons</a>.</p><img src="x" onerror="alert(1)">';
  assert.equal(server.sanitizeHtml(input), browser.sanitizeHtml(input));
});
