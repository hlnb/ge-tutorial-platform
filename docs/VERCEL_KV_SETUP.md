# Setting Up Vercel KV for Student Progress Tracking

This document explains how to set up Vercel KV (Redis) for storing student progress data in the GraphiteEdge tutorial platform.

## What is Vercel KV?

Vercel KV is a Redis-compatible key-value database that's fully managed and integrates seamlessly with Vercel deployments. It's perfect for storing user data, session information, and in our case, student progress tracking.

## Prerequisites

- A Vercel account
- Your project deployed on Vercel
- Vercel CLI installed locally (optional, but recommended)

## Step 1: Create a KV Database

1. Log in to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to the "Storage" tab
4. Click "Create" and select "KV Database"
5. Follow the prompts to create your database
   - Choose a name for your database (e.g., "student-progress")
   - Select a region close to your target audience

## Step 2: Connect KV to Your Project

### Option A: Using the Vercel Dashboard

1. After creating the database, click "Connect to Project"
2. Select your project from the dropdown
3. Click "Connect"

### Option B: Using the Vercel CLI

1. Install the Vercel CLI if you haven't already:

   ```
   npm install -g vercel
   ```

2. Link your local project to your Vercel project:

   ```
   vercel link
   ```

3. Connect the KV database to your project:
   ```
   vercel env pull
   ```

## Step 3: Configure Environment Variables

Vercel KV requires specific environment variables to connect to your database. These will be automatically set up when you connect your database to your project, but you should be aware of them:

- `KV_URL`: The connection URL for your KV database
- `KV_REST_API_URL`: The REST API URL for your KV database
- `KV_REST_API_TOKEN`: The authentication token for the REST API
- `KV_REST_API_READ_ONLY_TOKEN`: A read-only token for the REST API

## Step 4: Local Development Setup

For local development, you'll need to set up these environment variables in your local environment:

1. Create a `.env.local` file in your project root (if it doesn't exist already)
2. Add the KV environment variables:
   ```
   KV_URL=your_kv_url
   KV_REST_API_URL=your_rest_api_url
   KV_REST_API_TOKEN=your_api_token
   KV_REST_API_READ_ONLY_TOKEN=your_read_only_token
   ```

You can get these values from your Vercel project settings under the "Environment Variables" section.

## Step 5: Using Vercel KV in Your Code

The project is already set up to use Vercel KV through the `@vercel/kv` package. Here's a quick example of how it's used:

```javascript
import { kv } from '@vercel/kv';

// Store data
await kv.set('user:123', { name: 'John Doe', progress: { ... } });

// Retrieve data
const user = await kv.get('user:123');

// Delete data
await kv.del('user:123');
```

## Step 6: Deploy Your Project

After setting up Vercel KV and connecting it to your project, deploy your project to Vercel:

```
vercel --prod
```

## Troubleshooting

### Connection Issues

If you're having trouble connecting to your KV database:

1. Check that your environment variables are correctly set
2. Ensure your project is properly linked to the KV database in the Vercel dashboard
3. Verify that your Vercel account has the necessary permissions

### Data Not Persisting

If data isn't being saved or retrieved correctly:

1. Check your key naming conventions (ensure they're consistent)
2. Verify that your data is serializable (KV can only store JSON-serializable data)
3. Check for any errors in your browser console or server logs

## Resources

- [Vercel KV Documentation](https://vercel.com/docs/storage/vercel-kv)
- [Vercel KV API Reference](https://vercel.com/docs/storage/vercel-kv/kv-reference)
- [Redis Commands Reference](https://redis.io/commands/)
