/**
 * Convert named route references to path-based routes
 * Maps old route names to new file-based paths
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Map of old route names to new paths
const routeMap = {
  // HTML Basics
  'html-basics-index': '/tutorials/beginner/html-basics/',
  'html-basics-introduction': '/tutorials/beginner/html-basics/introduction',
  'html-basics-first-page': '/tutorials/beginner/html-basics/html-first-page',
  'html-basics-text': '/tutorials/beginner/html-basics/html-text',
  'html-basics-links': '/tutorials/beginner/html-basics/html-links',
  'html-basics-images': '/tutorials/beginner/html-basics/html-images',
  'html-basics-forms': '/tutorials/beginner/html-basics/html-forms',
  'html-basics-emmet': '/tutorials/beginner/html-basics/html-emmet',
  'html-basics-doc-structure': '/tutorials/beginner/html-basics/html-doc-structure',
  
  // CSS Basics
  'css-basics-index': '/tutorials/beginner/css-basics/',
  'css-basics-intro': '/tutorials/beginner/css-basics/introduction',
  'css-basics-selectors': '/tutorials/beginner/css-basics/selectors',
  'css-basics-colors': '/tutorials/beginner/css-basics/colors',
  'css-basics-text-properties': '/tutorials/beginner/css-basics/text',
  'css-basics-box-model': '/tutorials/beginner/css-basics/box-model',
  'css-basics-flexbox': '/tutorials/beginner/css-basics/flexbox',
  
  // JavaScript Basics
  'javascript-basics-index': '/tutorials/beginner/javascript-basics/',
  'javascript-basics-intro': '/tutorials/beginner/javascript-basics/introduction',
  'javascript-basics-variables': '/tutorials/beginner/javascript-basics/variables',
  'javascript-basics-functions': '/tutorials/beginner/javascript-basics/functions',
  'javascript-basics-conditionals': '/tutorials/beginner/javascript-basics/conditionals',
  'javascript-basics-loops': '/tutorials/beginner/javascript-basics/loops',
  'javascript-basics-arrays': '/tutorials/beginner/javascript-basics/arrays',
  'javascript-basics-objects': '/tutorials/beginner/javascript-basics/objects',
  
  // DOM Basics
  'dom-basics-index': '/tutorials/beginner/dom-basics/',
  'dom-basics-intro': '/tutorials/beginner/dom-basics/introduction',
  'dom-basics-selecting': '/tutorials/beginner/dom-basics/dom-selection',
  'dom-basics-manipulation': '/tutorials/beginner/dom-basics/dom-manipulation',
  'dom-basics-events': '/tutorials/beginner/dom-basics/dom-events',
  
  // Git Basics
  'git-basics-index': '/tutorials/intermediate/git-basics/',
  'git-basics-intro': '/tutorials/intermediate/git-basics/introduction',
  
  // AI Assisted
  'ai-assisted-index': '/tutorials/ai-assisted/',
  'ai-assisted-introduction': '/tutorials/ai-assisted/introduction',
  'ai-assisted-workflow-integration': '/tutorials/ai-assisted/workflow-integration',
  'ai-assisted-building-with-ai': '/tutorials/ai-assisted/building-with-ai',
  'ai-assisted-design-to-code': '/tutorials/ai-assisted/design-to-code',
  'ai-assisted-custom-gpt-automation': '/tutorials/ai-assisted/custom-gpt-automation',
  
  // Backend
  'backend-node-basics': '/tutorials/backend/node-basics',
  'backend-rest-apis': '/tutorials/backend/rest-apis',
  'backend-databases': '/tutorials/backend/databases',
  
  // Deployments
  'deployments-vercel-netlify': '/tutorials/deployments/vercel-netlify',
  'deployments-firebase-hosting': '/tutorials/deployments/firebase-hosting',
  'deployments-static-vs-dynamic': '/tutorials/deployments/static-vs-dynamic',
  
  // SEO Analytics
  'seo-on-page': '/tutorials/seo-analytics/on-page',
  'seo-analytics-setup': '/tutorials/seo-analytics/analytics-setup',
  
  // Capstone
  'capstone-index': '/tutorials/capstone/',
  'capstone-spec': '/tutorials/capstone/spec',
  
  // Getting Started
  'GettingStarted': '/tutorials/getting-started/',
  
  // Projects
  'projects': '/projects/',
  'personal-profile': '/projects/personal-profile',
  'recipe-page': '/projects/recipe-page',
  'photo-gallery': '/projects/photo-gallery',
  'hello-world': '/projects/hello-world',
  'number-game': '/projects/number-game',
  'temperature-converter': '/projects/temperature-converter',
  'color-switcher': '/projects/color-switcher',
  'calculator': '/projects/calculator',
  'grade-calculator': '/projects/grade-calculator',
  'interactive-demo': '/projects/interactive-demo',
  'todo-list-2': '/projects/todo-list-2',
  'quiz-game': '/projects/quiz-game',
  'photo-gallery-2': '/projects/photo-gallery-2',
};

async function convertFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  for (const [name, path] of Object.entries(routeMap)) {
    // Match patterns like :to="{ name: 'route-name' }"
    const pattern = new RegExp(`:to="\\{\\s*name:\\s*['"]${name}['"]\\s*\\}"`, 'g');
    if (pattern.test(content)) {
      content = content.replace(pattern, `:to="'${path}'"`);
      modified = true;
      console.log(`  ✓ ${name} → ${path}`);
    }
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  return false;
}

function* walkSync(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    if (file.isDirectory()) {
      yield* walkSync(path.join(dir, file.name));
    } else if (file.name.endsWith('.vue')) {
      yield path.join(dir, file.name);
    }
  }
}

async function main() {
  console.log('Converting named routes to path-based routes...\n');
  
  // Find all Vue files
  const srcDir = path.join(__dirname, '..', 'src');
  const files = [...walkSync(srcDir)];
  
  let totalConverted = 0;
  
  for (const file of files) {
    const converted = await convertFile(file);
    if (converted) {
      console.log(`✓ ${path.relative(process.cwd(), file)}`);
      totalConverted++;
    }
  }
  
  console.log(`\nConversion complete! Modified ${totalConverted} files.`);
}

main().catch(console.error);
