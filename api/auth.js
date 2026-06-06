export default function handler(req, res) {
  const client_id = process.env.GITHUB_CLIENT_ID;
  
  // Жестко указываем домен, чтобы браузер не сбрасывал связь между окнами
  const redirect_uri = `https://salonportret.vercel.app/api/callback`;
  
  const url = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=repo,user`;
  res.redirect(url);
}