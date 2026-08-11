import React from 'react';
import { useEffect } from 'react';
import turquesaGif from '../../assets/Turquesa.gif';
import { HiOutlineExclamationTriangle, HiOutlineWrenchScrewdriver } from 'react-icons/hi2';
import clube from '../../assets/img/Clube/clube.jpg';
import encontro1 from '../../assets/img/Clube/turma-1.png';
import encontro2 from '../../assets/img/Clube/turma-2.jpg';


function Clube() {

    useEffect(() => {
    document.title = "Clube de Leitura";
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Header - Mantendo o mesmo estilo das outras páginas */}
      <section className="flex flex-col items-center px-4 md:max-w-6xl md:mx-auto pt-16">
        <h1 className="text-3xl md:text-5xl font-bold text-[#1C9997]">Clube de Leitura</h1>
        {/* <img 
          src={turquesaGif}
          alt="Decoração turquesa animada" 
          className="w-20 md:w-20 h-auto"
          tabIndex="0"
        /> */}
      </section>


      {/* Bloco de texto */}
      <section className='px-4 md:mx-auto md:py-8 md:max-w-5xl text-center mt-8 md:mt-12'>
        <div className="text-lg text-gray-700 leading-relaxed space-y-4">
          <p>
           O <strong className="text-[#1C9997]"> Clube de Leitura do Surdes Literáries</strong> tem como propósito oferecer um espaço acessível e acolhedor para pessoas surdas que desejam desenvolver habilidades de leitura, interpretação e argumentação em Língua Portuguesa, por meio de encontros online em Libras. Mais do que uma leitura coletiva, o clube propõe uma vivência educativa e inclusiva, onde o livro é ponto de partida para reflexões e trocas entre pessoas da comunidade surda. Pessoas ouvintes com fluência ou nível intermediário em Libras também são bem-vindas para contribuir com o aprendizado conjunto.
          </p>
          <img src={clube} alt="Imagem do Clube de Leitura" className="w-full max-w-md mx-auto rounded-lg shadow-md" />
          <p>
            Os encontros acontecem virtualmente, às vezes na semana ou no fim de semana, sempre com uma hora e meia de duração, e  com turmas de até seis participantes. A inscrição mensal tem o valor de R$20, que ajuda a manter o projeto ativo. Os livros são enviados em formato PDF e, para iniciar, será utilizada a Coleção Vagalume, com histórias envolventes e acessíveis para todas as idades.
          </p>
        </div>
      </section>

          {/* Seção Imagens */}
        <section className="px-4 md:mx-auto md:px-0 md:py-8 md:max-w-6xl">
        {/* Título da seção (opcional) */}
        <h3 className="text-2xl font-semibold text-[#1C9997] mb-6 mt-12 md:mt-16 text-center">
            Nossos Encontros
        </h3>

        {/* Container responsivo */}
        <div className="flex flex-col md:flex-row md:flex-wrap justify-space-between gap-8">
            {/* Vídeo 1 - Ocupa 100% em mobile e metade em desktop */}
            <div className="w-full md:w-[calc(50%-1rem)]">
            <img src={encontro1} alt="Imagem do Encontro 1" className="w-full h-auto rounded-lg shadow-md" />
            <div className="mt-3 text-left text-gray-700">
              <p><strong>Livro:</strong> Éramos Seis</p>
              <p><strong>Período:</strong> Outubro/2024 a Março/2025</p>
            </div>
            </div>
            
            {/* Vídeo 2 - Oculto em mobile, visível a partir de md */}
            <div className="w-full md:w-[calc(50%-1rem)] mb-8 md:mb-0">
            <img src={encontro2} alt="Imagem do Encontro 2" className="w-full h-auto rounded-lg shadow-md" />
            <div className="mt-3 text-left text-gray-700">
              <p><strong>Livro:</strong> Um Cadáver Ouve Rádio</p>
              <p><strong>Período:</strong> Abril/2025 a Outubro/2025</p>
            </div>
            </div>
        </div>
        </section>

      {/* Seção A amizade que vai além das telas */}
      <section className='px-4 md:mx-auto md:py-8 md:max-w-5xl mb-0 pb-20 bg-white text-center'>
        <h3 className="text-2xl font-semibold text-[#1C9997] mb-8 md:mb-6 text-center">
          A amizade que vai além das telas
        </h3>
        <div className="text-lg text-gray-700 leading-relaxed">
          <p>
            Por incrível que pareça, graças aos nossos encontros literários, a amizade permanece e se fortalece. No dia 02 de novembro de 2025, realizamos um Amigo Secreto presencial na Mundo Pão do Olivier, na Praça da República.
          </p>
          <p className="mt-4">
            Como os participantes que toparam o convite eram moradores da capital de São Paulo, conseguimos celebrar essa união pessoalmente, provando que o Surdes Literáries é, acima de tudo, um espaço de construção de vínculos.
          </p>
        </div>
      </section>

    </main>
  );
}

export default Clube;