/**
 * Content Migration Script
 * 
 * This script helps migrate existing Vue SFC content to Markdown format
 * for use with Sveltia CMS while maintaining the existing Vue components.
 * 
 * Usage:
 *   node scripts/migrate-to-markdown.js
 * 
 * Or migrate specific types:
 *   node scripts/migrate-to-markdown.js --type=tutorials
 *   node scripts/migrate-to-markdown.js --type=posts
 *   node scripts/migrate-to-markdown.js --type=projects
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '..');

// Configuration
const config = {
  tutorials: {
    sourceDir: path.join(projectRoot, 'src/pages/tutorials'),
    outputDir: path.join(projectRoot, 'content/tutorials'),
    filePattern: /\.vue$/,
  },
  posts: {
    sourceDir: path.join(projectRoot, 'src/pages/posts'),
    outputDir: path.join(projectRoot, 'content/posts'),
    filePattern: /\.vue$/,
  },
  projects: {
    sourceDir: path.join(projectRoot, 'src/pages/projects'),
    outputDir: path.join(projectRoot, 'content/projects'),
    filePattern: /\.vue$/,
  },
};

/**
 * Extract frontmatter from Vue SFC
 */
function extractFrontmatter(content) {
  // Try to find export default { frontmatter: { ... } }
  const frontmatterMatch = content.match(/frontmatter:\s*{([^}]+(?:{[^}]*}[^}]*)*)/s);
  
  if (frontmatterMatch) {
    try {
      // Extract the frontmatter object
      const frontmatterStr = frontmatterMatch[0].replace('frontmatter:', '').trim();
      // This is a simplified parser - you might need a more robust solution
      return parseFrontmatterObject(frontmatterStr);
    } catch (error) {
      console.error('Error parsing frontmatter:', error);
      return null;
    }
  }
  
  // Try export const frontmatter = { ... }
  const constMatch = content.match(/export const frontmatter = ({[^;]+});/s);
  if (constMatch) {
    try {
      return parseFrontmatterObject(constMatch[1]);
    } catch (error) {
      console.error('Error parsing const frontmatter:', error);
      return null;
    }
  }
  
  return null;
}

/**
 * Simple frontmatter parser (converts JS object to YAML-like structure)
 */
function parseFrontmatterObject(objStr) {
  const frontmatter = {};
  
  // Match key-value pairs
  const keyValueRegex = /(\w+):\s*([^,}]+)/g;
  let match;
  
  while ((match = keyValueRegex.exec(objStr)) !== null) {
    const key = match[1];
    let value = match[2].trim();
    
    // Clean up the value
    value = value.replace(/^['"]|['"]$/g, ''); // Remove quotes
    value = value.replace(/,\s*$/, ''); // Remove trailing comma
    
    // Handle arrays
    if (value.startsWith('[')) {
      const arrayMatch = value.match(/\[([^\]]+)\]/);
      if (arrayMatch) {
        value = arrayMatch[1]
          .split(',')
          .map(v => v.trim().replace(/^['"]|['"]$/g, ''));
      }
    }
    
    frontmatter[key] = value;
  }
  
  return frontmatter;
}

/**
 * Extract template content from Vue SFC
 */
function extractTemplateContent(content) {
  const templateMatch = content.match(/<template>([\s\S]*?)<\/template>/);
  if (templateMatch) {
    return templateMatch[1].trim();
  }
  return '';
}

/**
 * Convert Vue template to Markdown
 */
function convertTemplateToMarkdown(template) {
  let markdown = template;
  
  // Remove Vue directives
  markdown = markdown.replace(/v-if="[^"]*"/g, '');
  markdown = markdown.replace(/v-for="[^"]*"/g, '');
  markdown = markdown.replace(/v-html="[^"]*"/g, '');
  markdown = markdown.replace(/:key="[^"]*"/g, '');
  markdown = markdown.replace(/@\w+="[^"]*"/g, '');
  
  // Convert router-link to regular links
  markdown = markdown.replace(/<router-link to="([^"]*)">(.*?)<\/router-link>/g, '[$2]($1)');
  
  // Convert headings
  markdown = markdown.replace(/<h1[^>]*>(.*?)<\/h1>/g, '# $1');
  markdown = markdown.replace(/<h2[^>]*>(.*?)<\/h2>/g, '\n## $1\n');
  markdown = markdown.replace(/<h3[^>]*>(.*?)<\/h3>/g, '\n### $1\n');
  markdown = markdown.replace(/<h4[^>]*>(.*?)<\/h4>/g, '\n#### $1\n');
  
  // Convert paragraphs
  markdown = markdown.replace(/<p[^>]*>(.*?)<\/p>/g, '\n$1\n');
  
  // Convert lists
  markdown = markdown.replace(/<ul[^>]*>(.*?)<\/ul>/gs, (match, content) => {
    return '\n' + content.replace(/<li[^>]*>(.*?)<\/li>/g, '- $1\n');
  });
  
  // Convert code blocks
  markdown = markdown.replace(/<code[^>]*>(.*?)<\/code>/gs, '`$1`');
  markdown = markdown.replace(/<pre[^>]*>(.*?)<\/pre>/gs, '\n```\n$1\n```\n');
  
  // Remove remaining HTML tags
  markdown = markdown.replace(/<[^>]+>/g, '');
  
  // Clean up excessive newlines
  markdown = markdown.replace(/\n{3,}/g, '\n\n');
  
  return markdown.trim();
}

/**
 * Generate Markdown file with YAML frontmatter
 */
function generateMarkdown(frontmatter, content) {
  const yaml = Object.entries(frontmatter)
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return `${key}:\n${value.map(v => `  - ${v}`).join('\n')}`;
      }
      return `${key}: "${value}"`;
    })
    .join('\n');
  
  return `---
${yaml}
---

${content}
`;
}

