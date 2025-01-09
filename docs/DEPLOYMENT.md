# Deployment Guide

## Vercel Configuration

### Environment Setup

- Node.js version: 18.x (specified in package.json)
- Build Command: `npm run build`
- Output Directory: `dist`
- Framework Preset: Vite

### Configuration Files

#### vercel.json

```json
{
	"routes": [
		{ "handle": "filesystem" },
		{ "src": "/(.)", "dest": "/index.html" }
	]
}
```

## Deployment Process

### Initial Setup

1. Connect GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Continuous Deployment

1. Push changes to main branch
2. Vercel automatically deploys
3. Check build logs for any errors
4. Verify changes on production site

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

## Common Issues & Solutions

### 404 Errors on Routes

- Check vercel.json configuration
- Verify router setup
- Ensure history mode is properly configured

### Missing Styles

- Ensure Bulma is imported correctly
- Check global CSS imports
- Verify build output includes CSS

### Blank Pages

- Check component mounting
- Verify data loading
- Review console for errors

## Build Configuration

### vite.config.js

```javascript
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': resolve(dirname, 'src'),
			'~': resolve(dirname, 'src'),
		},
	},
	build: {
		target: 'es2015',
		outDir: 'dist',
		assetsDir: 'assets',
	},
});
```

## Post-Deployment Checklist

### Verify

1. Homepage loads correctly
2. All routes work (tutorials, blog posts)
3. Assets load (images, styles)
4. Forms function properly
5. Meta tags are present
6. Mobile responsiveness

### Monitor

1. Check Vercel analytics
2. Review build logs
3. Test performance (Lighthouse)
4. Verify SSL/HTTPS

## Performance Optimization

### Build Optimization

1. Enable gzip compression
2. Implement code splitting
3. Optimize asset loading
4. Use production builds

### Cache Strategy

1. Configure cache headers
2. Use asset versioning

## Security Considerations

### Environment Variables

1. Set up in Vercel dashboard
2. Never commit .env files
3. Use proper naming convention: `VITE_APP_*`

## Rollback Procedure

### If Deployment Fails

1. Access Vercel dashboard
2. Locate previous successful deployment
3. Click "View Build"
4. Select "Redeploy"

### Emergency Rollback

```bash
# Using Vercel CLI
vercel rollback
```
