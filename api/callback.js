import { COOKIE_ESTADO, lerCookie, origemDoSite, responderAoCms } from './_oauth.js';

// Segundo passo do login da área de membros: o GitHub volta para cá com um código,
// que é trocado por um token e entregue à janela do /admin.
export default async function handler(req, res) {
  const origem = origemDoSite(req);
  const { code, state } = req.query;
  const estadoSalvo = lerCookie(req, COOKIE_ESTADO);

  res.setHeader('Set-Cookie', `${COOKIE_ESTADO}=; Path=/api; HttpOnly; Secure; SameSite=Lax; Max-Age=0`);

  if (!code || !state || state !== estadoSalvo) {
    return responderAoCms(res, origem, { error: 'O login expirou. Tente entrar de novo.' });
  }

  try {
    const resposta = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
        redirect_uri: `${origem}/api/callback`,
      }),
    });
    const dados = await resposta.json();

    if (!dados.access_token) {
      return responderAoCms(res, origem, { error: dados.error_description ?? 'O GitHub não autorizou o login.' });
    }
    return responderAoCms(res, origem, { token: dados.access_token });
  } catch {
    return responderAoCms(res, origem, { error: 'Não foi possível falar com o GitHub. Tente de novo.' });
  }
}
