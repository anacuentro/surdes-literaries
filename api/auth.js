import { randomBytes } from 'node:crypto';
import { COOKIE_ESTADO, origemDoSite, responderAoCms } from './_oauth.js';

// Primeiro passo do login da área de membros: manda a pessoa para o GitHub.
export default function handler(req, res) {
  const origem = origemDoSite(req);
  const clientId = process.env.GITHUB_CLIENT_ID;

  if (!clientId || !process.env.GITHUB_CLIENT_SECRET) {
    return responderAoCms(res, origem, { error: 'O login com GitHub ainda não foi configurado na Vercel.' });
  }

  const estado = randomBytes(16).toString('hex');
  const parametros = new URLSearchParams({
    client_id: clientId,
    redirect_uri: `${origem}/api/callback`,
    scope: typeof req.query.scope === 'string' && req.query.scope ? req.query.scope : 'repo',
    state: estado,
  });

  res.setHeader(
    'Set-Cookie',
    `${COOKIE_ESTADO}=${estado}; Path=/api; HttpOnly; Secure; SameSite=Lax; Max-Age=600`,
  );
  res.redirect(302, `https://github.com/login/oauth/authorize?${parametros}`);
}
