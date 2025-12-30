# Vercel OAuth Setup for Sveltia CMS

Complete setup guide for GitHub OAuth authentication using Vercel serverless functions.

## ✅ Files Created

Your OAuth setup includes:

- **[api/auth.js](../api/auth.js)** - OAuth token exchange endpoint
- **[api/auth-callback.js](../api/auth-callback.js)** - OAuth callback handler
- **[config.yml](../public/admin/config.yml)** - Updated with Vercel settings

## Setup Steps

### 1. Create GitHub OAuth App

1. Go to https://github.com/settings/developers
2. Click **"OAuth Apps"** → **"New OAuth App"**

3. Fill in the details:

   ```
   Application name: Graphite Edge CMS
   Homepage URL: https://www.graphitedge.com.au
   Application description: Content management system for Graphite Edge tutorials
   Authorization callback URL: https://www.graphitedge.com.au/api/auth-callback
   ```

4. Click **"Register application"**

5. You'll receive:

   - **Client ID** (looks like: `Iv1.a123b456c789d012`)
   - Click **"Generate a new client secret"** to get your **Client Secret**

   ⚠️ **Important:** Save both values - you'll need them in the next step!

### 2. Configure Vercel Environment Variables

1. Go to your Vercel project dashboard: https://vercel.com/dashboard

2. Navigate to: **Settings** → **Environment Variables**

3. Add these two variables:

   | Name                         | Value                          | Environment                      |
   | ---------------------------- | ------------------------------ | -------------------------------- |
   | `OAUTH_GITHUB_CLIENT_ID`     | Your Client ID from step 1     | Production, Preview, Development |
   | `OAUTH_GITHUB_CLIENT_SECRET` | Your Client Secret from step 1 | Production, Preview, Development |

4. Click **"Save"** for each variable

### 3. Deploy to Vercel

Deploy your changes to activate the OAuth endpoints:

```bash
# If using Vercel CLI
vercel --prod

# Or push to your connected Git repository
git add .
git commit -m "Add Vercel OAuth for CMS"
git push origin master
```

Vercel will automatically:

- Deploy the serverless functions at `/api/auth` and `/api/auth-callback`
- Load your environment variables
- Make the endpoints available

### 4. Test Authentication

1. **Access your CMS:**

   ```
   https://www.graphitedge.com.au/admin/
   ```

2. **Click "Login with GitHub"**

3. **Authorize the app** when prompted by GitHub

4. **You should be redirected back** to the CMS and logged in

5. **Test creating content** - changes should commit to your GitHub repository

## Configuration Reference

Your [config.yml](../public/admin/config.yml) is configured as:

```yaml
backend:
  name: github
  repo: hlnb/ge-tutorial-platform
  branch: master
  base_url: https://www.graphitedge.com.au
  auth_endpoint: api/auth
```

### What each setting means:

- **`name: github`** - Use GitHub as the backend
- **`repo`** - Your GitHub repository (format: `username/repo-name`)
- **`branch`** - Which branch to commit to
- **`base_url`** - Your Vercel deployment URL (where the serverless functions are hosted)
- **`auth_endpoint`** - Path to your OAuth handler (points to `/api/auth.js`)

## How It Works

```
┌─────────┐         ┌─────────┐         ┌────────────┐         ┌────────┐
│   CMS   │────────>│ Vercel  │────────>│   GitHub   │────────>│ Vercel │
│         │ Login   │ /api/   │ Auth    │   OAuth    │ Token   │ /api/  │
│         │         │ auth    │         │            │         │ callback│
└─────────┘         └─────────┘         └────────────┘         └────────┘
     ↑                                                                │
     │                                                                │
     └────────────────────────── Auth Complete ──────────────────────┘
```

1. User clicks "Login with GitHub" in CMS
2. CMS redirects to `/api/auth` (Vercel function)
3. Vercel redirects user to GitHub OAuth page
4. User authorizes the app
5. GitHub redirects to `/api/auth-callback` with authorization code
6. Callback sends code back to CMS popup window
7. CMS exchanges code for access token
8. User is authenticated and can manage content

## Local Development

For local testing without deploying:

### Option A: Use local_backend (Recommended)

1. **Update config.yml temporarily:**

   ```yaml
   # Uncomment this line for local development
   local_backend: true
   ```

2. **Start the CMS proxy:**

   ```bash
   npx @sveltia/cms-auth@latest
   ```

3. **In another terminal, start dev server:**

   ```bash
   npm run dev
   ```

4. **Access CMS at:** `http://localhost:5173/admin/`

### Option B: Use Vercel CLI

1. **Install Vercel CLI:**

   ```bash
   npm i -g vercel
   ```

2. **Create `.env.local` file:**

   ```bash
   OAUTH_GITHUB_CLIENT_ID=your_client_id
   OAUTH_GITHUB_CLIENT_SECRET=your_client_secret
   ```

