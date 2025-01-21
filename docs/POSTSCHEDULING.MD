# Documentation - January 20, 2025

## Post Scheduling System

### Overview

The post scheduling system allows posts to be published automatically at specified dates and times.

### Structure

```
├── pages/
│   ├── posts/
│   │   └── dns-web-browsing.vue    # Example post with scheduling metadata
│   └── the-graphite-journal.vue    # Main blog listing page
└── components/
    └── PostVisibility.vue          # Controls post visibility based on schedule
```

### Post Metadata Format

```javascript
const postMetadata = {
  title: String,
  description: String,
  publishDate: "YYYY-MM-DDTHH:mm:ssZ",
  author: String,
  status: "draft" | "scheduled" | "published",
  tags: Array<String>,
  readingTime: String,
  lastUpdated: Date
}
```

## The Graphite Journal Page Updates

### Features Added

1. Post Cards with Images

   - Images loaded from existing image directories
   - Hover effects on images
   - Responsive layout

2. Static Data Fallback

```javascript
const publishedPosts = ref([
	{
		title: 'DNS and Web Browsing',
		slug: 'dns-web-browsing',
		description: 'Understanding how DNS works and its role in web browsing',
		publishDate: '2024-04-01T09:00:00Z',
		readingTime: '5 min',
		tags: ['DNS', 'Web', 'Networking'],
		status: 'published',
	},
]);
```

3. Hero Section
   - Maintained existing custom hero
   - Blog signup integration
   - Pattern background

## Issues Fixed

### 1. API Error Handling

- Added graceful fallback for 404 errors
- Implemented warning logs for debugging
- Maintained functionality when API is unavailable

### 2. Image Path Management

- Preserved existing image directory structure
- Images can be stored in either:
  - `public/images/`
  - `assets/images/`

### 3. Component Integration

- Fixed BlogSignup component integration
- Maintained existing styling
- Preserved custom hero section

## Usage Examples

### Adding a New Post

1. Create new .vue file in `pages/posts/`
2. Add post metadata:

```vue
<script setup>
const postMetadata = {
	title: 'Your Post Title',
	publishDate: '2024-02-01T09:00:00Z',
	status: 'scheduled',
	// ... other metadata
};
</script>
```

### Scheduling a Post

1. Set status to "scheduled"
2. Set publishDate to future date
3. Post will automatically become visible on that date

## Next Steps

- [ ] Set up API endpoints
- [ ] Add post search/filtering
- [ ] Implement admin interface
- [ ] Add analytics tracking
