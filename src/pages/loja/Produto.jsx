import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { HiChevronLeft, HiOutlinePhoto, HiPlay } from 'react-icons/hi2';
import { produtos, formatarPreco, linkPedido } from './produtos';
import ComoComprar from './ComoComprar';


function Produto() {
  const { slug } = useParams();
  const produto = produtos.find((item) => item.slug === slug);
  const [midiaAtiva, setMidiaAtiva] = useState(0);

  useEffect(() => {
    document.title = produto ? `${produto.nome} | Loja | Surdes Literáries` : "Produto não encontrado | Surdes Literáries";
  }, [produto]);

  // O vídeo só toca sozinho para quem não pediu menos movimento no sistema
  const [reduzirMovimento] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  if (!produto) {
    return (
      <main className="min-h-screen bg-white">
        <section className="flex flex-col items-center px-4 md:max-w-6xl md:mx-auto pt-16 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-[#1C9997]">Produto não encontrado</h1>
          <p className="text-lg text-gray-700 mt-8">
            Não encontramos este produto na nossa loja.
          </p>
          <Link to="/loja" className="mt-6 text-[#157A78] font-semibold hover:underline">
            Voltar para a loja
          </Link>
        </section>
      </main>
    );
  }

  const midia = produto.midias[midiaAtiva];
  const pedido = linkPedido(produto);

  return (
    <main className="min-h-screen bg-white">
      <section className="px-4 md:mx-auto md:px-0 md:max-w-6xl pt-8">
        <Link
          to="/loja"
          className="inline-flex items-center gap-1 text-gray-600 hover:text-[#157A78] transition-colors"
        >
          <HiChevronLeft />
          Voltar para a loja
        </Link>

        <div className="grid gap-8 md:grid-cols-2 mt-6">
          {/* Galeria de fotos e vídeo */}
          <div>
            {midia ? (
              midia.tipo === 'video' ? (
                <video
                  key={midia.src}
                  src={midia.src}
                  controls
                  autoPlay={!reduzirMovimento}
                  muted
                  loop
                  playsInline
                  aria-label={midia.alt}
                  className="w-full aspect-square object-contain bg-white rounded-lg shadow-md"
                />
              ) : (
                <img
                  src={midia.src}
                  alt={midia.alt}
                  className="w-full aspect-square object-cover rounded-lg shadow-md"
                />
              )
            ) : (
              <div className="w-full aspect-square bg-[#1C9997]/10 rounded-lg flex flex-col items-center justify-center text-[#157A78]">
                <HiOutlinePhoto className="text-6xl" />
                <span className="mt-2 text-sm">Fotos e vídeo em breve</span>
              </div>
            )}

            {produto.midias.length > 1 && (
              <div className="flex flex-wrap gap-3 mt-4">
                {produto.midias.map((item, index) => (
                  <button
                    key={item.src}
                    type="button"
                    onClick={() => setMidiaAtiva(index)}
                    aria-label={`Ver ${item.tipo === 'video' ? 'vídeo' : 'foto'}: ${item.alt}`}
                    aria-pressed={index === midiaAtiva}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      index === midiaAtiva ? 'border-[#1C9997]' : 'border-transparent'
                    }`}
                  >
                    {item.tipo === 'video' ? (
                      <span className="w-full h-full bg-gray-800 flex items-center justify-center text-white text-2xl">
                        <HiPlay />
                      </span>
                    ) : (
                      <img src={item.src} alt="" className="w-full h-full object-cover" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Informações do produto */}
          <div className="text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1C9997]">{produto.nome}</h1>
            <p className="text-2xl font-semibold text-gray-800 mt-4">{formatarPreco(produto.preco)}</p>
            <p className="text-gray-600 mt-1">+ frete dos Correios, calculado pelo CEP</p>

            <div className="text-lg text-gray-700 leading-relaxed space-y-4 mt-6">
              {produto.descricao.map((paragrafo) => (
                <p key={paragrafo}>{paragrafo}</p>
              ))}
            </div>

            {pedido ? (
              <a
                href={pedido}
                className="inline-block mt-8 px-8 py-3 rounded-lg bg-[#157A78] text-white font-semibold hover:bg-[#003C43] transition-colors duration-300"
              >
                Fazer pedido por e-mail
              </a>
            ) : (
              <span className="inline-block mt-8 px-8 py-3 rounded-lg bg-gray-200 text-gray-600 font-semibold">
                Pedidos em breve
              </span>
            )}
            <p className="text-gray-600 mt-3">Pagamento por Pix. Envio pelos Correios.</p>

            {[
              { titulo: 'Especificações', itens: produto.especificacoes },
              { titulo: 'Cuidados e recomendações de uso', itens: produto.cuidados },
            ].map(({ titulo, itens }) => itens?.length > 0 && (
              <div key={titulo}>
                <h2 className="text-xl font-semibold text-[#157A78] mt-12 md:mt-16 mb-6">{titulo}</h2>
                <ul className="list-disc list-outside pl-5 text-gray-700 space-y-1">
                  {itens.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ComoComprar />
    </main>
  );
}

export default Produto;
