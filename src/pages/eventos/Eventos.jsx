import { useEffect } from 'react';
import { marked } from 'marked';

// Os eventos ficam em src/content/eventos, um arquivo por evento.
// Quem é do coletivo pode criar e editar eventos pela área de membros (/admin).
const arquivos = import.meta.glob('../../content/eventos/*.json', { eager: true, import: 'default' });
const eventos = Object.values(arquivos).sort((a, b) => a.data.localeCompare(b.data));

function formatarData(data) {
  return new Date(`${data}T12:00:00`).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function cartaoEvento(evento) {
  const detalhes = [
    ['Data', formatarData(evento.data)],
    ['Tema', evento.tema],
    ['Local', evento.local],
    ['Plataforma', evento.plataforma],
  ].filter(([, valor]) => valor);
  const fotos = evento.fotos ?? [];
  const link = evento.link?.url ? evento.link : null;

  return (
    <div key={`${evento.data}-${evento.titulo}`} className="bg-white border border-[#1C9997]/20 rounded-lg p-6 md:p-8 mb-8">
      <h3 className="text-xl md:text-2xl font-semibold text-[#157A78] mb-4">{evento.titulo}</h3>
      <div
        className="text-gray-700 leading-relaxed space-y-4"
        dangerouslySetInnerHTML={{ __html: marked.parse(evento.texto ?? '') }}
      />

      {/* Fotos em barra de rolagem lateral */}
      {fotos.length > 0 && (
        <ul
          tabIndex={0}
          aria-label={`Fotos de ${evento.titulo}`}
          className="mt-6 flex gap-4 overflow-x-auto snap-x pb-3 rounded-lg"
        >
          {fotos.map((foto) => (
            <li key={foto.imagem} className="shrink-0 snap-start">
              <img src={foto.imagem} alt={foto.alt} loading="lazy" className="h-56 md:h-80 w-auto rounded-lg" />
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 pt-4 border-t border-[#1C9997]/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-sm text-gray-600">
          {detalhes.map(([rotulo, valor], index) => (
            <span key={rotulo}>
              {index > 0 && ' | '}
              <strong>{rotulo}:</strong> {valor}
            </span>
          ))}
        </p>
        {link && (
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-semibold text-white bg-[#157A78] px-6 py-2 rounded-lg hover:bg-[#003C43] transition-colors text-center whitespace-nowrap"
          >
            {link.texto || 'Saiba mais'}
            <span className="sr-only">{link.descricao ? ` ${link.descricao}` : ''} (abre em nova aba)</span>
          </a>
        )}
      </div>
    </div>
  );
}


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

        {eventos.map(cartaoEvento)}

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