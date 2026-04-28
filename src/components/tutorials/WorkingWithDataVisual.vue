<script setup>
defineProps({
  variant: {
    type: String,
    required: true,
  },
});

const captions = {
  'async-flow':
    'Slow work leaves the call stack, waits with the browser, then returns when JavaScript is free to continue.',
  'promise-states':
    'A Promise starts pending, then settles once as either fulfilled or rejected.',
  'fetch-cycle':
    'A fetch call gives you a Response first, then a second async step turns the body stream into usable JSON data.',
  'response-check':
    'fetch() and HTTP status checks solve different problems: one catches network failure, the other tells you whether the server accepted the request.',
  'json-pipeline':
    'JSON starts as text, becomes JavaScript data in memory, then gets reshaped into something your interface can actually render.',
  'array-reshape':
    'Array methods help you move from “everything the API sent” to “only what this UI needs right now.”',
  'async-await':
    'async/await keeps the order of operations readable without changing the underlying Promise-based engine.',
  parallel:
    'Independent requests can run side by side; Promise.all waits once at the end instead of forcing each request to queue behind the previous one.',
  'world-explorer':
    'The mini-project follows a common product pattern: fetch once, reshape once, then reuse the prepared data for filtering and rendering.',
};
</script>

<template>
  <figure class="tutorial-figure tutorial-figure--wide working-data-visual">
    <div v-if="variant === 'async-flow'" class="visual-card">
      <svg viewBox="0 0 900 260" xmlns="http://www.w3.org/2000/svg" aria-labelledby="async-flow-title">
        <title id="async-flow-title">Diagram of async JavaScript handing slow work to browser APIs and receiving results later.</title>
        <rect x="24" y="46" width="180" height="170" rx="18" fill="#f8fbff" stroke="#9bc8eb" stroke-width="2"/>
        <text x="114" y="78" text-anchor="middle" font-size="22" font-weight="700" fill="#17425c">Call Stack</text>
        <rect x="54" y="96" width="120" height="34" rx="10" fill="#3298dc"/>
        <text x="114" y="118" text-anchor="middle" font-size="16" fill="#fff">click handler</text>
        <rect x="54" y="138" width="120" height="34" rx="10" fill="#73bdf0"/>
        <text x="114" y="160" text-anchor="middle" font-size="16" fill="#17425c">render UI</text>
        <rect x="252" y="46" width="220" height="170" rx="18" fill="#fffaf2" stroke="#f0c36a" stroke-width="2"/>
        <text x="362" y="78" text-anchor="middle" font-size="22" font-weight="700" fill="#6a4700">Browser APIs</text>
        <rect x="282" y="104" width="160" height="42" rx="12" fill="#ffd88c"/>
        <text x="362" y="130" text-anchor="middle" font-size="17" fill="#6a4700">network request</text>
        <rect x="282" y="156" width="160" height="32" rx="12" fill="#ffe7b6"/>
        <text x="362" y="177" text-anchor="middle" font-size="15" fill="#6a4700">waiting outside JS</text>
        <rect x="520" y="46" width="170" height="170" rx="18" fill="#f5f3ff" stroke="#b6a5ff" stroke-width="2"/>
        <text x="605" y="78" text-anchor="middle" font-size="22" font-weight="700" fill="#4d35a3">Queue</text>
        <rect x="550" y="118" width="110" height="40" rx="12" fill="#cfc4ff"/>
        <text x="605" y="143" text-anchor="middle" font-size="16" fill="#3d2a84">callback ready</text>
        <rect x="738" y="46" width="138" height="170" rx="18" fill="#eefbf2" stroke="#8fd0a0" stroke-width="2"/>
        <text x="807" y="78" text-anchor="middle" font-size="22" font-weight="700" fill="#1f6b34">UI</text>
        <rect x="760" y="112" width="94" height="64" rx="12" fill="#bcecc7"/>
        <text x="807" y="138" text-anchor="middle" font-size="15" fill="#1f6b34">browser stays</text>
        <text x="807" y="158" text-anchor="middle" font-size="15" fill="#1f6b34">interactive</text>
        <path d="M204 115 C224 115, 232 115, 252 115" stroke="#3298dc" stroke-width="4" fill="none" marker-end="url(#arrow)"/>
        <path d="M472 138 C495 138, 500 138, 520 138" stroke="#b68a1f" stroke-width="4" fill="none" marker-end="url(#arrow)"/>
        <path d="M604 98 C604 78, 720 78, 738 132" stroke="#7f66e6" stroke-width="4" fill="none" marker-end="url(#arrow)"/>
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#2a5875"/>
          </marker>
        </defs>
      </svg>
    </div>

    <div v-else-if="variant === 'promise-states'" class="visual-card">
      <svg viewBox="0 0 900 220" xmlns="http://www.w3.org/2000/svg" aria-labelledby="promise-states-title">
        <title id="promise-states-title">Promise state diagram showing pending leading to fulfilled or rejected.</title>
        <circle cx="180" cy="110" r="64" fill="#f8fbff" stroke="#9bc8eb" stroke-width="3"/>
        <text x="180" y="102" text-anchor="middle" font-size="22" font-weight="700" fill="#17425c">Pending</text>
        <text x="180" y="128" text-anchor="middle" font-size="15" fill="#17425c">still waiting</text>
        <circle cx="470" cy="70" r="56" fill="#eefbf2" stroke="#8fd0a0" stroke-width="3"/>
        <text x="470" y="65" text-anchor="middle" font-size="22" font-weight="700" fill="#1f6b34">Fulfilled</text>
        <text x="470" y="91" text-anchor="middle" font-size="15" fill="#1f6b34">result arrives</text>
        <circle cx="470" cy="150" r="56" fill="#fff3f1" stroke="#f0a79c" stroke-width="3"/>
        <text x="470" y="145" text-anchor="middle" font-size="22" font-weight="700" fill="#8a2f1f">Rejected</text>
        <text x="470" y="171" text-anchor="middle" font-size="15" fill="#8a2f1f">error arrives</text>
        <path d="M244 92 C305 72, 358 68, 414 70" stroke="#3298dc" stroke-width="4" fill="none" marker-end="url(#arrowP)"/>
        <path d="M244 128 C305 146, 358 152, 414 150" stroke="#3298dc" stroke-width="4" fill="none" marker-end="url(#arrowP)"/>
        <text x="332" y="58" text-anchor="middle" font-size="14" fill="#17425c">resolve()</text>
        <text x="332" y="168" text-anchor="middle" font-size="14" fill="#17425c">reject()</text>
        <defs>
          <marker id="arrowP" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#2a5875"/>
          </marker>
        </defs>
      </svg>
    </div>

    <div v-else-if="variant === 'fetch-cycle'" class="visual-card">
      <div class="visual-steps">
        <div class="step-card">
          <div class="step-number">1</div>
          <h3>`fetch()` request</h3>
          <p>Ask the server for data and get back a Promise for the HTTP response.</p>
        </div>
        <div class="step-card">
          <div class="step-number">2</div>
          <h3>`Response` object</h3>
          <p>Check status, headers, and whether the request succeeded.</p>
        </div>
        <div class="step-card">
          <div class="step-number">3</div>
          <h3>`response.json()`</h3>
          <p>Read and parse the body in a second async step.</p>
        </div>
        <div class="step-card">
          <div class="step-number">4</div>
          <h3>Use the data</h3>
          <p>Render, reshape, filter, or store the parsed JavaScript data.</p>
        </div>
      </div>
    </div>

    <div v-else-if="variant === 'response-check'" class="visual-card">
      <svg viewBox="0 0 900 240" xmlns="http://www.w3.org/2000/svg" aria-labelledby="response-check-title">
        <title id="response-check-title">Comparison between network failure and HTTP error handling in fetch.</title>
        <rect x="40" y="50" width="360" height="140" rx="18" fill="#fff3f1" stroke="#f0a79c" stroke-width="3"/>
        <text x="220" y="84" text-anchor="middle" font-size="24" font-weight="700" fill="#8a2f1f">Network failure</text>
        <text x="220" y="116" text-anchor="middle" font-size="17" fill="#8a2f1f">No internet, DNS, CORS block</text>
        <text x="220" y="148" text-anchor="middle" font-size="17" fill="#8a2f1f">`fetch()` Promise rejects</text>
        <text x="220" y="174" text-anchor="middle" font-size="15" fill="#8a2f1f">Handled in `.catch()` or `try/catch`</text>
        <rect x="500" y="50" width="360" height="140" rx="18" fill="#fffaf2" stroke="#f0c36a" stroke-width="3"/>
        <text x="680" y="84" text-anchor="middle" font-size="24" font-weight="700" fill="#6a4700">HTTP error</text>
        <text x="680" y="116" text-anchor="middle" font-size="17" fill="#6a4700">404, 500, permission denied</text>
        <text x="680" y="148" text-anchor="middle" font-size="17" fill="#6a4700">`fetch()` still resolves with `Response`</text>
        <text x="680" y="174" text-anchor="middle" font-size="15" fill="#6a4700">You must check `response.ok` yourself</text>
      </svg>
    </div>

    <div v-else-if="variant === 'json-pipeline'" class="visual-card">
      <svg viewBox="0 0 920 220" xmlns="http://www.w3.org/2000/svg" aria-labelledby="json-pipeline-title">
        <title id="json-pipeline-title">JSON pipeline from raw text to parsed JavaScript object to UI-ready shape.</title>
        <rect x="30" y="48" width="230" height="124" rx="16" fill="#f8fbff" stroke="#9bc8eb" stroke-width="2"/>
        <text x="145" y="80" text-anchor="middle" font-size="22" font-weight="700" fill="#17425c">Raw JSON text</text>
        <text x="145" y="114" text-anchor="middle" font-size="15" fill="#17425c">`\"name\": \"Helen\"`</text>
        <text x="145" y="138" text-anchor="middle" font-size="15" fill="#17425c">still just characters</text>
        <rect x="344" y="48" width="230" height="124" rx="16" fill="#eefbf2" stroke="#8fd0a0" stroke-width="2"/>
        <text x="459" y="80" text-anchor="middle" font-size="22" font-weight="700" fill="#1f6b34">Parsed object</text>
        <text x="459" y="114" text-anchor="middle" font-size="15" fill="#1f6b34">`data.user.name`</text>
        <text x="459" y="138" text-anchor="middle" font-size="15" fill="#1f6b34">usable in JavaScript</text>
        <rect x="658" y="48" width="230" height="124" rx="16" fill="#f5f3ff" stroke="#b6a5ff" stroke-width="2"/>
        <text x="773" y="80" text-anchor="middle" font-size="22" font-weight="700" fill="#4d35a3">UI-ready shape</text>
        <text x="773" y="114" text-anchor="middle" font-size="15" fill="#4d35a3">`{ title, city, company }`</text>
        <text x="773" y="138" text-anchor="middle" font-size="15" fill="#4d35a3">clean and focused</text>
        <path d="M260 110 L344 110" stroke="#3298dc" stroke-width="4" marker-end="url(#arrowJ)"/>
        <path d="M574 110 L658 110" stroke="#3298dc" stroke-width="4" marker-end="url(#arrowJ)"/>
        <text x="302" y="96" text-anchor="middle" font-size="14" fill="#17425c">parse</text>
        <text x="616" y="96" text-anchor="middle" font-size="14" fill="#17425c">reshape</text>
        <defs>
          <marker id="arrowJ" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#2a5875"/>
          </marker>
        </defs>
      </svg>
    </div>

    <div v-else-if="variant === 'array-reshape'" class="visual-card">
      <div class="visual-columns">
        <div class="column-card">
          <h3>API sends</h3>
          <ul>
            <li>all fields</li>
            <li>extra nesting</li>
            <li>more records than you need</li>
          </ul>
        </div>
        <div class="column-card column-card--arrow" aria-hidden="true">
          <span>filter</span>
          <span>map</span>
          <span>find</span>
        </div>
        <div class="column-card">
          <h3>UI keeps</h3>
          <ul>
            <li>only relevant items</li>
            <li>only relevant fields</li>
            <li>clear display order</li>
          </ul>
        </div>
      </div>
    </div>

    <div v-else-if="variant === 'async-await'" class="visual-card">
      <div class="code-compare">
        <div class="code-card">
          <h3>Promise chain</h3>
          <pre><code>fetch(...)
  .then(...)
  .then(...)
  .catch(...)</code></pre>
        </div>
        <div class="code-card">
          <h3>async/await</h3>
          <pre><code>try {
  const data = await ...
} catch (error) {
  ...
}</code></pre>
        </div>
      </div>
    </div>

    <div v-else-if="variant === 'parallel'" class="visual-card">
      <svg viewBox="0 0 920 220" xmlns="http://www.w3.org/2000/svg" aria-labelledby="parallel-title">
        <title id="parallel-title">Sequential requests compared with parallel Promise.all requests.</title>
        <text x="210" y="34" text-anchor="middle" font-size="22" font-weight="700" fill="#17425c">Sequential</text>
        <rect x="50" y="56" width="320" height="42" rx="12" fill="#dff0fb"/>
        <rect x="140" y="110" width="230" height="42" rx="12" fill="#bfe3f7"/>
        <rect x="230" y="164" width="140" height="42" rx="12" fill="#93cfee"/>
        <text x="210" y="83" text-anchor="middle" font-size="16" fill="#17425c">user request</text>
        <text x="255" y="137" text-anchor="middle" font-size="16" fill="#17425c">posts request</text>
        <text x="300" y="191" text-anchor="middle" font-size="16" fill="#17425c">todos request</text>
        <text x="700" y="34" text-anchor="middle" font-size="22" font-weight="700" fill="#1f6b34">Parallel with Promise.all</text>
        <rect x="540" y="56" width="280" height="34" rx="10" fill="#d9f5df"/>
        <rect x="540" y="98" width="280" height="34" rx="10" fill="#c4eccd"/>
        <rect x="540" y="140" width="280" height="34" rx="10" fill="#ace0b8"/>
        <text x="680" y="78" text-anchor="middle" font-size="16" fill="#1f6b34">user request</text>
        <text x="680" y="120" text-anchor="middle" font-size="16" fill="#1f6b34">posts request</text>
        <text x="680" y="162" text-anchor="middle" font-size="16" fill="#1f6b34">todos request</text>
        <path d="M680 178 L680 202" stroke="#1f6b34" stroke-width="4"/>
        <text x="680" y="216" text-anchor="middle" font-size="15" fill="#1f6b34">wait once</text>
      </svg>
    </div>

    <div v-else-if="variant === 'world-explorer'" class="visual-card">
      <div class="visual-steps visual-steps--three">
        <div class="step-card">
          <div class="step-number">1</div>
          <h3>Fetch once</h3>
          <p>Load all countries and handle loading or failure clearly.</p>
        </div>
        <div class="step-card">
          <div class="step-number">2</div>
          <h3>Reshape once</h3>
          <p>Prepare display-ready card data instead of raw API objects.</p>
        </div>
        <div class="step-card">
          <div class="step-number">3</div>
          <h3>Render many times</h3>
          <p>Reuse the prepared data for region filters without making another full request.</p>
        </div>
      </div>
    </div>

    <figcaption>{{ captions[variant] }}</figcaption>
  </figure>
