import assert from 'node:assert/strict';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import vue from '@vitejs/plugin-vue';
import { createSSRApp, h } from 'vue';
import { renderToString } from '@vue/server-renderer';

const src = fileURLToPath(new URL('../src', import.meta.url));
const server = await createServer({
  configFile: false,
  optimizeDeps: { noDiscovery: true, include: [] },
  plugins: [vue()],
  resolve: { alias: [
    { find: '@/utils/sanitizeHtml', replacement: `${src}/utils/sanitizeHtml.server.js` },
    { find: '@', replacement: src },
  ] },
  server: { middlewareMode: true, watch: null },
});
const input = '<p>Keep <strong>this lesson</strong></p><img src="x" onerror="alert(1)"><script>alert(1)</script>';

try {
  for (const [name, props] of [
    ['AnticipatorySet', { hook: input }],
    ['GuidedPractice', { steps: [{ instructions: input }] }],
    ['IndependentPractice', { task: input }],
    ['ClosureSection', { reflectionPrompts: [{ content: input }], realWorldApplication: input, nextSteps: input }],
  ]) {
    await test(`${name} preserves formatting and removes executable HTML`, async () => {
      const component = (await server.ssrLoadModule(`/src/components/hunter/${name}.vue`)).default;
      const output = await renderToString(createSSRApp({ render: () => h(component, props) }));
      assert.match(output, /<strong>this lesson<\/strong>/);
      assert.doesNotMatch(output, /onerror|<script/i);
      if (name === 'ClosureSection') assert.equal((output.match(/<strong>this lesson<\/strong>/g) || []).length, 3);
    });
  }
} finally {
  await server.close();
}
