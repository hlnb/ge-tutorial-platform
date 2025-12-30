# GitHub OAuth Setup for Sveltia CMS

This guide walks you through setting up GitHub OAuth authentication for your Sveltia CMS.

## Overview

GitHub OAuth allows you to authenticate CMS users using their GitHub accounts. This is ideal for:

- Collaborative content editing
- Developer-focused teams
- Direct GitHub integration
- No third-party auth service needed

## Prerequisites

- GitHub account with admin access to your repository
- An OAuth server (see options below)
- Your site hosted somewhere accessible

## Step-by-Step Setup

### 1. Update config.yml

Your config.yml has been updated to use GitHub OAuth. You need to replace these placeholders:

```yaml
backend:
  name: github
  repo: owner/repo-name # Replace with YOUR_USERNAME/YOUR_REPO
  branch: master
  base_url: https://your-oauth-server.com # Replace with your OAuth server
  auth_endpoint: auth
```

**Example:**

```yaml
backend:
  name: github
  repo: elizabethhburgess/ge-tutorial-platform
  branch: master
  base_url: https://oauth.yourdomain.com
  auth_endpoint: auth
```

### 2. Choose an OAuth Server

You need an OAuth server to handle the authentication flow. Options:

#### Option A: Netlify OAuth Provider (Easiest)

If hosting on Netlify, use their built-in OAuth:

1. Go to Netlify Dashboard → Site Settings → Access Control
2. Scroll to "OAuth" section
3. Click "Install Provider"
4. Choose "GitHub"
5. Follow prompts to authorize

Then update config.yml:

```yaml
backend:
  name: github
  repo: your-username/your-repo
  branch: master
  # No base_url needed - Netlify handles it automatically
```

#### Option B: Vercel OAuth (If hosting on Vercel)

Use a serverless OAuth handler:

1. Create `/api/auth.js`:

```javascript
export default async function handler(req, res) {
	// OAuth handling code
	// See: https://github.com/vencax/netlify-cms-github-oauth-provider
}
```

2. Update config.yml:

```yaml
backend:
  name: github
  repo: your-username/your-repo
  branch: master
  base_url: https://your-site.vercel.app
  auth_endpoint: api/auth
```

#### Option C: Self-Hosted OAuth Server

Use `netlify-cms-github-oauth-provider`:

1. **Clone the OAuth provider:**

```bash
git clone https://github.com/vencax/netlify-cms-github-oauth-provider.git
cd netlify-cms-github-oauth-provider
npm install
```

2. **Set environment variables:**

```bash
export OAUTH_CLIENT_ID=your_github_oauth_app_client_id
export OAUTH_CLIENT_SECRET=your_github_oauth_app_client_secret
export REDIRECT_URL=https://oauth-server.com/callback
export GIT_HOSTNAME=https://github.com
```

3. **Deploy to a server** (Heroku, Railway, etc.)

4. **Update config.yml with your server URL**

#### Option D: GitHub Pages + External OAuth

Use a free service like `github-oauth-server`:

1. Deploy to Heroku/Railway: https://github.com/prose/gatekeeper
2. Configure with your GitHub OAuth App credentials
3. Use the deployed URL in config.yml

### 3. Create GitHub OAuth App

Regardless of which OAuth server you choose, you need to create a GitHub OAuth App:

1. **Go to GitHub Settings:**

   - Visit https://github.com/settings/developers
   - Click "OAuth Apps" → "New OAuth App"

2. **Fill in the application details:**

   ```
   Application name: Graphite Edge CMS
   Homepage URL: https://www.graphitedge.com.au
   Application description: Content management for Graphite Edge tutorials
   Authorization callback URL: https://your-oauth-server.com/callback
   ```

   **For Netlify:** `https://api.netlify.com/auth/done`
   **For Vercel:** `https://your-site.vercel.app/api/callback`
   **For self-hosted:** `https://your-oauth-server.com/callback`

3. **Get your credentials:**

   - After creating the app, you'll receive:
     - **Client ID** (public)
     - **Client Secret** (private - keep secure!)

4. **Configure your OAuth server:**
   - Add Client ID and Secret to your OAuth server's environment variables
   - Each OAuth server solution has different configuration methods

### 4. Update Repository Settings

Ensure your GitHub repository allows OAuth access:

1. Go to your repository settings
2. Navigate to "Settings" → "Branches"
3. Ensure the branch specified in config.yml (master/main) exists
4. Optional: Set up branch protection rules for editorial workflow

### 5. Configure Environment Variables

Set these in your OAuth server environment:

