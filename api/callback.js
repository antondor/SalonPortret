export default async function handler(req, res) {
  const { code } = req.query;
  const client_id = process.env.GITHUB_CLIENT_ID;
  const client_secret = process.env.GITHUB_CLIENT_SECRET;

  if (!code) {
    res.status(400).send('No code provided');
    return;
  }

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

    if (data.error || !data.access_token) {
      res.status(400).send('Error: ' + (data.error || 'No token'));
      return;
    }

    const content = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Authentication Success</title>
        <style>
          body { font-family: sans-serif; text-align: center; padding-top: 50px; color: #333; }
          button { padding: 12px 24px; font-size: 14px; cursor: pointer; background: #24292e; color: white; border: none; border-radius: 6px; }
        </style>
      </head>
      <body>
        <h2>Авторизация успешна!</h2>
        <p>Перенаправляем в панель управления...</p>
        <p><button id="closeBtn">Войти вручную</button></p>
        <script>
          const token = "${data.access_token}";
          const message = 'authorization:github:success:{"token":"' + token + '","provider":"github"}';
          
          function sendAndClose() {
            if (window.opener) {
              window.opener.postMessage(message, "*");
              setTimeout(() => {
                window.close();
              }, 1000);
            } else {
              alert("Главное окно не найдено");
            }
          }

          sendAndClose();
          document.getElementById('closeBtn').addEventListener('click', sendAndClose);
        </script>
      </body>
      </html>
    `;

    res.status(200).send(content);
  } catch (error) {
    res.status(500).send(error.message);
  }
}