/**
 * GitHub OAuth Callback Handler for Sveltia CMS
 * 
 * This handles the redirect from GitHub after user authorization.
 * It processes the callback and sends the data back to the CMS popup window.
 */

export default async function handler(req, res) {
  const { code, state } = req.query;

  // Generate the HTML response that will send data to the CMS
  const html = `
<!DOCTYPE html>
<html>
<head>
  <title>Authenticating...</title>
  <meta charset="utf-8">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      background: #f5f5f5;
    }
    .container {
      text-align: center;
      padding: 2rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .spinner {
      border: 3px solid #f3f3f3;
      border-top: 3px solid #333;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      animation: spin 1s linear infinite;
      margin: 0 auto 1rem;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .error {
      color: #d32f2f;
      margin-top: 1rem;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="spinner"></div>
    <p>Completing authentication...</p>
    <p class="error" id="error" style="display: none;"></p>
  </div>
  
  <script>
    (function() {
      function receiveMessage(message) {
        window.opener.postMessage(
          'authorization:github:success:${JSON.stringify({ code, state })}',
          message.origin
        );
        window.close();
      }

      // Check if we have the required data
      const code = '${code}';
      const state = '${state || ''}';

      if (!code) {
        document.getElementById('error').textContent = 'Authentication failed: No authorization code received';
        document.getElementById('error').style.display = 'block';
      } else {
        // Send message to opener window (CMS)
        if (window.opener) {
          window.opener.postMessage(
            'authorization:github:success:' + JSON.stringify({ code: code, state: state }),
            '*'
          );
          
          // Close window after a short delay
          setTimeout(function() {
            window.close();
          }, 1000);
        } else {
          document.getElementById('error').textContent = 'Authentication window error. Please try again.';
          document.getElementById('error').style.display = 'block';
        }
      }
    })();
  </script>
</body>
</html>
  `;

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}
