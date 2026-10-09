// Funções compartilhadas pelo login da área de membros (/admin) com o GitHub.
// Precisam das variáveis de ambiente GITHUB_CLIENT_ID e GITHUB_CLIENT_SECRET na Vercel.

export const COOKIE_ESTADO = 'cms_oauth_state';

export function origemDoSite(req) {
  const protocolo = req.headers['x-forwarded-proto'] ?? 'https';
  const host = req.headers['x-forwarded-host'] ?? req.headers.host;
  return `${protocolo}://${host}`;
}

export function lerCookie(req, nome) {
  const cookies = req.headers.cookie ?? '';
  const par = cookies.split(';').map((item) => item.trim()).find((item) => item.startsWith(`${nome}=`));
  return par ? decodeURIComponent(par.slice(nome.length + 1)) : '';
}

// Página que devolve o resultado do login para a janela da área de membros,
// no formato de mensagens que o Sveltia CMS (e o Decap CMS) espera.
export function responderAoCms(res, origem, resultado) {
  const status = resultado.token ? 'success' : 'error';
  const conteudo = JSON.stringify({ provider: 'github', ...resultado });
  const mensagem = JSON.stringify(`authorization:github:${status}:${conteudo}`).replace(/</g, '\\u003c');

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).send(`<!doctype html>
<html lang="pt-br">
<head><meta charset="utf-8"><title>Entrando…</title></head>
<body>
<p>${resultado.token ? 'Login feito. Esta janela pode ser fechada.' : 'Não foi possível entrar. Feche esta janela e tente de novo.'}</p>
<script>
  (function () {
    var origem = ${JSON.stringify(origem)};
    function receber(evento) {
      if (evento.origin !== origem || evento.data !== 'authorizing:github') return;
      window.removeEventListener('message', receber);
      window.opener.postMessage(${mensagem}, origem);
    }
    window.addEventListener('message', receber);
    if (window.opener) window.opener.postMessage('authorizing:github', origem);
  })();
</script>
</body>
</html>`);
}
