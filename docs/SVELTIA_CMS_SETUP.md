# Sveltia CMS Setup & Migration Guide

## Overview

Sveltia CMS has been configured to manage three main content types for the Graphite Edge Tutorial Platform:

1. **Tutorials** - Interactive coding tutorials
2. **Blog Posts** - Articles for The Graphite Journal
3. **Projects** - Hands-on coding projects

## What is Sveltia CMS?

Sveltia CMS is a modern, Git-based content management system that's compatible with Netlify CMS/Decap CMS. It provides:

- ✅ Git-based workflow (all changes are commits)
- ✅ Editorial workflow with drafts and publishing
- ✅ Rich markdown editor with live preview
- ✅ Image uploads and media management
- ✅ No external database required
- ✅ Works with your existing Git repository

## Access the CMS

Once deployed, access the CMS at:

```
https://yourdomain.com/admin/
```

For local development:

```
http://localhost:5173/admin/
```

## Current Content Structure Analysis

### Tutorials Structure

**Location**: `src/pages/tutorials/**/*.vue`

**Current Format**: Vue SFC with frontmatter exported in `<script>` block

**Example**:

```vue
<script>
export default {
	frontmatter: {
		title: 'HTML Emmet',
		description: 'Learn how to use Emmet...',
		category: 'HTML Basics',
		level: 'Beginner',
		order: 8,
		tags: ['html', 'emmet', 'productivity'],
		lastUpdated: '2024-03-26',
	},
};
</script>
```

**Organized by**:

- Skill Level: `beginner/`, `intermediate/`, `advanced/`
- Topic: `html-basics/`, `css-basics/`, `javascript-basics/`, `dom-basics/`, `git-basics/`
- Getting Started: `getting-started/`
- Deployments: `deployments/`

**Total**: ~70 tutorial files

### Blog Posts Structure

**Location**: `src/pages/posts/*.vue`

**Current Format**: Vue SFC with exported frontmatter

**Example**:

```javascript
export const frontmatter = {
	title: 'Responsive Design: Making Websites Look Good on Any Device',
	date: '2025-02-26',
	author: 'Helen Burgess',
	image: '/images/posts/responsive-design.svg',
	description: 'Learn how to implement responsive design...',
	tags: ['Web Development', 'Responsive Design', 'CSS'],
	status: 'published',
};
```

**Total**: ~14 blog posts

### Projects Structure

**Location**: `src/pages/projects/*.vue`

**Current Format**: Vue SFC with frontmatter in default export

**Example**:

```javascript
export default {
	frontmatter: {
		title: 'Calculator App Project',
		description: 'Build a functional calculator...',
		difficulty: 'Beginner',
		duration: '60 minutes',
		tags: ['JavaScript', 'DOM', 'Math'],
		order: 5,
	},
};
```

**Total**: ~28 projects

## Migration Strategy

### Option 1: Hybrid Approach (Recommended)

**Keep existing Vue SFCs** for rendering but **add Markdown files** for CMS management.

#### Advantages:

✅ No breaking changes to existing site
✅ Gradual migration
✅ Can preview content in CMS
✅ Maintain existing functionality

#### Implementation:

1. Create parallel Markdown files in a `content/` directory
2. Update Vue components to import from Markdown
3. Use a build step to convert Markdown to Vue data

### Option 2: Full Migration to Markdown

**Convert all content** to Markdown files managed by CMS.

#### Advantages:

✅ Simpler content structure
✅ Non-technical editors can manage content
✅ Better version control for content
✅ Portable content

#### Disadvantages:

⚠️ Requires refactoring existing Vue components
⚠️ May lose some interactive features
⚠️ Significant development effort

### Option 3: Keep Vue SFCs + CMS Editor

**Add CMS interface** that edits the frontmatter in existing Vue files.

#### Advantages:

✅ Minimal changes to existing structure
✅ Keeps all interactive features

#### Disadvantages:

⚠️ CMS editing Vue files directly is complex
⚠️ Risk of breaking components
⚠️ Limited to frontmatter editing

## Recommended Implementation Plan

### Phase 1: Setup & Authentication (Week 1)

1. **Install Sveltia CMS**

   - Files already created: `/public/admin/index.html` and `/public/admin/config.yml`

2. **Setup Git Gateway Authentication**

   ```bash
   # Install Netlify Identity (if using Netlify)
   # Or setup alternative OAuth provider
   ```

3. **Configure Backend**
   Update `config.yml` with your Git provider:

   ```yaml
   backend:
     name: git-gateway
     branch: master
   ```

4. **Test Local Backend**

   ```bash
   # Run Sveltia CMS proxy
   npx @sveltia/cms-proxy-server

   # In separate terminal
   npm run dev
   ```

### Phase 2: Content Migration (Week 2-3)

#### For Tutorials:

1. **Create Markdown Template**

   ```markdown
   ---
   title: 'Introduction to HTML'
   description: 'Learn the fundamentals...'
   category: 'HTML Basics'
   level: 'Beginner'
   order: 1
   duration: '15 minutes'
   tags:
     - html
     - web development
   ---

   # Tutorial Content Here
   ```