```bash
OAUTH_CLIENT_ID=your_github_client_id
OAUTH_CLIENT_SECRET=your_github_client_secret
REDIRECT_URL=https://your-oauth-server.com/callback
GIT_HOSTNAME=https://github.com
```

**For Netlify:**

- Set in: Site Settings → Environment Variables

**For Vercel:**

- Set in: Project Settings → Environment Variables

**For self-hosted:**

- Set in your hosting platform's environment configuration

### 6. Test Authentication

1. **Start your development server:**

   ```bash
   npm run dev
   ```

2. **Access the CMS:**
   Open `http://localhost:5173/admin/`

3. **Test login:**

   - Click "Login with GitHub"
   - You'll be redirected to GitHub
   - Authorize the application
   - You should be redirected back to the CMS

4. **Verify access:**
   - Try creating/editing content
   - Changes should commit to your GitHub repository

## Configuration Reference

### Complete config.yml Example

```yaml
backend:
  name: github
  repo: elizabethhburgess/ge-tutorial-platform
  branch: master
  base_url: https://oauth.yourdomain.com
  auth_endpoint: auth

# Optional: Allow local development without OAuth
local_backend: true
```

### Optional OAuth Settings

```yaml
backend:
  name: github
  repo: your-username/your-repo
  branch: master
  base_url: https://oauth-server.com
  auth_endpoint: auth
  # Optional settings:
  squash_merges: true # Squash commits on merge
  open_authoring: true # Allow external contributors (forks)
```

## Troubleshooting

### "Failed to authenticate"

**Cause:** OAuth server misconfiguration or incorrect credentials

**Solutions:**

- Verify Client ID and Secret are correct
- Check base_url points to your OAuth server
- Ensure callback URL matches in GitHub OAuth App settings
- Check OAuth server logs for errors

### "Could not locate repository"

**Cause:** Repository name incorrect or insufficient permissions

**Solutions:**

- Verify repo format is `username/repo-name`
- Ensure branch name matches your default branch
- Confirm GitHub user has write access to repository

### "CORS error" in browser console

**Cause:** OAuth server not configured for CORS

**Solutions:**

- Add your site domain to OAuth server's CORS whitelist
- For self-hosted: Update CORS configuration
- For Netlify/Vercel: Check deployment configuration

### OAuth popup blocked

**Cause:** Browser blocking popup window

**Solutions:**

- Allow popups for your domain
- Try a different browser
- Check browser extensions (ad blockers)

## Security Best Practices

1. **Keep Client Secret secure:**

   - Never commit to repository
   - Store in environment variables only
   - Rotate regularly

2. **Use HTTPS:**

   - OAuth server must use HTTPS
   - Production site must use HTTPS

3. **Restrict repository access:**

   - Only grant access to trusted users
   - Use GitHub teams for organization

4. **Enable branch protection:**

   - Require pull request reviews
   - Use CMS editorial workflow

5. **Monitor access:**
   - Review OAuth app authorized users
   - Audit repository commit history

## Local Development

For local testing without OAuth:

```yaml
# In config.yml, uncomment:
local_backend: true
```

Then run:

```bash
npx netlify-cms-proxy-server
npm run dev
```

This bypasses OAuth for local development.

## Alternative: Simpler Setup with Git Gateway

If GitHub OAuth seems complex, consider using **Git Gateway** with Netlify Identity instead:

1. Simpler setup (no OAuth server needed)
2. Better for non-developer users
3. Built-in user management
4. Email/password authentication

See `/docs/SVELTIA_CMS_SETUP.md` for Git Gateway instructions.

## Quick Setup Checklist

- [ ] Update config.yml with repository name
- [ ] Choose OAuth server solution
- [ ] Create GitHub OAuth App
- [ ] Get Client ID and Client Secret
- [ ] Configure OAuth server environment variables
- [ ] Update config.yml base_url
- [ ] Test authentication locally
- [ ] Deploy and test in production
- [ ] Configure branch protection (optional)
- [ ] Set up editorial workflow (optional)

## Resources

- [Sveltia CMS Docs](https://github.com/sveltia/sveltia-cms)
- [GitHub OAuth Apps](https://docs.github.com/en/developers/apps/building-oauth-apps)
- [netlify-cms-github-oauth-provider](https://github.com/vencax/netlify-cms-github-oauth-provider)
- [Netlify OAuth Provider](https://docs.netlify.com/visitor-access/oauth-provider-tokens/)

## Next Steps

After authentication is working:

1. Test creating content through CMS
2. Verify commits appear in GitHub
3. Set up editorial workflow
4. Add team members with GitHub access
5. Consider migrating existing content (see `SVELTIA_CMS_SETUP.md`)

---

**Need help?** Check the troubleshooting section above or review the Sveltia CMS documentation.
