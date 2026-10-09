// Os produtos ficam em src/content/produtos, um arquivo por produto.
// Quem é do coletivo pode criar e editar produtos pela área de membros (/admin).
// O endereço da página do produto vem do nome do arquivo (ex.: caneca.json vira /loja/caneca).
const arquivos = import.meta.glob('../../content/produtos/*.json', { eager: true, import: 'default' });

// E-mail que recebe os pedidos.
// Enquanto estiver vazio, o botão de pedido aparece como "Pedidos em breve".
export const EMAIL_PEDIDO = 'surdosliterarios@gmail.com';

export const produtos = Object.entries(arquivos)
  .map(([caminho, produto]) => ({
    ...produto,
    slug: caminho.split('/').pop().replace(/\.json$/, ''),
    descricao: produto.descricao ?? [],
    midias: produto.midias ?? [],
  }))
  .sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));

export const passosCompra = [
  {
    titulo: 'Faça seu pedido',
    texto: 'Envie um e-mail informando o produto, a quantidade e o CEP de entrega.',
  },
  {
    titulo: 'Receba o valor total',
    texto: 'Calculamos o frete dos Correios e enviamos o valor final com a chave Pix.',
  },
  {
    titulo: 'Pague por Pix',
    texto: 'Faça o pagamento e envie o comprovante para confirmarmos o pedido.',
  },
  {
    titulo: 'Receba em casa',
    texto: 'Enviamos pelos Correios e compartilhamos o código de rastreio.',
  },
];

export function formatarPreco(preco) {
  if (preco == null) return 'Valor em breve';
  return preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Abre o e-mail de pedido já preenchido com o nome do produto.
export function linkPedido(produto) {
  if (!EMAIL_PEDIDO || !produto.disponivel) return '';
  const assunto = `Pedido: ${produto.nome}`;
  const corpo = `Olá! Quero fazer um pedido.\n\nProduto: ${produto.nome}\nQuantidade: \nCEP de entrega: \nNome completo: `;
  return `mailto:${EMAIL_PEDIDO}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
}
