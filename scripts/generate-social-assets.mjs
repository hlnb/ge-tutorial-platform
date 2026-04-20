/* global console */

import fs from 'node:fs';
import path from 'node:path';

const outputRoot = path.resolve('public/assets/social/tutorial-carousels');
const width = 1080;
const height = 1350;

const brand = {
  red: '#8d0000',
  mahogany: '#6a0808',
  grey: '#4d4d4d',
  blue: '#4b88a2',
  green: '#87bba2',
  tea: '#c9e4ca',
  snow: '#fff9fb',
  light: '#f9eae1',
  line: '#d3d4d9',
  ink: '#242424',
  white: '#ffffff',
};

const campaigns = [
  {
    id: 'how-the-web-works',
    title: 'How the Web Actually Works',
    pathway: 'Understand the Web',
    url: 'graphitedge.com/tutorials/getting-started/how-internet-works',
    caption:
      'Before you write your first page, it helps to understand the journey a page takes.\n\nThis GraphiteEdge tutorial explains browsers, servers, HTTP, and what really happens after someone types a URL.\n\nStart here if you want web development to feel less mysterious.',
    slides: [
      {
        eyebrow: 'Start here',
        headline: 'What happens when you type a URL?',
        body: 'A calm first look at browsers, servers, requests, and responses.',
        visual: 'browserServer',
      },
      {
        headline: 'Your browser asks for a page.',
        body: 'It sends a request across the internet with the address you typed.',
        visual: 'request',
      },
      {
        headline: 'A server receives the request.',
        body: 'The server decides what files or data should be sent back.',
        visual: 'server',
      },
      {
        headline: 'The response carries the building blocks.',
        body: 'HTML, CSS, JavaScript, images, and other files travel back to the browser.',
        visual: 'stack',
      },
      {
        headline: 'The browser builds the page you see.',
        body: 'It reads the files, creates the page structure, applies styles, and runs scripts.',
        visual: 'pageBuild',
      },
      {
        headline: 'Web development is building something that travels.',
        body: 'Learn the system first, then the code starts to make more sense.',
        visual: 'ctaPath',
      },
    ],
  },
  {
    id: 'css-not-working',
    title: "Why Your CSS Isn't Working",
    pathway: 'HTML, CSS, and JS Foundations',
    url: 'graphitedge.com/tutorials/beginner/why-your-css-isnt-working',
    caption:
      "CSS debugging gets much calmer when you stop guessing.\n\nThis tutorial walks through the common reasons styles fail: selector mistakes, inheritance, specificity, typos, and DevTools clues.\n\nSave this one for the next time a style refuses to show up.",
    slides: [
      {
        eyebrow: 'Debugging',
        headline: 'Why is my CSS not working?',
        body: 'Do not guess. Walk through the likely causes in a sensible order.',
        visual: 'cssBug',
      },
      {
        headline: 'Check the selector.',
        body: 'Is your selector actually matching the element you want to style?',
        visual: 'selectorMatch',
      },
      {
        headline: 'Check the file.',
        body: 'Is the stylesheet linked correctly, saved, and loading in the browser?',
        visual: 'linkedFile',
      },
      {
        headline: 'Check the spelling.',
        body: 'CSS often fails quietly when a property, value, class, or file path is mistyped.',
        visual: 'spelling',
      },
      {
        headline: 'Check the cascade.',
        body: 'Another rule may be winning because it is later, more specific, or marked important.',
        visual: 'cascade',
      },
      {
        headline: 'Use DevTools before you rewrite everything.',
        body: 'The browser can show which styles apply, which are crossed out, and where they came from.',
        visual: 'devtools',
      },
    ],
  },
  {
    id: 'how-to-read-a-design',
    title: 'How to Read a Design',
    pathway: 'From Design to Website',
    url: 'graphitedge.com/tutorials/intermediate/how-to-read-a-design',
    caption:
      'Design-to-code work gets easier when you know what to look for before writing CSS.\n\nThis GraphiteEdge tutorial teaches learners how to read spacing, colour, typography, and structure from a mockup, then translate those choices into code.',
    slides: [
      {
        eyebrow: 'Design to Code',
        headline: 'A design mockup is not just a picture.',
        body: 'It is full of decisions you can translate into page structure and CSS.',
        visual: 'mockup',
      },
      {
        headline: 'Look for structure first.',
        body: 'Find the header, hero, content sections, repeated blocks, and footer.',
        visual: 'structure',
      },
      {
        headline: 'Notice repeated patterns.',
        body: 'Cards, buttons, headings, spacing, and content rhythm tell you what should become reusable.',
        visual: 'patterns',
      },
      {
        headline: 'Extract design decisions.',
        body: 'Colours, type scale, alignment, and spacing are implementation clues.',
        visual: 'tokens',
      },
      {
        headline: 'Turn decisions into reusable CSS.',
        body: 'Avoid one-off fixes when a shared class or pattern would keep the project clearer.',
        visual: 'cssSystem',
      },
      {
        headline: 'Do not copy pixels blindly.',
        body: 'Understand the system behind the design, then build it with care.',
        visual: 'designCta',
      },
    ],
  },
  {
    id: 'git-basics',
    title: 'Git & GitHub Basics',
    pathway: 'Make It Live',
    url: 'graphitedge.com/tutorials/intermediate/git-basics',
    caption:
      'Git can feel intimidating because people often learn the commands before the purpose.\n\nThe GraphiteEdge Git Basics series starts with why version control matters, then builds toward commits, branches, merging, remotes, and real workflows.',
    slides: [
      {
        eyebrow: 'Version control',
        headline: 'Git is a safety system for your work.',
        body: 'It helps you save checkpoints, experiment, and recover when something goes wrong.',
        visual: 'gitSafety',
      },
      {
        headline: 'A commit is a saved checkpoint.',
        body: 'It records a meaningful moment in your project history.',
        visual: 'commit',
      },
      {
        headline: 'A branch lets you try something safely.',
        body: 'You can build a feature or experiment without risking the main version.',
        visual: 'branch',
      },
      {
        headline: 'A merge brings finished work together.',
        body: 'When the branch is ready, you combine it back into the main line of work.',
        visual: 'merge',
      },
      {
        headline: 'A remote backs up and shares your project.',
        body: 'GitHub and similar tools help you push, pull, collaborate, and deploy.',
        visual: 'remote',
      },
      {
        headline: 'Learn the workflow before the commands feel urgent.',
        body: 'Purpose first. Commands second. Confidence follows.',
        visual: 'gitCta',
      },
    ],
  },
];

