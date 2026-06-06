export default async function handler(req, res) {
  const { code } = req.query;
  const client_id = process.env.GITHUB_CLIENT_ID;
  const client_secret = process.env.GITHUB_CLIENT_SECRET;

  if (!code) {
    res.status(400).send('Режим ожидания: Скрипт готов. Запускай его через админку сайта.');
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
      res.status(400).send('Error: ' + (data.error || 'No token') + '. Description: ' + (data.error_description || 'Check keys'));
      return;
    }

    const content = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Авторизация...</title>
        <style>
          body { font-family: sans-serif; text-align: center; padding-top: 50px; color: #333; }
        </style>
      </head>
      <body>
        <p>Авторизация успешна! Перенаправляем в админку...</p>
        <script>
          const token = "${data.access_token}";
          const message = 'authorization:github:success:{"token":"' + token + '","provider":"github"}';
          
          if (window.opener) {
            // Отправляем токен в основную вкладку
            window.opener.postMessage(message, "*");
            
            // Даем браузеру 500мс, чтобы гарантированно доставить сообщение, и только потом закрываемся
            setTimeout(() => {
              window.close();
            }, 500);
          } else {
            document.body.innerHTML = '<h3 style="color:red;">Ошибка: window.opener не найден!</h3><p>Браузер заблокировал связь между окнами. Убедись, что заходишь строго по адресу без дополнительных поддоменов.</p>';
          }
        </script>
      </body>
      </html>
    `;

    res.status(200).send(content);
  } catch (error) {
    res.status(500).send(error.message);
  }
}