# Sveltia CMS Quick Start Guide

## 🚀 5-Minute Setup

### Step 1: Access the CMS Interface

The CMS has been configured and is ready to use. Access it at:

**Local Development:**

```
http://localhost:5173/admin/
```

**Production:**

```
https://yourdomain.com/admin/
```

### Step 2: Choose Your Setup Path

#### Path A: Quick Demo (Local Only)

Perfect for testing and evaluation.

1. Start the dev server:

   ```bash
   npm run dev
   ```

2. In a new terminal, start the CMS proxy:

   ```bash
   npx @sveltia/cms-proxy-server
   ```

3. Open `http://localhost:5173/admin/`

4. You'll see the CMS interface with your content collections!

#### Path B: Full Setup (Production Ready)

For actual content management.

1. **Choose Authentication Provider:**

   **Option 1: Netlify Identity** (Easiest)

   - Deploy to Netlify
   - Enable Identity in Netlify dashboard
   - Add users in Identity settings

   **Option 2: GitHub OAuth**

   - Create GitHub OAuth app
   - Configure in Netlify/hosting provider
   - Update `config.yml` backend settings

2. **Update Configuration:**

   Edit `public/admin/config.yml`:

   ```yaml
   backend:
     name: git-gateway # or 'github'
     branch: master # your default branch
   ```

3. **Deploy:**

   ```bash
   npm run build
   # Deploy to your hosting provider
   ```

4. **Invite Users:**
   - Through Netlify Identity, or
   - Configure OAuth permissions

### Step 3: Create Your First Content

1. **Click "New Tutorial"** (or Post, or Project)
2. **Fill in the fields** - all are documented with hints
3. **Save as Draft** or **Publish** immediately
4. **Preview** your content with the live preview

## 📋 Content Types

### Tutorials

- **Location:** Tutorials > New Tutorial
- **Best for:** Step-by-step learning content
- **Features:**
  - Organized by category and level
  - Code examples support
  - Prerequisites tracking
  - Practice exercises

### Blog Posts (The Graphite Journal)

- **Location:** Blog Posts > New Blog Post
- **Best for:** Articles, news, updates
- **Features:**
  - Editorial workflow
  - SEO fields
  - Featured images
  - Related posts

### Projects

- **Location:** Projects > New Project
- **Best for:** Hands-on coding challenges
- **Features:**
  - Starter code templates
  - Solution code
  - Challenge extensions
  - Prerequisites linking

## 🎯 Common Tasks

### Adding a New Tutorial

1. Click **Tutorials → New Tutorial**
2. Fill in required fields:
   - Title: "Introduction to CSS Grid"
   - Description: Brief overview
   - Category: Select from dropdown
   - Level: Beginner/Intermediate/Advanced
   - Order: Number for sequence
3. Add content in the **Tutorial Content** field (Markdown)
4. Add code examples if needed
5. Click **Save** (draft) or **Publish**

### Publishing a Blog Post

1. Click **Blog Posts → New Blog Post**
2. Fill in:
   - Title
   - Publish Date
   - Author
   - Upload featured image
   - Write content
3. Set **Status** to "Published"
4. Click **Publish**

### Creating a Project

1. Click **Projects → New Project**
2. Fill in project details
3. Add starter code in the **Starter Code** section
4. Add solution code (optional)
5. Write full instructions in **Project Content**
6. Click **Save**

## 🔧 Tips & Tricks

### Using the Markdown Editor

- **Switch modes:** Click "Rich Text" or "Raw" toggle
- **Insert images:** Drag & drop or click image button
- **Code blocks:** Use triple backticks ```
- **Preview:** Click preview pane to see rendered content

### Managing Images

1. **Upload:** Drag image onto any image field
2. **Location:** Automatically organized by content type
3. **Paths:** Automatically set to correct public path

### Editorial Workflow

- **Draft:** Work in progress, not visible
- **In Review:** Ready for review
- **Ready:** Approved, ready to publish

To publish: Drag content from left column to "Ready" column

### Keyboard Shortcuts

- `Ctrl/Cmd + S` - Save draft
- `Ctrl/Cmd + P` - Publish
- `Ctrl/Cmd + E` - Toggle editor mode
- `Esc` - Close editor

## 🐛 Troubleshooting

### "Cannot connect to backend"

- Check if CMS proxy is running (local dev)
- Verify Git Gateway is configured (production)
- Check browser console for errors

### "Authentication failed"

- Clear browser cookies
- Check Netlify Identity is enabled
- Verify user has been invited

### Changes not appearing on site

- Check if you published (not just saved draft)
- Verify build is triggered
- Check Git commits were created

### Image upload failing

- Check file size (keep under 5MB)
- Verify media folder path in config
- Check file permissions

## 📚 Resources

### Documentation

- [Sveltia CMS Docs](https://github.com/sveltia/sveltia-cms)
- [Configuration Reference](https://github.com/sveltia/sveltia-cms/blob/main/docs/configuration.md)
- [Full Setup Guide](./SVELTIA_CMS_SETUP.md)

### Configuration Files

- **CMS Interface:** `/public/admin/index.html`
- **CMS Config:** `/public/admin/config.yml`
- **Migration Script:** `/scripts/migrate-to-markdown.js`

### Support

- Check [GitHub Issues](https://github.com/sveltia/sveltia-cms/issues)
- Review browser console for errors
- Test in local environment first

## 🎓 Next Steps

### For Content Creators

1. ✅ Test creating sample content
2. ✅ Familiarize yourself with the editor
3. ✅ Learn markdown basics
4. ✅ Set up your profile/avatar

### For Developers

1. ✅ Review configuration in `config.yml`
2. ✅ Set up authentication
3. ✅ Configure deployment pipeline
4. ✅ Test editorial workflow
5. ✅ Plan content migration strategy

### For Site Admins

1. ✅ Invite team members
2. ✅ Set up roles and permissions
3. ✅ Configure backup strategy
4. ✅ Monitor content workflow
5. ✅ Train content creators

## 💡 Pro Tips

1. **Start Small:** Test with a few pieces of content first
2. **Use Drafts:** Save work-in-progress as drafts
3. **Preview:** Always preview before publishing
4. **Version Control:** Every change is a Git commit
5. **Organize:** Use tags and categories consistently

## 🆘 Getting Help

If you encounter issues:

1. **Check the docs** in `/docs/SVELTIA_CMS_SETUP.md`
2. **Review the config** in `/public/admin/config.yml`
3. **Check browser console** for error messages
4. **Test locally** with the proxy server
5. **Verify Git permissions** and authentication

---

**Ready to start?** Head to `/admin/` and create your first piece of content! 🚀
