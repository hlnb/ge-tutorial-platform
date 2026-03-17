#!/usr/bin/env node
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = (process.env.SITEMAP_BASE_URL || 'https://www.graphitedge.com.au').replace(/\/$/, '');
const PAGES_DIR = path.resolve(__dirname, '../src/pages');
const OUTPUT_PATH = path.resolve(__dirname, '../public/sitemap.xml');

const EXCLUDED_SEGMENTS = new Set(['.archive']);

async function collectRoutes(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const urls = [];

  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue;
    if (EXCLUDED_SEGMENTS.has(entry.name)) continue;

    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      const nested = await collectRoutes(fullPath);
      urls.push(...nested);
      continue;
    }

    if (!entry.isFile() || !entry.name.endsWith('.vue')) continue;

    const relativePath = path.relative(PAGES_DIR, fullPath);
    const route = filePathToRoute(relativePath);
    if (!route) continue;

    const stats = await fs.stat(fullPath);
    urls.push({
      loc: route === '/' ? SITE_URL : `${SITE_URL}${route}`,
      lastmod: stats.mtime.toISOString().split('T')[0],
    });
  }

  return urls;
}

function filePathToRoute(relativePath) {
  let route = relativePath.replace(/\\/g, '/');

  if (!route.endsWith('.vue')) return null;
  route = route.replace(/index\.vue$/i, '');
  route = route.replace(/\.vue$/i, '');

  if (route === '') return '/';

  if (route.endsWith('/')) route = route.slice(0, -1);
  return `/${route}`;
}

function buildXml(urls) {
  const urlEntries = urls
    .sort((a, b) => a.loc.localeCompare(b.loc))
    .map((url) =>
      ['  <url>', `    <loc>${url.loc}</loc>`, `    <lastmod>${url.lastmod}</lastmod>`, '  </url>'].join('\n'),
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n` +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    `${urlEntries}\n` +
    '</urlset>\n';
}

async function ensureOutputDirExists() {
  await fs.mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
}

async function main() {
  try {
    const routes = await collectRoutes(PAGES_DIR);

    if (!routes.length) {
      throw new Error('No routes detected in src/pages.');
    }

    await ensureOutputDirExists();
    const xml = buildXml(routes);
    await fs.writeFile(OUTPUT_PATH, xml, 'utf8');

    console.log(`Sitemap generated with ${routes.length} routes at ${OUTPUT_PATH}`);
  } catch (error) {
    console.error('Failed to generate sitemap:', error);
    process.exit(1);
  }
}

main();