function escapeXml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function wrapText(text, maxChars) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = '';

  words.forEach((word) => {
    const next = line ? `${line} ${word}` : word;
    if (next.length > maxChars && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  });

  if (line) {
    lines.push(line);
  }

  return lines;
}

function textBlock(text, x, y, options = {}) {
  const {
    maxChars = 26,
    size = 58,
    lineHeight = 1.14,
    weight = 700,
    fill = brand.ink,
    family = 'Raleway, Arial, sans-serif',
    anchor = 'start',
  } = options;

  return wrapText(text, maxChars)
    .map((line, index) => {
      const dy = index * size * lineHeight;
      return `<text x="${x}" y="${y + dy}" text-anchor="${anchor}" font-family="${family}" font-size="${size}" font-weight="${weight}" letter-spacing="0" fill="${fill}">${escapeXml(line)}</text>`;
    })
    .join('\n');
}

function paragraph(text, x, y, options = {}) {
  return textBlock(text, x, y, {
    maxChars: 42,
    size: 38,
    lineHeight: 1.32,
    weight: 400,
    fill: brand.grey,
    family: 'PT Sans, Arial, sans-serif',
    ...options,
  });
}

function header(campaign, slideNumber, totalSlides) {
  return `
    <g id="brand-header">
      <text x="90" y="104" font-family="PT Sans, Arial, sans-serif" font-size="30" font-weight="700" letter-spacing="0" fill="${brand.grey}">graphit<tspan fill="${brand.red}">Edge</tspan></text>
      <rect x="90" y="132" width="900" height="2" fill="${brand.line}" />
      <text x="90" y="182" font-family="PT Sans, Arial, sans-serif" font-size="24" font-weight="700" letter-spacing="0" fill="${brand.red}">${escapeXml(campaign.pathway)}</text>
      <text x="990" y="182" text-anchor="end" font-family="PT Sans, Arial, sans-serif" font-size="24" font-weight="700" letter-spacing="0" fill="${brand.grey}">${slideNumber}/${totalSlides}</text>
    </g>
  `;
}

