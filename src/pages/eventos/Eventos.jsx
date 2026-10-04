import React from 'react';
import { useEffect } from 'react';
import turquesaGif from '../../assets/Turquesa.gif';
import { HiOutlineExclamationTriangle, HiOutlineWrenchScrewdriver } from 'react-icons/hi2';
import flipei1 from '../../assets/img/Eventos/flipei-2026-1.jpg';
import flipei2 from '../../assets/img/Eventos/flipei-2026-2.jpg';
import flipei3 from '../../assets/img/Eventos/flipei-2026-3.jpg';
import flipei4 from '../../assets/img/Eventos/flipei-2026-4.jpg';
import flipeiProgramacao from '../../assets/img/Eventos/flipei-2026-programacao.png';

const fotosFlipei = [
  { src: flipeiProgramacao, alt: 'Programação no site da FLIPEI 2026: 19h30, Surdes Literáries: a literatura surda e as narrativas de identidade, com Danniki Martin, Vívian Juliati e Ferdinand Oliveira' },
  { src: flipei1, alt: 'Bate-papo no Café Colombiano: uma pessoa sinaliza em Libras sentada em um sofá azul, enquanto outra, na plateia, fala ao microfone' },
  { src: flipei2, alt: 'Duas pessoas sentadas em um sofá azul diante do letreiro Café Colombiano; uma delas sinaliza em Libras sorrindo' },
  { src: flipei3, alt: 'Pessoa da plateia sentada, falando ao microfone durante o bate-papo' },
  { src: flipei4, alt: 'Duas pessoas sentadas acompanham o bate-papo, ao lado de um banner da La Librería' },
];


function Eventos() {
   useEffect(() => {
    document.title = "Eventos | Surdes Literáries";
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
      <section className='px-4 mx-auto mt-8 max-w-[80ch] text-left'>
        <div className="text-lg text-gray-700 leading-relaxed space-y-4">
          <p>
            Esta página é a galeria de memórias e conexões registradas pela trajetória do <strong className="text-[#157A78]">Surdes Literáries</strong> em palestras, encontros, livros e eventos culturais. Aqui, você pode acompanhar como estamos levando a literatura para além das páginas, ocupando espaços educativos que fortalecem a nossa comunidade.
          </p>
        </div>
      </section>

      {/* Seção de Eventos */}
      <section className='px-4 md:mx-auto mt-12 md:mt-16 md:max-w-5xl'>
        <h2 className="text-2xl md:text-3xl font-bold text-[#1C9997] mb-6 text-center">Nossos Eventos</h2>

        {/* Evento 1 - Jornal HK */}
        <div className="bg-white border border-[#1C9997]/20 rounded-lg p-6 md:p-8 mb-8">
          <h3 className="text-xl md:text-2xl font-semibold text-[#157A78] mb-4">Jornal HK</h3>
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
              className="inline-block font-semibold text-white bg-[#157A78] px-6 py-2 rounded-lg hover:bg-[#003C43] transition-colors text-center"
            >
              Assista o vídeo<span className="sr-only"> do evento Jornal HK no Instagram (abre em nova aba)</span>
            </a>
          </div>
        </div>

        {/* Evento 2 - CAS Paraná */}
        <div className="bg-white border border-[#1C9997]/20 rounded-lg p-6 md:p-8 mb-8">
          <h3 className="text-xl md:text-2xl font-semibold text-[#157A78] mb-4">CAS Paraná (2025)</h3>
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
              className="inline-block font-semibold text-white bg-[#157A78] px-6 py-2 rounded-lg hover:bg-[#003C43] transition-colors text-center"
            >
              Assista o vídeo<span className="sr-only"> da live do CAS Paraná no YouTube (abre em nova aba)</span>
            </a>
          </div>
        </div>

        {/* Evento 3 - FLIPEI 2026 */}
        <div className="bg-white border border-[#1C9997]/20 rounded-lg p-6 md:p-8 mb-8">
          <h3 className="text-xl md:text-2xl font-semibold text-[#157A78] mb-4">FLIPEI 2026</h3>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              No dia 08 de agosto de 2026, tivemos a oportunidade de realizar um bate-papo no espaço Papos Insurgentes da 8ª edição da FLIPEI!
            </p>
            <p>
              O tema que abordamos, <strong>“Literatura Surda e as Narrativas de Identidade”</strong>, teve como foco questionar e refletir sobre como podemos adaptar obras literárias para a Libras. Sempre destacamos que a Libras não é a Língua Portuguesa e, por esse motivo, sua sigla significa Língua Brasileira de Sinais — reforçando a palavra brasileira em vez de portuguesa.
            </p>
          </div>

          {/* Fotos em barra de rolagem lateral */}
          <ul
            tabIndex={0}
            aria-label="Fotos do bate-papo na FLIPEI 2026"
            className="mt-6 flex gap-4 overflow-x-auto snap-x pb-3 rounded-lg"
          >
            {fotosFlipei.map((foto) => (
              <li key={foto.src} className="shrink-0 snap-start">
                <img src={foto.src} alt={foto.alt} loading="lazy" className="h-56 md:h-80 w-auto rounded-lg" />
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-4 border-t border-[#1C9997]/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-sm text-gray-600">
              <strong>Data:</strong> 8 de agosto de 2026 | <strong>Tema:</strong> Literatura Surda e as Narrativas de Identidade | <strong>Local:</strong> Café Colombiano, São Paulo
            </p>
            <a
              href="https://www.flipei.org/programa%C3%A7%C3%A3o/dia-808"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-semibold text-white bg-[#157A78] px-6 py-2 rounded-lg hover:bg-[#003C43] transition-colors text-center whitespace-nowrap"
            >
              FLIPEI 2026<span className="sr-only"> (abre em nova aba)</span>
            </a>
          </div>
        </div>

        {/* Seção de Próximos Eventos */}
        <div className="mt-12 pt-12 pb-20 md:pb-8 text-center border-t border-[#1C9997]/20">
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