2. **Update Vue Components**

   ```vue
   <script setup>
   import tutorialData from '@/content/tutorials/html-basics/introduction.md';
   </script>
   ```

3. **Create Conversion Script**
   ```javascript
   // scripts/convert-tutorials.js
   // Extract frontmatter and content from Vue SFCs
   // Generate Markdown files
   ```

#### For Blog Posts:

Similar process - extract frontmatter and convert content to Markdown.

#### For Projects:

Keep code examples separate from narrative content for better management.

### Phase 3: Configure Content Collections (Week 4)

The `config.yml` file has been pre-configured with:

1. **Tutorials Collection**

   - Nested structure support
   - Category and level fields
   - Code examples support
   - Practice exercises

2. **Blog Posts Collection**

   - Publishing workflow
   - SEO fields
   - Related posts
   - Author management

3. **Projects Collection**
   - Starter code fields
   - Solution code
   - Prerequisites linking
   - Challenge extensions

### Phase 4: Testing & Training (Week 5)

1. Test creating new content through CMS
2. Test editing existing content
3. Test image uploads
4. Train content editors

## Authentication Setup

### Option 1: Netlify Identity (Easiest)

1. Enable Netlify Identity in your Netlify dashboard
2. Add Identity widget to your site:

   ```html
   <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
   ```

3. Invite users through Netlify dashboard

### Option 2: GitHub OAuth

1. Create GitHub OAuth App
2. Configure in Netlify
3. Update config.yml:
   ```yaml
   backend:
     name: github
     repo: owner/repository
     branch: master
   ```

### Option 3: GitLab/Bitbucket

Similar setup available for GitLab or Bitbucket.

## Configuration Details

### Field Types Used

- **String**: Simple text fields (titles, names)
- **Text**: Multi-line text (descriptions, excerpts)
- **Markdown**: Rich content editor
- **Number**: Order, duration values
- **Datetime**: Publication dates
- **Select**: Predefined options (categories, difficulty)
- **List**: Arrays (tags, prerequisites)
- **Image**: File uploads with preview
- **Object**: Complex nested data (code examples)

### Workflows

**Editorial Workflow** is enabled, which provides:

1. **Drafts**: Work in progress (unpublished)
2. **In Review**: Ready for review
3. **Ready**: Approved and ready to publish

Disable this if you want direct publishing:

```yaml
# Comment out or remove:
# publish_mode: editorial_workflow
```

## Content Organization

### Tutorials

```
src/pages/tutorials/
├── getting-started/
│   ├── index.vue          # Section index
│   ├── web-basics.vue
│   └── ...
├── beginner/
│   ├── html-basics/
│   │   ├── index.vue
│   │   ├── introduction.vue
│   │   └── ...
│   ├── css-basics/
│   └── javascript-basics/
└── ...
```

### Blog Posts

```
src/pages/posts/
├── responsive-design.vue
├── web-security-essentials.vue
└── ...
```

### Projects

```
src/pages/projects/
├── calculator.vue
├── todo-list.vue
└── ...
```

## Maintenance Tasks

### Regular Updates

1. **Update Sveltia CMS** (monthly)

   ```bash
   # Check for updates
   npm outdated @sveltia/cms
   ```

2. **Backup Content** (weekly)

   - Git commits are your backup
   - Consider automated backups

3. **Review Pending Content** (daily/weekly)
   - Check editorial workflow queue
   - Approve/reject submissions

### Content Standards

**Establish guidelines for**:

- Image sizes and formats
- Tag conventions
- Category naming
- Code formatting
- Markdown style

## Troubleshooting

### CMS Not Loading

1. Check `/admin/` route is accessible
2. Verify `config.yml` syntax
3. Check browser console for errors

### Authentication Issues

1. Clear browser cache
2. Check Git Gateway configuration
3. Verify user permissions

### Content Not Saving

1. Check Git permissions
2. Verify branch name in config
3. Check for merge conflicts

## Benefits of This Approach

### For Content Creators

- ✅ User-friendly visual editor
- ✅ Live preview
- ✅ No need to learn Git/Vue
- ✅ Image drag-and-drop

### For Developers

- ✅ Content in version control
- ✅ No external database
- ✅ Review changes via PRs
- ✅ Easy rollback

### For the Platform

- ✅ Scalable content management
- ✅ Multiple contributors
- ✅ Content workflow
- ✅ SEO-friendly

## Next Steps

1. **Review the configuration** in `/public/admin/config.yml`
2. **Set up authentication** (choose provider)
3. **Test locally** with proxy server
4. **Create sample content** through CMS
5. **Migrate existing content** (choose migration strategy)
6. **Train content editors**
7. **Deploy and monitor**

## Resources

- [Sveltia CMS Documentation](https://github.com/sveltia/sveltia-cms)
- [Configuration Reference](https://github.com/sveltia/sveltia-cms/blob/main/docs/configuration.md)
- [Migration from Netlify CMS](https://github.com/sveltia/sveltia-cms#migration)

## Support

For issues or questions:

1. Check Sveltia CMS GitHub Issues
2. Review this documentation
3. Test in local environment first
4. Check browser console for errors