function footer(campaign) {
  return `
    <g id="footer">
      <rect x="90" y="1214" width="900" height="2" fill="${brand.line}" />
      <text x="90" y="1268" font-family="PT Sans, Arial, sans-serif" font-size="28" font-weight="700" letter-spacing="0" fill="${brand.red}">${escapeXml(campaign.title)}</text>
      <text x="990" y="1268" text-anchor="end" font-family="PT Sans, Arial, sans-serif" font-size="24" font-weight="400" letter-spacing="0" fill="${brand.grey}">GraphiteEdge tutorials</text>
    </g>
  `;
}

function visual(type) {
  const card = (x, y, w, h, fill = brand.white) =>
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="${fill}" stroke="${brand.line}" stroke-width="3" />`;
  const arrow = (x1, y1, x2, y2, color = brand.red) =>
    `<path d="M ${x1} ${y1} L ${x2} ${y2}" stroke="${color}" stroke-width="7" stroke-linecap="round" /><path d="M ${x2 - 20} ${y2 - 18} L ${x2} ${y2} L ${x2 - 20} ${y2 + 18}" fill="none" stroke="${color}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />`;
  const label = (text, x, y, size = 28, color = brand.grey) =>
    `<text x="${x}" y="${y}" text-anchor="middle" font-family="PT Sans, Arial, sans-serif" font-size="${size}" font-weight="700" letter-spacing="0" fill="${color}">${escapeXml(text)}</text>`;

  switch (type) {
    case 'browserServer':
    case 'request':
      return `
        ${card(140, 780, 280, 190)}
        <rect x="140" y="780" width="280" height="44" rx="8" fill="${brand.light}" />
        <circle cx="170" cy="802" r="8" fill="${brand.red}" /><circle cx="198" cy="802" r="8" fill="${brand.green}" /><circle cx="226" cy="802" r="8" fill="${brand.blue}" />
        ${label('Browser', 280, 900)}
        ${arrow(430, 875, 640, 875)}
        ${card(660, 780, 280, 190, brand.snow)}
        <rect x="705" y="820" width="190" height="28" rx="6" fill="${brand.red}" opacity="0.85" />
        <rect x="705" y="868" width="190" height="28" rx="6" fill="${brand.blue}" opacity="0.75" />
        <rect x="705" y="916" width="190" height="28" rx="6" fill="${brand.green}" opacity="0.75" />
        ${label('Server', 800, 1014)}
      `;
    case 'server':
      return `
        ${card(250, 750, 580, 250, brand.snow)}
        <rect x="315" y="810" width="450" height="36" rx="6" fill="${brand.red}" opacity="0.88" />
        <rect x="315" y="870" width="450" height="36" rx="6" fill="${brand.blue}" opacity="0.72" />
        <rect x="315" y="930" width="450" height="36" rx="6" fill="${brand.green}" opacity="0.72" />
        ${label('Files and responses live here', 540, 1050, 30)}
      `;
    case 'stack':
      return `
        ${['HTML', 'CSS', 'JS', 'Images'].map((item, index) => `${card(280 + index * 115, 805 - index * 28, 300, 86, index % 2 ? brand.snow : brand.white)}${label(item, 430 + index * 115, 858 - index * 28, 26, index === 0 ? brand.red : brand.grey)}`).join('\n')}
      `;
    case 'pageBuild':
      return `
        ${card(210, 740, 660, 310)}
        <rect x="260" y="800" width="560" height="54" rx="8" fill="${brand.red}" opacity="0.9" />
        <rect x="260" y="884" width="250" height="118" rx="8" fill="${brand.light}" />
        <rect x="550" y="884" width="270" height="118" rx="8" fill="${brand.tea}" />
        ${label('Rendered page', 540, 1100, 30)}
      `;
    case 'ctaPath':
      return `
        <path d="M 180 915 C 330 730, 520 1080, 690 865 S 890 865, 930 785" fill="none" stroke="${brand.blue}" stroke-width="10" stroke-linecap="round" />
        <circle cx="180" cy="915" r="24" fill="${brand.red}" />
        <circle cx="540" cy="930" r="24" fill="${brand.green}" />
        <circle cx="930" cy="785" r="24" fill="${brand.red}" />
        ${label('request', 260, 820, 26)}
        ${label('response', 570, 1020, 26)}
        ${label('page', 900, 735, 26)}
      `;
    case 'cssBug':
      return `
        ${card(220, 750, 640, 300)}
        <text x="280" y="835" font-family="IBM Plex Mono, monospace" font-size="34" fill="${brand.grey}">.button {</text>
        <text x="315" y="890" font-family="IBM Plex Mono, monospace" font-size="34" fill="${brand.red}">colour: red;</text>
        <text x="280" y="945" font-family="IBM Plex Mono, monospace" font-size="34" fill="${brand.grey}">}</text>
        <circle cx="770" cy="865" r="42" fill="${brand.light}" stroke="${brand.red}" stroke-width="5" />
        ${label('?', 770, 878, 50, brand.red)}
      `;
    case 'selectorMatch':
      return `
        ${card(170, 735, 740, 310)}
        <text x="230" y="820" font-family="IBM Plex Mono, monospace" font-size="34" fill="${brand.grey}">&lt;button class="cta"&gt;</text>
        <text x="230" y="900" font-family="IBM Plex Mono, monospace" font-size="34" fill="${brand.red}">.cta { color: white; }</text>
        ${arrow(360, 850, 360, 880, brand.green)}
        ${label('selector matches class', 540, 1010, 30)}
      `;
    case 'linkedFile':
      return `
        ${card(190, 760, 700, 250)}
        <text x="245" y="850" font-family="IBM Plex Mono, monospace" font-size="32" fill="${brand.grey}">&lt;link rel="stylesheet"</text>
        <text x="245" y="910" font-family="IBM Plex Mono, monospace" font-size="32" fill="${brand.red}">href="styles.css"&gt;</text>
        ${label('Is this path correct?', 540, 1048, 30)}
      `;
    case 'spelling':
      return `
        ${card(220, 760, 640, 250)}
        <text x="280" y="855" font-family="IBM Plex Mono, monospace" font-size="34" fill="${brand.red}">backgrond-color</text>
        <path d="M 280 875 Q 325 900, 370 875 T 460 875 T 550 875" fill="none" stroke="${brand.red}" stroke-width="5" />
        ${label('Small typos. Big silence.', 540, 1048, 30)}
      `;
    case 'cascade':
      return `
        ${card(190, 735, 700, 320)}
        ${['base rule', 'component rule', 'page rule'].map((item, index) => `<rect x="${250 + index * 80}" y="${820 + index * 52}" width="430" height="58" rx="8" fill="${index === 2 ? brand.red : brand.white}" stroke="${brand.line}" stroke-width="3" /><text x="${465 + index * 80}" y="${858 + index * 52}" text-anchor="middle" font-family="PT Sans, Arial, sans-serif" font-size="28" font-weight="700" fill="${index === 2 ? brand.white : brand.grey}">${item}</text>`).join('\n')}
      `;
    case 'devtools':
      return `
        ${card(170, 735, 740, 330)}
        <rect x="170" y="735" width="740" height="58" rx="8" fill="${brand.light}" />
        <text x="235" y="845" font-family="IBM Plex Mono, monospace" font-size="30" fill="${brand.grey}">color: #8d0000;</text>
        <text x="235" y="910" font-family="IBM Plex Mono, monospace" font-size="30" fill="${brand.grey}" text-decoration="line-through">color: blue;</text>
        <text x="235" y="975" font-family="IBM Plex Mono, monospace" font-size="30" fill="${brand.red}">margin: 1rem;</text>
        ${label('Styles panel', 540, 1120, 30)}
      `;
    case 'mockup':
    case 'structure':
      return `
        ${card(240, 725, 600, 360)}
        <rect x="290" y="780" width="500" height="54" rx="8" fill="${brand.red}" opacity="0.9" />
        <rect x="290" y="865" width="500" height="110" rx="8" fill="${brand.light}" />
        <rect x="290" y="1005" width="230" height="52" rx="8" fill="${brand.tea}" />
        <rect x="560" y="1005" width="230" height="52" rx="8" fill="${brand.tea}" />
      `;
    case 'patterns':
      return `
        ${[0, 1, 2].map((index) => `${card(210 + index * 230, 785, 190, 250)}<rect x="${245 + index * 230}" y="830" width="120" height="80" rx="8" fill="${brand.light}" /><rect x="${245 + index * 230}" y="940" width="120" height="18" rx="4" fill="${brand.red}" opacity="0.8" /><rect x="${245 + index * 230}" y="980" width="90" height="18" rx="4" fill="${brand.blue}" opacity="0.7" />`).join('\n')}
      `;
    case 'tokens':
      return `
        <circle cx="280" cy="830" r="58" fill="${brand.red}" />
        <circle cx="420" cy="830" r="58" fill="${brand.blue}" />
        <circle cx="560" cy="830" r="58" fill="${brand.green}" />
        <rect x="230" y="950" width="620" height="34" rx="6" fill="${brand.grey}" />
        <rect x="230" y="1025" width="460" height="24" rx="6" fill="${brand.line}" />
        ${label('colour + type + spacing', 540, 1120, 30)}
      `;
    case 'cssSystem':
      return `
        ${card(190, 745, 700, 340)}
        <text x="250" y="830" font-family="IBM Plex Mono, monospace" font-size="32" fill="${brand.red}">.section</text>
        <text x="250" y="895" font-family="IBM Plex Mono, monospace" font-size="32" fill="${brand.blue}">.card-grid</text>
        <text x="250" y="960" font-family="IBM Plex Mono, monospace" font-size="32" fill="${brand.green}">.button-primary</text>
        ${arrow(535, 895, 760, 895, brand.red)}
        ${label('reusable patterns', 540, 1050, 30)}
      `;
    case 'designCta':
      return `
        ${card(170, 760, 300, 260)}
        ${arrow(500, 890, 610, 890, brand.red)}
        ${card(640, 760, 270, 260, brand.snow)}
        <text x="320" y="900" text-anchor="middle" font-family="PT Sans, Arial, sans-serif" font-size="30" font-weight="700" fill="${brand.grey}">Design</text>
        <text x="775" y="900" text-anchor="middle" font-family="PT Sans, Arial, sans-serif" font-size="30" font-weight="700" fill="${brand.red}">System</text>
      `;
    case 'gitSafety':
    case 'commit':
      return `
        <path d="M 190 890 H 890" stroke="${brand.line}" stroke-width="10" stroke-linecap="round" />
        ${[260, 440, 620, 800].map((x, index) => `<circle cx="${x}" cy="890" r="34" fill="${index === 1 ? brand.red : brand.white}" stroke="${index === 1 ? brand.red : brand.blue}" stroke-width="8" />`).join('\n')}
        ${label('saved checkpoints', 540, 1015, 30)}
      `;
    case 'branch':
      return `
        <path d="M 210 930 H 500 C 600 930, 610 780, 760 780 H 880" fill="none" stroke="${brand.blue}" stroke-width="10" stroke-linecap="round" />
        <path d="M 210 930 H 880" fill="none" stroke="${brand.line}" stroke-width="10" stroke-linecap="round" />
        <circle cx="500" cy="930" r="28" fill="${brand.red}" />
        <circle cx="760" cy="780" r="28" fill="${brand.green}" />
        ${label('try ideas on a branch', 540, 1050, 30)}
      `;
    case 'merge':
      return `
        <path d="M 210 930 H 520 C 650 930, 650 810, 820 810" fill="none" stroke="${brand.blue}" stroke-width="10" stroke-linecap="round" />
        <path d="M 210 930 H 520 C 650 930, 650 1010, 820 1010" fill="none" stroke="${brand.green}" stroke-width="10" stroke-linecap="round" />
        ${arrow(830, 910, 920, 910, brand.red)}
        ${label('bring finished work together', 540, 1100, 30)}
      `;
    case 'remote':
      return `
        ${card(160, 800, 250, 180)}
        ${card(670, 800, 250, 180, brand.snow)}
        ${arrow(430, 890, 640, 890, brand.red)}
        ${label('local', 285, 910, 30)}
        ${label('remote', 795, 910, 30)}
      `;
    case 'gitCta':
      return `
        <rect x="190" y="790" width="700" height="90" rx="8" fill="${brand.red}" opacity="0.9" />
        <rect x="190" y="920" width="560" height="90" rx="8" fill="${brand.blue}" opacity="0.8" />
        <rect x="190" y="1050" width="420" height="90" rx="8" fill="${brand.green}" opacity="0.8" />
        ${label('purpose', 540, 848, 32, brand.white)}
        ${label('workflow', 470, 978, 32, brand.white)}
        ${label('commands', 400, 1108, 32, brand.white)}
      `;
    default:
      return '';
  }
}