</template>

<style scoped>
.working-data-visual {
  margin-top: 1.75rem;
}

.visual-card {
  background: linear-gradient(180deg, #fbfdff 0%, #f3f8fc 100%);
  border: 1px solid #d7e6f0;
  border-radius: 18px;
  padding: 1rem;
}

.visual-card svg {
  width: 100%;
  height: auto;
  display: block;
}

.visual-steps,
.visual-columns,
.code-compare {
  display: grid;
  gap: 1rem;
}

.visual-steps {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.visual-steps--three {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.step-card,
.column-card,
.code-card {
  background: #fff;
  border: 1px solid #d7e6f0;
  border-radius: 14px;
  padding: 1rem;
}

.step-number {
  width: 2rem;
  height: 2rem;
  border-radius: 999px;
  background: #3298dc;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.step-card h3,
.column-card h3,
.code-card h3 {
  margin: 0 0 0.5rem;
  font-size: 1.05rem;
}

.step-card p,
.column-card li {
  margin: 0;
  line-height: 1.55;
}

.column-card ul {
  margin: 0;
  padding-left: 1.1rem;
}

.column-card--arrow {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #17425c;
  font-weight: 700;
  text-transform: lowercase;
}

.code-compare {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.code-card pre {
  margin: 0;
  padding: 0.9rem 1rem;
  background: #f4f8fb;
  border-radius: 12px;
  overflow-x: auto;
}

@media (max-width: 900px) {
  .visual-steps,
  .visual-steps--three,
  .visual-columns,
  .code-compare {
    grid-template-columns: 1fr;
  }
}
</style>
