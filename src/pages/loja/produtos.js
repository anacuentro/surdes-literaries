import canecaFrente from '../../assets/img/Loja/caneca-frente.webp';
import canecaEsquerda from '../../assets/img/Loja/caneca-esquerda.webp';
import canecaDireita from '../../assets/img/Loja/caneca-direita.webp';
import canecaGiro from '../../assets/img/Loja/caneca-giro-360.mp4';

// Dados da loja. Para adicionar um produto novo, basta incluir um item em `produtos`.

// E-mail que recebe os pedidos.
// Enquanto estiver vazio, o botão de pedido aparece como "Pedidos em breve".
export const EMAIL_PEDIDO = 'surdosliterarios@gmail.com';

export const produtos = [
  {
    slug: 'caneca',
    nome: 'Caneca Surdes Literáries',
    // Enquanto for false, o botão de pedido aparece como "Pedidos em breve".
    disponivel: false,
    // Valor em reais (ex.: 45.9). Enquanto for null, aparece "Valor em breve".
    preco: 70,
    descricao: [
      'O produto é produzido em território nacional, feito em porcelana e possui uma ilustração incrível feita por um artista surdo.',
      'Com 350 ml de capacidade, é uma ótima companhia para o café da manhã, o lanche da tarde ou aquele momento de pausa durante o dia. Prepare sua bebida favorita, aqueça a caneca.',
    ],
    especificacoes: [
      'Altura: 10 cm',
      'Largura: 12 cm',
      'Comprimento: 9 cm',
      'Material: Porcelana',
      'Capacidade: 350 ml',
    ],
    cuidados: [
      'Lavar com água, esponja macia e detergente neutro.',
      'Não utilizar em micro-ondas ou lava-louças.',
      'Não utilizar produtos químicos ou abrasivos.',
      'Evitar choques e quedas, pois o produto é feito de porcelana e pode trincar ou quebrar.',
    ],
    // Fotos e vídeos do produto, na ordem em que aparecem na galeria.
    // { tipo: 'imagem', src: '...', alt: '...' } ou { tipo: 'video', src: '...', alt: '...' }
    midias: [
      {
        tipo: 'imagem',
        src: canecaEsquerda,
        alt: 'Lado esquerdo da caneca, com alça laranja e a ilustração de uma pessoa sorrindo e sinalizando em Libras',
      },
      {
        tipo: 'imagem',
        src: canecaFrente,
        alt: 'Caneca branca com interior laranja, vista de frente, com o nome Surdes Literáries e desenhos de livros, óculos, mãos, notebook e quadrinhos em verde e laranja',
      },
      {
        tipo: 'imagem',
        src: canecaDireita,
        alt: 'Lado direito da caneca, com alça laranja e a ilustração de uma pessoa sorrindo e sinalizando em Libras, ao lado de uma xícara, um livro aberto e uma caneta',
      },
      {
        tipo: 'video',
        src: canecaGiro,
        alt: 'Vídeo da caneca girando 360 graus',
      },
    ],
  },
];

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
