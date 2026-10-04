import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function NaoEncontrada() {
  useEffect(() => {
    document.title = "Página não encontrada | Surdes Literáries";
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <section className="flex flex-col items-center px-4 md:max-w-6xl md:mx-auto pt-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-[#1C9997]">Página não encontrada</h1>
        <p className="text-lg text-gray-700 mt-8">
          Não encontramos a página que você procura.
        </p>
        <Link to="/home" className="mt-6 font-semibold text-[#003C43] underline">
          Voltar para o início
        </Link>
      </section>
    </main>
  );
}

export default NaoEncontrada;
