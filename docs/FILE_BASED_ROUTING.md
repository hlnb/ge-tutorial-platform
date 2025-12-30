# File-Based Routing Migration

## What Changed

Migrated from manual route definitions to **automatic file-based routing** using `unplugin-vue-router`.

## Benefits

### ✅ For CMS Content Creation

- **NEW:** Files created via CMS automatically get routes
- **No manual updates needed** to router/index.js
- Create `/posts/my-new-post.vue` → Route instantly available at `/posts/my-new-post`

### ✅ For Development

- **Less code to maintain** - routes auto-generated from file structure
- **Fewer errors** - no forgetting to add routes
- **TypeScript support** - auto-generated route types

## How It Works

**Old Way (Manual):**

```javascript
{
  path: 'design-to-code',
  component: () => import('../pages/posts/design-to-code.vue'),
}
```

**New Way (Automatic):**

- Just create: `src/pages/posts/design-to-code.vue`
- Route automatically created: `/posts/design-to-code`

## File Structure = Routes

```
src/pages/
├── index.vue          → /
├── about.vue          → /about
├── posts/
│   ├── index.vue      → /posts
│   ├── my-post.vue    → /posts/my-post
├── tutorials/
│   ├── index.vue      → /tutorials
│   └── beginner/
│       └── html-basics/
│           ├── index.vue           → /tutorials/beginner/html-basics
│           └── introduction.vue    → /tutorials/beginner/html-basics/introduction
```

## Configuration

**vite.config.js:**

```javascript
VueRouter({
	routesFolder: 'src/pages', // Where to scan for pages
	extensions: ['.vue'], // File types to include
	exclude: ['**/components/**', '**/layouts/**'], // Folders to ignore
});
```

## Preserved Features

All existing functionality still works:

- ✅ Post access control (draft/published)
- ✅ RSS feed generation
- ✅ Scroll behavior
- ✅ Error handling
- ✅ Nested routes
- ✅ Route meta data

## Creating New Content

### Via CMS

1. Go to `/admin/`
2. Create new post/tutorial/project
3. CMS saves file to `src/pages/{type}/{slug}.vue`
4. **Route automatically available** - no code changes needed!

### Manually

1. Create file in `src/pages/` folder
2. Route automatically generated
3. That's it!

## Migration Status

- [x] Install unplugin-vue-router
- [x] Update vite.config.js
- [x] Create new router with auto-routes
- [x] Backup old router
- [x] Test file-based routing
- [ ] Deploy and verify production

## Rollback Plan

If needed, revert with:

```bash
mv src/router/index-old.js src/router/index.js
git revert HEAD
```

Backup available at: `src/router/index-backup.js`

## Testing

To test the new routing:

1. Start dev server: `npm run dev`
2. Navigate to existing routes (should work identically)
3. Create a test file in `src/pages/test.vue`
4. Visit `/test` - should load automatically
5. Delete test file when done

## Next Steps

1. Test all existing routes work
2. Test CMS file creation
3. Remove old router files once confirmed working
4. Update documentation for contributors
