# Development Guide

## Initial Setup

### Requirements

- Node.js 18.x
- npm (comes with Node.js)
- Git
- Code editor (VS Code recommended)

### First-Time Setup

1. Clone the repository:

   ```bash
   git clone [repository-url]
   cd ge-tutorial-platform
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create necessary environment variables:
   ```env
   VITE_APP_TITLE=GraphiteEdge Tutorial Platform
   ```

## Development Workflow

### Running Locally

1. Start development server:
   ```bash
   npm run dev
   ```
2. Access site at `http://localhost:5173`

### Building for Production

1. Create production build:
   ```bash
   npm run build
   ```
2. Preview production build:
   ```bash
   npm run preview
   ```

## Project Structure

### Key Directories

```
src/
├── assets/ # Static assets (images, styles)
├── components/ # Reusable Vue components
├── pages/ # Page components and routes
│ ├── posts/ # Blog posts
│ └── tutorials/ # Tutorial content
├── templates/ # Template files for new content
└── router/ # Vue router configuration

```

## Content Creation

### Creating a New Blog Post

1. Copy the post template:

   ```bash
   cp src/templates/post-template.vue src/pages/posts/your-post-name.vue
   ```

2. Update frontmatter:

   ```javascript
   export const frontmatter = {
   	title: 'Your Post Title',
   	date: '2024-00-00',
   	description: 'Post description',
   	tags: ['Tag1', 'Tag2'],
   };
   ```

3. Add your content in the template section
4. Test locally
5. Commit and push changes

### Component Guidelines

#### Naming Conventions

- Components: PascalCase (e.g., `MainLayout.vue`)
- Pages: kebab-case (e.g., `about-us.vue`)
- Posts: kebab-case (e.g., `my-first-post.vue`)

#### Component Structure

```
vue
<template>
<!-- Template content -->
</template>
<script>
// Exports (if any)
export const someData = {};
</script>
<script setup>
// Imports
import { ref } from 'vue'
import ComponentName from './ComponentName.vue'
// Component logic
</script>
<style scoped>
/ Component styles /
</style>
```

## Testing

### Manual Testing Checklist

1. Content renders correctly
2. Links work properly
3. Images load
4. Responsive design works
5. Newsletter form functions
6. Navigation works
7. Meta tags are correct

## Common Issues

### Build Errors

1. Sass/SCSS related:

   - Solution: Use CSS imports from Bulma

2. Path Resolution:

   - Use `@/` for src directory imports
   - Escape asterisks in glob patterns

3. Component Loading:
   - Check import paths
   - Verify component registration

### Development Tips

1. Use Vue DevTools for debugging
2. Check console for errors
3. Test in multiple browsers
4. Verify mobile responsiveness
5. Run build before committing

## Git Workflow

### Branch Strategy

1. `main` - production branch
2. Create feature branches for new work
3. Use pull requests for reviews

### Commit Guidelines

- Use descriptive commit messages
- Include related issue numbers
- Keep commits focused and atomic

## Performance Considerations

### Optimization Tips

1. Optimize images before adding
2. Use lazy loading for images
3. Keep component dependencies minimal
4. Use code splitting where appropriate

## Security

### Best Practices

1. No sensitive data in source code
2. Validate form inputs
3. Use HTTPS for external resources
4. Keep dependencies updated
