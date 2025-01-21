# Setup Guide

## Prerequisites

- Node.js 16+
- npm or yarn
- Vue 3
- Vite
- Existing project structure

## Installation Steps

1. Add Post Metadata Support
2. Add Image Configuration
3. Add Post Scheduling System
4. Add Post Visibility System
5. Add Post Navigation System
6. Add Post Search System

## Post System Setup

### 1. Directory Structure

Ensure these directories exist in your project:
bash
public/
└── images/
└── posts/ # Public post images
src/
├── assets/
│ └── images/
│ └── posts/ # Asset post images
└── pages/
└── posts/ # Post .vue files

### 2. Post Template

Create a template file
touch src/pages/posts/template.vue

### 3. Router Configuration

```javascript
// src/router.js
{
path: '/posts/:slug',
component: () => import('./pages/posts/[slug].vue')
}
```

### 4. Post Template Structure

```vue
<template>
	<div class="content">
		<!-- Hero Image -->
		<div class="post-hero">
			<img
				src="/images/posts/your-post-image.svg"
				alt="Post Illustration"
				class="hero-image"
			/>
		</div>

		<h1 class="title is-1">
			<i class="fas fa-icon section-icon"></i> Your Post Title
		</h1>

		<!-- Post content -->
	</div>
</template>

<script setup>
const postMetadata = {
	title: 'Your Post Title',
	description: 'Brief description of your post',
	publishDate: 'YYYY-MM-DDTHH:mm:ssZ',
	author: 'Your Name',
	status: 'draft', // or "scheduled" or "published"
	tags: ['Tag1', 'Tag2'],
	readingTime: 'X min',
};
</script>
```

## Development Workflow

1. Create new post file in `src/pages/posts/`
2. Add post metadata
3. Add post content
4. Add images to appropriate directory
5. Test locally using `npm run dev`

## Best Practices

### 1. Images

- Use SVG for illustrations when possible
- Optimize images for web
- Include meaningful alt text

### 2. Content

- Use semantic HTML
- Include code examples where relevant
- Break content into logical sections

### 3. Metadata

- Use consistent date format
- Include all required fields
- Tag posts appropriately

## Troubleshooting

### Common Issues

1. Images Not Loading

- Check image path is correct
- Verify file exists in correct directory
- Check file permissions

2. Post Not Visible

- Verify status is "published" or "scheduled"
- Check publishDate format
- Compare publishDate with current date

3. Styling Issues

- Check class names match your CSS
- Verify Bulma classes are applied correctly
- Test responsive breakpoints

## Testing Checklist

- [ ] Post metadata complete
- [ ] Images load correctly
- [ ] Content renders properly
- [ ] Responsive layout works
- [ ] Links function correctly
- [ ] Code snippets formatted properly

Need help? Contact the development team for support.
