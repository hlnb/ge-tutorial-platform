/**
 * GitHub OAuth Handler for Sveltia CMS on Vercel
 * 
 * This serverless function handles the OAuth authentication flow
 * between Sveltia CMS and GitHub.
 * 
 * Required Environment Variables:
 * - OAUTH_GITHUB_CLIENT_ID: Your GitHub OAuth App Client ID
 * - OAUTH_GITHUB_CLIENT_SECRET: Your GitHub OAuth App Client Secret
 */

export default async function handler(req, res) {
  // Enable CORS for CMS access
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Validate environment variables
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  const clientSecret = process.env.OAUTH_GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    console.error('Missing OAuth environment variables');
    return res.status(500).json({
      error: 'Server configuration error',
      message: 'OAuth credentials not configured. Set OAUTH_GITHUB_CLIENT_ID and OAUTH_GITHUB_CLIENT_SECRET in Vercel environment variables.',
    });
  }

  const { code, state } = req.query;

  // If no code, redirect to GitHub OAuth authorization
  if (!code) {
    const callbackUrl = `${req.headers['x-forwarded-proto'] || 'https'}://${req.headers.host}/api/auth-callback`;
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(callbackUrl)}&scope=repo,user${state ? `&state=${state}` : ''}`;
    
    return res.redirect(302, githubAuthUrl);
  }

  try {
    // Exchange code for access token
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code: code,
      }),
    });

    if (!tokenResponse.ok) {
      throw new Error(`GitHub API responded with ${tokenResponse.status}`);
    }

    const data = await tokenResponse.json();

    // Check for errors in response
    if (data.error) {
      console.error('GitHub OAuth error:', data);
      return res.status(401).json({
        error: 'Authentication failed',
        message: data.error_description || data.error,
      });
    }

    // Return access token to CMS
    // The CMS expects a specific response format
    return res.status(200).json({
      token: data.access_token,
      provider: 'github',
    });

  } catch (error) {
    console.error('OAuth error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message,
    });
  }
}
