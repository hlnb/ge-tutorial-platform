<script setup>
defineProps({
  variant: {
    type: String,
    required: true,
  },
});

const captions = {
  'core-web-vitals':
    'Core Web Vitals describe three different parts of the experience: loading, responsiveness, and visual stability.',
  'optimisation-cycle':
    'Performance work is a repeatable cycle. Measure again after every improvement so the next decision is based on evidence.',
  'browser-rendering-path':
    'The browser discovers several resource types from the HTML, processes them, then combines the results for layout, paint, and the final page.',
  'responsive-images':
    'The browser uses viewport and image information to choose a suitably sized source instead of sending the largest file to every device.',
  'javascript-processing':
    'JavaScript has processing costs after download: the browser still needs to parse, compile, execute, and apply the resulting page updates.',
  'caching-cdn-flow':
    'A nearby cached response can return quickly. A cache miss continues to the origin, then stores the response for a later request.',
  'priority-matrix':
    'High-impact, low-effort work belongs in Do First. Lower-impact or higher-effort work can be planned, considered, or left until later.',
};
</script>

<template>
  <figure class="tutorial-figure tutorial-figure--wide performance-visual">
    <div v-if="variant === 'core-web-vitals'" class="visual-panel metric-grid">
      <article class="metric-card metric-card--loading">
        <strong>LCP</strong>
        <span>Main content appears</span>
        <small>Loading performance</small>
      </article>
      <article class="metric-card metric-card--response">
        <strong>INP</strong>
        <span>Interaction responds</span>
        <small>Responsiveness</small>
      </article>
      <article class="metric-card metric-card--stable">
        <strong>CLS</strong>
        <span>Layout stays stable</span>
        <small>Visual stability</small>
      </article>
    </div>

    <div v-else-if="variant === 'optimisation-cycle'" class="visual-panel">
      <svg
        viewBox="0 0 900 430"
        role="img"
        aria-labelledby="optimisation-cycle-title optimisation-cycle-desc"
      >
        <title id="optimisation-cycle-title">The website performance optimisation cycle</title>
        <desc id="optimisation-cycle-desc">
          A circular process moving from measure to investigate, prioritise, improve, and measure again.
        </desc>
        <circle cx="450" cy="215" r="142" fill="none" stroke="#d5dde3" stroke-width="28" />
        <path d="M450 73 A142 142 0 0 1 585 170" class="cycle-arrow" marker-end="url(#cycle-head)" />
        <path d="M590 215 A142 142 0 0 1 520 337" class="cycle-arrow" marker-end="url(#cycle-head)" />
        <path d="M480 352 A142 142 0 0 1 330 310" class="cycle-arrow" marker-end="url(#cycle-head)" />
        <path d="M315 265 A142 142 0 0 1 340 120" class="cycle-arrow" marker-end="url(#cycle-head)" />
        <path d="M378 92 A142 142 0 0 1 430 74" class="cycle-arrow" marker-end="url(#cycle-head)" />
        <g class="cycle-node">
          <circle cx="450" cy="62" r="50" />
          <text x="450" y="68">Measure</text>
        </g>
        <g class="cycle-node">
          <circle cx="615" cy="165" r="50" />
          <text x="615" y="171">Investigate</text>
        </g>
        <g class="cycle-node">
          <circle cx="555" cy="354" r="50" />
          <text x="555" y="360">Prioritise</text>
        </g>
        <g class="cycle-node">
          <circle cx="345" cy="354" r="50" />
          <text x="345" y="360">Improve</text>
        </g>
        <g class="cycle-node cycle-node--again">
          <circle cx="285" cy="165" r="50" />
          <text x="285" y="157">Measure</text>
          <text x="285" y="178">again</text>
        </g>
        <text x="450" y="208" text-anchor="middle" class="cycle-centre">Evidence-led</text>
        <text x="450" y="235" text-anchor="middle" class="cycle-centre">improvement</text>
        <defs>
          <marker id="cycle-head" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#3b6573" />
          </marker>
        </defs>
      </svg>
    </div>

    <div v-else-if="variant === 'browser-rendering-path'" class="visual-panel">
      <svg
        viewBox="0 0 1000 500"
        role="img"
        aria-labelledby="browser-path-title browser-path-desc"
      >
        <title id="browser-path-title">Browser rendering pathway</title>
        <desc id="browser-path-desc">
          HTML branches into CSS, JavaScript, images, and fonts before the browser combines the resources for layout, paint, and the final webpage.
        </desc>
        <g class="flow-box flow-box--primary">
          <rect x="35" y="205" width="135" height="70" rx="8" />
          <text x="102" y="246">HTML</text>
        </g>
        <g class="flow-box">
          <rect x="245" y="30" width="170" height="70" rx="8" />
          <text x="330" y="72">CSS to CSSOM</text>
          <rect x="245" y="145" width="170" height="70" rx="8" />
          <text x="330" y="187">JavaScript</text>
          <rect x="245" y="260" width="170" height="70" rx="8" />
          <text x="330" y="302">Images</text>
          <rect x="245" y="375" width="170" height="70" rx="8" />
          <text x="330" y="417">Fonts</text>
        </g>
        <g class="flow-box flow-box--combined">
          <rect x="505" y="155" width="150" height="70" rx="8" />
          <text x="580" y="197">Render tree</text>
          <rect x="505" y="275" width="150" height="70" rx="8" />
          <text x="580" y="317">Page assets</text>
        </g>
        <g class="flow-box flow-box--result">
          <rect x="725" y="90" width="125" height="60" rx="8" />
          <text x="787" y="126">Layout</text>
          <rect x="725" y="220" width="125" height="60" rx="8" />
          <text x="787" y="256">Paint</text>
          <rect x="725" y="350" width="125" height="60" rx="8" />
          <text x="787" y="386">Composite</text>
          <rect x="890" y="205" width="90" height="90" rx="8" />
          <text x="935" y="242">Final</text>
          <text x="935" y="264">page</text>
        </g>
        <g class="flow-lines">
          <path d="M170 240 C205 240 205 65 245 65" />
          <path d="M170 240 C205 240 205 180 245 180" />
          <path d="M170 240 C205 240 205 295 245 295" />
          <path d="M170 240 C205 240 205 410 245 410" />
          <path d="M415 65 C465 65 465 190 505 190" />
          <path d="M415 180 L505 190" />
          <path d="M415 295 L505 310" />
          <path d="M415 410 C465 410 465 310 505 310" />
          <path d="M655 190 C690 190 690 120 725 120" />
          <path d="M655 310 C690 310 690 380 725 380" />
          <path d="M787 150 L787 220" />
          <path d="M787 280 L787 350" />
          <path d="M850 380 C875 380 875 250 890 250" />
        </g>
      </svg>
    </div>

    <div v-else-if="variant === 'responsive-images'" class="visual-panel responsive-choice">
      <div class="device-stack" aria-label="Available display widths">
        <div><span class="device device--phone" aria-hidden="true"></span><strong>Phone</strong><small>480px</small></div>
        <div><span class="device device--tablet" aria-hidden="true"></span><strong>Tablet</strong><small>800px</small></div>
        <div><span class="device device--desktop" aria-hidden="true"></span><strong>Desktop</strong><small>1600px</small></div>
      </div>
      <div class="choice-arrow" aria-hidden="true">&#8594;</div>
      <div class="browser-choice">
        <strong>Browser chooses</strong>
        <span>viewport + DPR + `sizes`</span>
      </div>
      <div class="choice-arrow" aria-hidden="true">&#8594;</div>
      <div class="source-stack" aria-label="Matching image sources">
        <span>bistro-480.webp</span>
        <span>bistro-800.webp</span>
        <span>bistro-1600.webp</span>
      </div>
    </div>

    <div v-else-if="variant === 'javascript-processing'" class="visual-panel processing-path">
      <div v-for="(step, index) in ['Download', 'Parse', 'Compile', 'Execute', 'Update page']" :key="step" class="process-step">
        <span>{{ index + 1 }}</span>
        <strong>{{ step }}</strong>
        <small v-if="index === 0">network cost</small>
        <small v-else-if="index < 4">main-thread work</small>
        <small v-else>visible result</small>
      </div>
    </div>

    <div v-else-if="variant === 'caching-cdn-flow'" class="visual-panel">
      <svg
        viewBox="0 0 1000 430"
        role="img"
        aria-labelledby="cache-flow-title cache-flow-desc"
      >
        <title id="cache-flow-title">Caching and CDN delivery flow</title>
        <desc id="cache-flow-desc">
          A visitor request travels through DNS to a host or CDN. A cache hit returns the resource, while a miss requests it from the origin and stores the response.
        </desc>
        <g class="flow-box flow-box--primary">
          <rect x="30" y="180" width="135" height="70" rx="8" />
          <text x="97" y="222">Visitor</text>
          <rect x="220" y="180" width="135" height="70" rx="8" />
          <text x="287" y="222">DNS</text>
          <rect x="415" y="180" width="150" height="70" rx="8" />
          <text x="490" y="210">Host or</text>
          <text x="490" y="232">CDN</text>
        </g>
        <polygon points="690,140 790,215 690,290 590,215" fill="#fff7e6" stroke="#c47a16" stroke-width="3" />
        <text x="690" y="207" text-anchor="middle" class="decision-text">Cached?</text>
        <text x="690" y="230" text-anchor="middle" class="decision-text decision-text--small">fresh response</text>
        <g class="flow-box flow-box--result">
          <rect x="825" y="45" width="145" height="70" rx="8" />
          <text x="897" y="76">Return</text>
          <text x="897" y="98">resource</text>
          <rect x="825" y="315" width="145" height="70" rx="8" />
          <text x="897" y="346">Request</text>
          <text x="897" y="368">origin</text>
        </g>
        <g class="flow-lines">
          <path d="M165 215 L220 215" />
          <path d="M355 215 L415 215" />
          <path d="M565 215 L590 215" />
          <path d="M750 170 C785 120 795 80 825 80" />
          <path d="M750 260 C785 300 795 350 825 350" />
          <path d="M897 315 C897 260 845 245 790 235" />
        </g>
        <text x="782" y="117" class="path-label">Yes: cache hit</text>
        <text x="777" y="306" class="path-label">No: cache miss</text>
        <text x="805" y="270" class="path-label">store response</text>
      </svg>
    </div>

    <div v-else-if="variant === 'priority-matrix'" class="visual-panel">
      <svg
        viewBox="0 0 900 560"
        role="img"
        aria-labelledby="matrix-title matrix-desc"
      >
        <title id="matrix-title">Performance priority matrix</title>
        <desc id="matrix-desc">
          A four-quadrant matrix sorting performance work by user impact and implementation effort.
        </desc>
        <rect x="120" y="35" width="330" height="220" fill="#e7f6eb" />
        <rect x="450" y="35" width="330" height="220" fill="#e9f1fa" />
        <rect x="120" y="255" width="330" height="220" fill="#fff6df" />
        <rect x="450" y="255" width="330" height="220" fill="#f3f4f5" />
        <line x1="120" y1="475" x2="800" y2="475" class="axis" marker-end="url(#matrix-head)" />
        <line x1="120" y1="475" x2="120" y2="20" class="axis" marker-end="url(#matrix-head)" />
        <text x="450" y="540" text-anchor="middle" class="axis-label">Implementation effort</text>
        <text x="140" y="515" class="axis-note">Low</text>
        <text x="750" y="515" class="axis-note">High</text>
        <text x="35" y="260" text-anchor="middle" class="axis-label" transform="rotate(-90 35 260)">User impact</text>
        <text x="75" y="455" class="axis-note">Low</text>
        <text x="70" y="55" class="axis-note">High</text>
        <g class="matrix-copy">
          <text x="285" y="100" text-anchor="middle" class="matrix-heading">Do First</text>
          <text x="285" y="138" text-anchor="middle">High impact</text>
          <text x="285" y="164" text-anchor="middle">Low effort</text>
          <text x="615" y="100" text-anchor="middle" class="matrix-heading">Plan</text>
          <text x="615" y="138" text-anchor="middle">High impact</text>
          <text x="615" y="164" text-anchor="middle">High effort</text>
          <text x="285" y="325" text-anchor="middle" class="matrix-heading">Consider</text>
          <text x="285" y="363" text-anchor="middle">Lower impact</text>
          <text x="285" y="389" text-anchor="middle">Low effort</text>
          <text x="615" y="325" text-anchor="middle" class="matrix-heading">Ignore / Later</text>
          <text x="615" y="363" text-anchor="middle">Lower impact</text>
          <text x="615" y="389" text-anchor="middle">High effort</text>
        </g>
        <defs>
          <marker id="matrix-head" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#364f59" />
          </marker>
        </defs>
      </svg>
    </div>

    <figcaption>{{ captions[variant] }}</figcaption>
  </figure>
