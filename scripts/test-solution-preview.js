import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import vm from 'node:vm';
import { parse, compileScript } from '@vue/compiler-sfc';
import { computed, ref } from 'vue';
import { JSDOM } from 'jsdom';
import { sanitizeHtml } from '../src/utils/sanitizeHtml.server.js';

const source = await readFile(new URL('../src/components/SolutionViewer.vue', import.meta.url), 'utf8');
const descriptor = parse(source).descriptor;
const script = compileScript(descriptor, { id: 'solution-test', genDefaultAs: 'Component' }).content;
const context = vm.createContext({});
const module = new vm.SourceTextModule(`${script}\nexport default Component;`, { context });
await module.link((name) => {
  const values = name === 'vue' ? { ref, computed } : name === '@/utils/sanitizeHtml' ? { sanitizeHtml } : { default: {} };
  return new vm.SyntheticModule(Object.keys(values), function () {
    for (const [key, value] of Object.entries(values)) this.setExport(key, value);
  }, { context });
});
await module.evaluate();

await test('preview contains styles and safe HTML without allowing a style breakout', () => {
  const component = module.namespace.default.setup({
    solution: 'p { color: red } </style><script>alert(1)</script>',
    previewHtml: '<p>Example</p><img src=x onerror=alert(1)>',
  }, { expose() {} });
  const document = new JSDOM(component.previewDocument.value).window.document;
  assert.match(document.querySelector('style').textContent, /color: red/);
  assert.equal(document.querySelector('p').textContent, 'Example');
  assert.equal(document.querySelector('script'), null);
  assert.equal(document.querySelector('img').hasAttribute('onerror'), false);
});

await test('preview iframe is sandboxed and has an accessible title', () => {
  const document = new JSDOM(descriptor.template.content).window.document;
  const frame = document.querySelector('iframe.solution-preview');
  assert.equal(frame.getAttribute('sandbox'), '');
  assert.equal(frame.getAttribute('title'), 'Solution preview');
  assert.equal(frame.getAttribute(':srcdoc'), 'previewDocument');
});
