export default async function handler(req, res) {
  const { code } = req.query;
  const client_id = process.env.GITHUB_CLIENT_ID;
  const client_secret = process.env.GITHUB_CLIENT_SECRET;

  try {
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ client_id, client_secret, code }),
    });

    const data = await response.json();
    const content = `
      <!DOCTYPE html>
      <html>
      <body>
        <script>
          const token = "${data.access_token}";
          const message = 'authorization:github:success:{"token":"' + token + '","provider":"github"}';
          window.opener.postMessage(message, "*");
          window.close();
        </script>
      </body>
      </html>
    `;

    res.status(200).send(content);
  } catch (error) {
    res.status(500).send(error.message);
  }
}