</template>

<style scoped>
.performance-visual {
  margin-top: 1.75rem;
}

.visual-panel {
  background: #f7f9fa;
  border: 1px solid #d6dfe3;
  border-radius: 8px;
  padding: clamp(0.75rem, 2vw, 1.5rem);
}

.visual-panel svg {
  display: block;
  width: 100%;
  height: auto;
}

.metric-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.metric-card {
  min-height: 170px;
  border: 2px solid;
  border-radius: 8px;
  background: #fff;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.metric-card strong {
  font-size: 2rem;
  line-height: 1;
  margin-bottom: 0.75rem;
}

.metric-card span {
  color: #24343a;
  font-weight: 700;
}

.metric-card small {
  margin-top: 0.4rem;
  color: #52656d;
}

.metric-card--loading { border-color: #377fa3; }
.metric-card--loading strong { color: #23627f; }
.metric-card--response { border-color: #be7112; }
.metric-card--response strong { color: #9a5608; }
.metric-card--stable { border-color: #3d8463; }
.metric-card--stable strong { color: #286948; }

.cycle-arrow {
  fill: none;
  stroke: #3b6573;
  stroke-width: 5;
}

.cycle-node circle {
  fill: #fff;
  stroke: #3b6573;
  stroke-width: 3;
}

.cycle-node text,
.flow-box text,
.decision-text,
.matrix-copy,
.axis-label,
.axis-note,
.path-label {
  fill: #24343a;
  font-family: inherit;
}

.cycle-node text {
  text-anchor: middle;
  font-size: 17px;
  font-weight: 700;
}

.cycle-node--again text { font-size: 16px; }
.cycle-centre { fill: #52656d; font-size: 20px; font-weight: 700; }

.flow-box rect {
  fill: #fff;
  stroke: #708892;
  stroke-width: 2.5;
}

.flow-box--primary rect { fill: #e7f3f7; stroke: #377fa3; }
.flow-box--combined rect { fill: #fff4dc; stroke: #be7112; }
.flow-box--result rect { fill: #e7f6eb; stroke: #3d8463; }

.flow-box text {
  text-anchor: middle;
  font-size: 18px;
  font-weight: 700;
}

.flow-lines path {
  fill: none;
  stroke: #536b75;
  stroke-width: 3;
}

.responsive-choice {
  display: grid;
  grid-template-columns: minmax(190px, 1fr) auto minmax(180px, 0.8fr) auto minmax(210px, 1fr);
  gap: 1rem;
  align-items: center;
}

.device-stack,
.source-stack {
  display: grid;
  gap: 0.65rem;
}

.device-stack > div,
.source-stack span,
.browser-choice {
  background: #fff;
  border: 1px solid #bac8ce;
  border-radius: 8px;
  padding: 0.75rem;
}

.device-stack > div {
  display: grid;
  grid-template-columns: 42px 1fr;
  grid-template-rows: auto auto;
  column-gap: 0.75rem;
  align-items: center;
}

.device-stack strong { grid-column: 2; }
.device-stack small { grid-column: 2; color: #52656d; }

.device {
  grid-row: 1 / 3;
  justify-self: center;
  display: block;
  border: 2px solid #377fa3;
  background: #e7f3f7;
}

.device--phone { width: 18px; height: 32px; border-radius: 4px; }
.device--tablet { width: 28px; height: 34px; border-radius: 4px; }
.device--desktop { width: 38px; height: 26px; border-radius: 2px; }

.browser-choice {
  min-height: 125px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-color: #be7112;
  background: #fff4dc;
}

.browser-choice span { margin-top: 0.5rem; color: #52656d; }
.choice-arrow { color: #3b6573; font-size: 2rem; font-weight: 700; }
.source-stack span { font-family: monospace; font-size: 0.9rem; overflow-wrap: anywhere; }

.processing-path {
  display: grid;
  gap: 0.6rem;
  max-width: 560px;
  margin-inline: auto;
}

.process-step {
  position: relative;
  min-height: 62px;
  display: grid;
  grid-template-columns: 42px 1fr auto;
  gap: 0.75rem;
  align-items: center;
  background: #fff;
  border: 1px solid #bac8ce;
  border-radius: 8px;
  padding: 0.65rem 1rem;
}

.process-step:not(:last-child)::after {
  content: "";
  position: absolute;
  left: 30px;
  bottom: -0.65rem;
  height: 0.65rem;
  border-left: 2px solid #3b6573;
}

.process-step > span {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #377fa3;
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 700;
}

.process-step small { color: #52656d; }
.decision-text { font-size: 20px; font-weight: 700; }
.decision-text--small { font-size: 14px; font-weight: 400; }
.path-label { font-size: 15px; font-weight: 700; }
.axis { stroke: #364f59; stroke-width: 3; }
.axis-label { font-size: 20px; font-weight: 700; }
.axis-note { font-size: 15px; }
.matrix-copy { font-size: 18px; }
.matrix-heading { font-size: 25px; font-weight: 700; }

figcaption {
  margin-top: 0.75rem;
  color: #52656d;
  font-size: 0.95rem;
  line-height: 1.5;
}

@media (max-width: 760px) {
  .metric-grid { grid-template-columns: 1fr; }
  .metric-card { min-height: 130px; }

  .responsive-choice {
    grid-template-columns: 1fr;
  }

  .choice-arrow {
    line-height: 1;
    text-align: center;
    transform: rotate(90deg);
  }

  .process-step {
    grid-template-columns: 38px 1fr;
  }

  .process-step small {
    grid-column: 2;
  }
}
</style>