3. **Run locally:**
   ```bash
   vercel dev
   ```

## Troubleshooting

### "Error: Missing OAuth credentials"

**Cause:** Environment variables not set in Vercel

**Solution:**

- Go to Vercel dashboard → Settings → Environment Variables
- Add `OAUTH_GITHUB_CLIENT_ID` and `OAUTH_GITHUB_CLIENT_SECRET`
- Redeploy your project

### "Redirect URI mismatch"

**Cause:** GitHub OAuth App callback URL doesn't match

**Solution:**

- Go to GitHub OAuth App settings
- Ensure callback URL is: `https://www.graphitedge.com.au/api/auth-callback`
- Must be exact match (including https://)

### "Failed to authenticate"

**Cause:** Client ID or Secret incorrect

**Solution:**

- Verify values in Vercel environment variables
- Check for extra spaces or characters
- Regenerate Client Secret if needed

### "Could not locate repository"

**Cause:** Repository name incorrect or no access

**Solution:**

- Verify repo in config.yml: `hlnb/ge-tutorial-platform`
- Ensure GitHub user has write access
- Check branch name matches your default branch

### OAuth popup blocked

**Cause:** Browser blocking popup window

**Solution:**

- Allow popups for your domain
- Try a different browser
- Disable popup blockers temporarily

### CORS errors in console

**Cause:** Missing CORS headers

**Solution:**

- The `/api/auth.js` file includes CORS headers
- If issues persist, check Vercel function logs
- Ensure `base_url` in config.yml matches your domain

## Verifying Setup

### 1. Check Serverless Functions

Visit these URLs (should see responses, not 404):

- `https://www.graphitedge.com.au/api/auth?code=test` (should see error about invalid code)
- `https://www.graphitedge.com.au/api/auth-callback` (should see HTML page)

### 2. Check Environment Variables

```bash
# Using Vercel CLI
vercel env ls
```

Should show your OAUTH variables for all environments.

### 3. Check GitHub OAuth App

In GitHub OAuth App settings, verify:

- Authorization callback URL: `https://www.graphitedge.com.au/api/auth-callback`
- Application is not suspended
- Client ID matches Vercel environment variable

## Security Best Practices

### 1. Protect Client Secret

- ✅ Store in Vercel environment variables (encrypted)
- ❌ Never commit to Git
- ❌ Never expose in client-side code

### 2. Use HTTPS

- ✅ Vercel provides HTTPS by default
- ✅ GitHub requires HTTPS for OAuth callbacks

### 3. Restrict Repository Access

- Only authorized users should have GitHub repo access
- Use GitHub teams for organization-wide access
- Review OAuth app authorized users periodically

### 4. Monitor Commits

- All CMS changes appear as Git commits
- Review commit history regularly
- Set up GitHub branch protection rules

### 5. Enable Editorial Workflow (Optional)

Add to config.yml for content review process:

```yaml
publish_mode: editorial_workflow
```

This adds draft/review/published workflow with pull requests.

## Next Steps

After authentication is working:

1. ✅ **Test CMS functionality:**

   - Create a test blog post
   - Upload an image
   - Edit existing content
   - Verify commits in GitHub

2. **Add team members:**

   - Invite collaborators to GitHub repository
   - They can log in with their GitHub accounts
   - No additional CMS user management needed

3. **Set up editorial workflow (optional):**

   - Enable in config.yml
   - Requires pull request reviews
   - Better for team content management

4. **Migrate existing content:**

   ```bash
   npm run migrate:content
   ```

   See [SVELTIA_CMS_SETUP.md](SVELTIA_CMS_SETUP.md) for details

5. **Configure branch protection:**
   - In GitHub repo settings
   - Require pull request reviews
   - Prevent direct commits to main branch

## Resources

- [Vercel Serverless Functions](https://vercel.com/docs/functions)
- [GitHub OAuth Apps](https://docs.github.com/en/developers/apps/building-oauth-apps)
- [Sveltia CMS Documentation](https://github.com/sveltia/sveltia-cms)
- [Vercel Environment Variables](https://vercel.com/docs/environment-variables)

## Quick Reference

### Environment Variables

```bash
OAUTH_GITHUB_CLIENT_ID=Iv1.a123b456c789d012
OAUTH_GITHUB_CLIENT_SECRET=ghp_abc123def456ghi789jkl012mno345pqr678
```

### GitHub OAuth App Settings

```
Homepage URL: https://www.graphitedge.com.au
Callback URL: https://www.graphitedge.com.au/api/auth-callback
```

### Deploy Command

```bash
git push origin master  # Auto-deploys if connected
# or
vercel --prod           # Using Vercel CLI
```

---

**Ready to go!** Complete steps 1-3 above, then access your CMS at `/admin/`
