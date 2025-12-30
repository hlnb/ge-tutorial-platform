# Graphite Edge CMS - Admin Interface

This directory contains the Sveltia CMS configuration for managing content on the Graphite Edge Tutorial Platform.

## Quick Access

**Local Development:**

```
http://localhost:5173/admin/
```

**Production:**

```
https://yourdomain.com/admin/
```

## What's Here

- **index.html** - CMS interface entry point
- **config.yml** - Complete CMS configuration with all collections and fields

## Getting Started

### First Time Setup

1. **Start the development server with CMS proxy:**

   ```bash
   npm run dev:cms
   ```

2. **Access the CMS:**
   Open `http://localhost:5173/admin/` in your browser

3. **Authentication:**
   - Local: Uses Git Gateway proxy (no auth needed)
   - Production: Requires Netlify Identity or OAuth setup

### Creating Content

The CMS provides three main content types:

#### Tutorials

Manage interactive coding tutorials organized by skill level and topic.

**Fields include:**

- Title, description, category
- Difficulty level, order, duration
- Tags, prerequisites
- Learning objectives
- Full markdown content
- Code examples
- Practice exercises

#### Blog Posts (The Graphite Journal)

Manage articles and blog posts with SEO optimization.

**Fields include:**

- Title, publish date, author
- Featured image, description
- Tags, status (draft/published)
- SEO keywords
- Related posts
- Full markdown content

#### Projects

Manage hands-on coding projects for students.

**Fields include:**

- Title, description, difficulty
- Duration, technologies, category
- Project objectives
- Prerequisites
- Starter code (HTML/CSS/JS)
- Solution code
- Challenge extensions

## Configuration

### Current Setup

```yaml
Backend: Git Gateway (or GitHub OAuth)
Branch: master
Media Folder: public/images
Editorial Workflow: Enabled
```

### Customizing

Edit `config.yml` to:

- Add new collections
- Modify field definitions
- Change validation rules
- Update widget types
- Configure workflows

## Documentation

Full documentation available:

- **Setup Guide:** `/docs/SVELTIA_CMS_SETUP.md`
- **Quick Start:** `/docs/SVELTIA_CMS_QUICKSTART.md`
- **Analysis:** `/docs/SVELTIA_CMS_ANALYSIS.md`

## Support

For help:

1. Check documentation in `/docs/`
2. Review [Sveltia CMS docs](https://github.com/sveltia/sveltia-cms)
3. Check browser console for errors
4. Test in local environment first

## NPM Scripts

Useful commands:

```bash
# Start dev server + CMS proxy
npm run dev:cms

# Start CMS proxy only
npm run cms:proxy

# Migrate existing content
npm run migrate:content
npm run migrate:tutorials
npm run migrate:posts
npm run migrate:projects
```

---

**Ready to start?** Run `npm run dev:cms` and visit `/admin/`!
