import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlinePhoto } from 'react-icons/hi2';
import { produtos, formatarPreco } from './produtos';
import ComoComprar from './ComoComprar';


function Loja() {
   useEffect(() => {
    document.title = "Loja | Surdes Literáries";
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Header - Mantendo o mesmo estilo das outras páginas */}
      <section className="flex flex-col items-center px-4 md:max-w-6xl md:mx-auto pt-16">
        <h1 className="text-3xl md:text-5xl font-bold text-[#1C9997]">Loja</h1>
      </section>

      {/* Bloco de texto */}
      <section className='px-4 mx-auto mt-8 max-w-[80ch] text-left'>
        <div className="text-lg text-gray-700 leading-relaxed space-y-4">
          <p>
            Ao comprar na loja do <strong className="text-[#157A78]">Surdes Literáries</strong>, você
            apoia a produção de conteúdo acessível e ajuda a manter o projeto ativo.
          </p>
        </div>
      </section>

      {/* Lista de produtos */}
      <section className="px-4 md:mx-auto md:px-0 md:max-w-6xl mt-12 md:mt-16">
        <h2 className="text-2xl font-semibold text-[#1C9997] mb-6 text-center">
          Nossos Produtos
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {produtos.map((produto) => {
            const capa = produto.midias.find((midia) => midia.tipo === 'imagem');

            return (
              <Link
                key={produto.slug}
                to={`/loja/${produto.slug}`}
                className="group w-full sm:w-80 rounded-lg shadow-md overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300"
              >
                {capa ? (
                  <img src={capa.src} alt={capa.alt} className="w-full aspect-square object-cover" />
                ) : (
                  <div className="w-full aspect-square bg-[#1C9997]/10 flex flex-col items-center justify-center text-[#157A78]">
                    <HiOutlinePhoto className="text-6xl" />
                    <span className="mt-2 text-sm">Foto em breve</span>
                  </div>
                )}
                <div className="p-4 text-left">
                  <p className="text-lg font-semibold text-gray-800 group-hover:text-[#157A78] transition-colors">
                    {produto.nome}
                  </p>
                  <p className="text-gray-700 mt-1">{formatarPreco(produto.preco)}</p>
                  <span className="inline-block mt-3 text-[#157A78] font-semibold">
                    Ver produto
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <ComoComprar />
    </main>
  );
}

export default Loja;
