import React from 'react';
import { useEffect } from 'react';
import turquesaGif from '../../assets/Turquesa.gif';
import { HiOutlineExclamationTriangle, HiOutlineWrenchScrewdriver } from 'react-icons/hi2';


function Eventos() {
   useEffect(() => {
    document.title = "Eventos";
  }, []);
  
  return (
    <main className="min-h-screen bg-white">
      {/* Header - Mantendo o mesmo estilo das outras páginas */}
      <section className="flex flex-col items-center px-4 md:max-w-6xl md:mx-auto pt-16">
        <h1 className="text-3xl md:text-5xl font-bold text-[#1C9997]">Eventos</h1>
        {/* <img
          src={turquesaGif}
          alt="Decoração turquesa animada"
          className="w-20 md:w-20 h-auto"
          tabIndex="0"
        /> */}
      </section>

      {/* Sobre Eventos */}
      <section className='px-4 md:mx-auto md:py-8 md:max-w-5xl text-center mt-12 md:mt-12 mb-12 md:mb-8'>
        <div className="text-lg text-gray-700 leading-relaxed space-y-4">
          <p>
            Esta página é a galeria de memórias e conexões registradas pela trajetória do <strong className="text-[#1C9997]">Surdes Literáries</strong> em palestras, encontros, livros e eventos culturais. Aqui, você pode acompanhar como estamos levando a literatura para além das páginas, ocupando espaços educativos que fortalecem a nossa comunidade.
          </p>
        </div>
      </section>

      {/* Seção de Eventos */}
      <section className='px-4 md:mx-auto md:py-8 md:max-w-5xl'>
        <h2 className="text-2xl md:text-3xl font-bold text-[#1C9997] mb-8 text-center">Nossos Eventos</h2>

        {/* Evento 1 - Jornal HK */}
        <div className="bg-white border border-[#1C9997]/20 rounded-lg p-6 md:p-8 mb-8">
          <h3 className="text-xl md:text-2xl font-semibold text-[#1C9997] mb-4">Jornal HK</h3>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              No dia 27 de março de 2025, Danniki Marins apareceu na EMEBS Helen Keller, uma instituição que marca a história do ensino bilíngue para surdos. Fundada em 1950, a escola é um marco histórico na educação de surdos em São Paulo.
            </p>
            <p>
              Durante a visita, os alunos da instituição conversaram com Danniki sobre o projeto Surdes Literáries, um trabalho pioneiro feito em parceria com estudantes. Na ocasião, a líder compartilhou sua experiência e respondeu a perguntas sobre os desafios e conquistas do projeto.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-[#1C9997]/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-sm text-gray-600">
              <strong>Data:</strong> 27 de março de 2025 | <strong>Local:</strong> EMEBS Helen Keller, São Paulo
            </p>
            <a
              href="https://www.instagram.com/p/DQ5Cvp9j6dZ/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-semibold text-white bg-[#1C9997] px-6 py-2 rounded-lg hover:bg-[#158a83] transition-colors text-center"
            >
              Assista o vídeo
            </a>
          </div>
        </div>

        {/* Evento 2 - CAS Paraná */}
        <div className="bg-white border border-[#1C9997]/20 rounded-lg p-6 md:p-8 mb-8">
          <h3 className="text-xl md:text-2xl font-semibold text-[#1C9997] mb-4">CAS Paraná (2025)</h3>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Em celebração ao Setembro Azul — mês que marca as lutas e as conquistas da Comunidade Surda —, o CAS Paraná (Centro de Apoio ao Surdo e aos Profissionais da Educação de Surdos) promoveu, no dia 24 de setembro de 2025, uma live especial sobre a valorização da nossa cultura.
            </p>
            <p>
              A transmissão foi ministrada por Danniki Marins, que abordou o tema <strong>"Literatura Surda"</strong> para apresentar o projeto Surdes Literáries. Assista à live completa no YouTube e prestigie esse debate sobre a importância da literatura surda na comunidade.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-[#1C9997]/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-sm text-gray-600">
              <strong>Data:</strong> 24 de setembro de 2025 | <strong>Tema:</strong> Literatura Surda | <strong>Plataforma:</strong> YouTube
            </p>
            <a
              href="https://www.youtube.com/watch?v=-vIiXtsvcrY&t=3359s"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-semibold text-white bg-[#1C9997] px-6 py-2 rounded-lg hover:bg-[#158a83] transition-colors text-center"
            >
              Assista o vídeo
            </a>
          </div>
        </div>

        {/* Seção de Próximos Eventos */}
        <div className="mt-12 pt-12 pb-20 text-center border-t border-[#1C9997]/20">
          <h3 className="text-2xl font-semibold text-[#1C9997] mb-4">Em breve, mais um evento vem aí!</h3>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Fique de olho em nossas redes sociais para não perder os próximos encontros, feiras literárias e debates que estamos preparando.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Eventos;