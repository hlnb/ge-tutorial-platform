# Deployment Guide

Status: current for the Vercel and Vite configuration visible in this repository.

## Current Deployment Target

GraphiteEdge is configured for deployment on Vercel as a Vite application.

Current deployment files/config:

- `vercel.json`
- `package.json`
- `vite.config.js`

## Current Build Settings

From the live repository:

- Framework: `vite`
- Build command: `npm run build`
- Output directory: `dist`

These settings are declared in `vercel.json`.

## Routing And Rewrites

The current Vercel configuration uses a rewrite:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

This is the current SPA routing behavior in production.

It means:

- direct visits to app routes are rewritten to `index.html`
- client-side routing then resolves the actual page

If route behavior changes in the app, this rewrite strategy should be reviewed alongside the client router setup.

## Vite Build Notes

Current build-related settings visible in `vite.config.js`:

- output directory: `dist`
- assets directory: `assets`
- build target: `es2015`
- route generation via `unplugin-vue-router`

There is also a local development-only server middleware for `/admin` handling in `vite.config.js`.
That middleware is part of the local dev setup and should not be confused with Vercel routing rules.

## Node Version

The repository currently declares:

- Node.js `22.x` in `package.json`

Any deployment documentation should follow the repo’s declared runtime expectation unless the deployment platform is intentionally configured otherwise.

## Standard Deployment Flow

Typical workflow:

1. push changes to the connected branch
2. Vercel runs `npm install`
3. Vercel runs `npm run build`
4. Vercel serves the generated `dist` output

## Environment Notes

The repo includes Firebase-related code and other environment-sensitive services.

Before production deployment, confirm any required environment variables are configured in Vercel for the target environment.

This doc does not list variable names beyond what is explicitly present in the repo configuration, because missing or environment-specific values should not be invented.

## Verification Checklist

After deployment, verify:

1. the home page loads
2. `/tutorials` loads
3. a representative tutorial route loads directly
4. static assets load correctly
5. navigation works after direct refresh on deep routes
6. any changed pages render without obvious layout breakage
7. browser console does not show critical runtime errors

## Known Documentation Drift Resolved Here

Older deployment notes in this repo referred to:

- `routes`-based Vercel config
- Node `18.x`

Those descriptions do not match the current repository and should be treated as outdated.