/**
 * Process a single Vue file
 */
function processVueFile(filePath, outputDir) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const frontmatter = extractFrontmatter(content);
  
  if (!frontmatter) {
    console.warn(`No frontmatter found in ${filePath}`);
    return;
  }
  
  const template = extractTemplateContent(content);
  const markdown = convertTemplateToMarkdown(template);
  
  const fileName = path.basename(filePath, '.vue') + '.md';
  const outputPath = path.join(outputDir, fileName);
  
  const markdownContent = generateMarkdown(frontmatter, markdown);
  
  // Ensure output directory exists
  fs.mkdirSync(outputDir, { recursive: true });
  
  // Write markdown file
  fs.writeFileSync(outputPath, markdownContent);
  
  console.log(`✓ Migrated: ${path.basename(filePath)} → ${fileName}`);
}

/**
 * Process directory recursively
 */
function processDirectory(sourceDir, outputDir) {
  if (!fs.existsSync(sourceDir)) {
    console.error(`Source directory not found: ${sourceDir}`);
    return;
  }
  
  const files = fs.readdirSync(sourceDir);
  
  files.forEach(file => {
    const filePath = path.join(sourceDir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      const newOutputDir = path.join(outputDir, file);
      processDirectory(filePath, newOutputDir);
    } else if (file.endsWith('.vue') && file !== 'index.vue') {
      processVueFile(filePath, outputDir);
    }
  });
}

/**
 * Main migration function
 */
function migrate(type) {
  console.log(`\n🚀 Starting migration for: ${type}\n`);
  
  const { sourceDir, outputDir } = config[type];
  
  processDirectory(sourceDir, outputDir);
  
  console.log(`\n✅ Migration complete! Output: ${outputDir}\n`);
}

/**
 * Run migration
 */
const args = process.argv.slice(2);
const typeArg = args.find(arg => arg.startsWith('--type='));

if (typeArg) {
  const type = typeArg.split('=')[1];
  if (config[type]) {
    migrate(type);
  } else {
    console.error(`Unknown type: ${type}`);
    console.log('Available types: tutorials, posts, projects');
  }
} else {
  // Migrate all
  console.log('Migrating all content types...\n');
  Object.keys(config).forEach(type => {
    migrate(type);
  });
}

export { extractFrontmatter, extractTemplateContent, convertTemplateToMarkdown };