function slideSvg(campaign, slide, index) {
  const totalSlides = campaign.slides.length;
  const eyebrow = slide.eyebrow
    ? `<text x="90" y="264" font-family="PT Sans, Arial, sans-serif" font-size="28" font-weight="700" letter-spacing="0" fill="${brand.red}">${escapeXml(slide.eyebrow)}</text>`
    : '';

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" version="1.1" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title desc">
  <title id="title">${escapeXml(campaign.title)} slide ${index + 1}</title>
  <desc id="desc">${escapeXml(slide.headline)} ${escapeXml(slide.body)}</desc>
  <rect width="${width}" height="${height}" fill="${brand.snow}" />
  <rect x="40" y="40" width="1000" height="1270" rx="8" fill="${brand.white}" />
  ${header(campaign, index + 1, totalSlides)}
  ${eyebrow}
  <g id="message">
    ${textBlock(slide.headline, 90, slide.eyebrow ? 350 : 306, {
      maxChars: 24,
      size: 68,
      lineHeight: 1.12,
      fill: brand.ink,
    })}
    ${paragraph(slide.body, 92, slide.eyebrow ? 555 : 510)}
  </g>
  <g id="visual">
    ${visual(slide.visual)}
  </g>
  ${footer(campaign)}
</svg>
`;
}

function captionMarkdown(campaign) {
  return `# ${campaign.title}

Pathway: ${campaign.pathway}

URL: ${campaign.url}

## Caption

${campaign.caption}

CTA: Start the tutorial on GraphiteEdge.
`;
}

function indexHtml() {
  const sections = campaigns
    .map((campaign) => {
      const slides = campaign.slides
        .map((_, index) => {
          const filename = `${campaign.id}-${String(index + 1).padStart(2, '0')}.svg`;
          return `<figure><img src="./${campaign.id}/${filename}" alt="${escapeXml(campaign.title)} slide ${index + 1}" /><figcaption>${escapeXml(campaign.title)} ${index + 1}</figcaption></figure>`;
        })
        .join('\n');

      return `<section><h2>${escapeXml(campaign.title)}</h2><div class="grid">${slides}</div></section>`;
    })
    .join('\n');

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>GraphiteEdge Social Carousel Preview</title>
    <style>
      body {
        margin: 0;
        font-family: Raleway, Arial, sans-serif;
        background: ${brand.snow};
        color: ${brand.ink};
      }
      main {
        width: min(1180px, calc(100% - 32px));
        margin: 0 auto;
        padding: 40px 0;
      }
      h1, h2 {
        margin: 0 0 20px;
      }
      section {
        margin-top: 48px;
      }
      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 18px;
      }
      figure {
        margin: 0;
      }
      img {
        display: block;
        width: 100%;
        border: 1px solid ${brand.line};
        border-radius: 8px;
        background: white;
      }
      figcaption {
        margin-top: 8px;
        color: ${brand.grey};
        font-size: 14px;
      }
    </style>
  </head>
  <body>
    <main>
      <h1>GraphiteEdge Social Carousel Preview</h1>
      <p>Editable SVG assets for the first four tutorial social campaigns.</p>
      ${sections}
    </main>
  </body>
</html>
`;
}

fs.rmSync(outputRoot, { recursive: true, force: true });
fs.mkdirSync(outputRoot, { recursive: true });

campaigns.forEach((campaign) => {
  const campaignDir = path.join(outputRoot, campaign.id);
  fs.mkdirSync(campaignDir, { recursive: true });

  campaign.slides.forEach((slide, index) => {
    const filename = `${campaign.id}-${String(index + 1).padStart(2, '0')}.svg`;
    fs.writeFileSync(path.join(campaignDir, filename), slideSvg(campaign, slide, index));
  });

  fs.writeFileSync(path.join(campaignDir, 'caption.md'), captionMarkdown(campaign));
});

fs.writeFileSync(path.join(outputRoot, 'index.html'), indexHtml());

console.log(`Generated ${campaigns.length} carousel sets in ${outputRoot}`);
