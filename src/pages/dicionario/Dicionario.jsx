import React from 'react';
import { useEffect } from 'react';
import turquesaGif from '../../assets/Turquesa.gif';
import { HiOutlineExclamationTriangle, HiOutlineWrenchScrewdriver } from 'react-icons/hi2';


function Dicionario() {
   useEffect(() => {
    document.title = "Dicionário de Sinais Literários | Surdes Literáries";
  }, []);
  
  return (
    <main className="min-h-screen bg-white">
      {/* Header - Mantendo o mesmo estilo das outras páginas */}
      <section className="flex flex-col items-center px-4 md:max-w-6xl md:mx-auto pt-16">
        <h1 className="text-3xl md:text-5xl font-bold text-[#1C9997]">Dicionário de Sinais Literários
</h1>

      </section>

      {/* Página em construção */}
      <section className="flex flex-col items-center justify-center mt-8 pb-20 px-4 text-center">
        <div className="bg-[#1C9997]/10 p-8 rounded-full mb-6">
          <HiOutlineWrenchScrewdriver className="text-[#1C9997] text-6xl" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-[#1C9997] mb-6 flex items-center gap-2">
          <HiOutlineExclamationTriangle className="text-yellow-500" />
          Página em Construção
          <HiOutlineExclamationTriangle className="text-yellow-500" />
        </h2>
        
        <p className="text-lg text-gray-600 max-w-md">
          Estamos trabalhando para trazer informações incríveis sobre nossos eventos em breve!
        </p>
        
        <div className="mt-8 text-sm text-gray-500 flex items-center gap-1">
          <span>Volte em breve para conferir as novidades</span>
          <span aria-hidden="true">🚧</span>
        </div>
      </section>
    </main>
  );
}

export default Dicionario;

// import React, { useEffect, useState } from 'react';
// import turquesaGif from '../../assets/Turquesa.gif';
// import { HiSearch, HiFilter, HiChevronDown, HiChevronUp } from 'react-icons/hi';

// function Dicionario() {
//   const [activeFilter, setActiveFilter] = useState('Todos');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [expandedSignal, setExpandedSignal] = useState(null);

//   // Dados de exemplo para os sinais
//   const signals = [
//     { id: 1, name: 'Sinal 1', category: 'Sinais de autores', description: 'Descrição detalhada do sinal 1 e seu significado literário.' },
//     { id: 2, name: 'Sinal 2', category: 'Sinais de editoras', description: 'Descrição detalhada do sinal 2 e seu significado literário.' },
//     { id: 3, name: 'Sinal 3', category: 'Sinais de gêneros e subgêneros', description: 'Descrição detalhada do sinal 3 e seu significado literário.' },
//     { id: 4, name: 'Sinal 4', category: 'Sinais de palavras literárias', description: 'Descrição detalhada do sinal 4 e seu significado literário.' },
//     { id: 5, name: 'Sinal 5', category: 'Sinais de autores', description: 'Descrição detalhada do sinal 5 e seu significado literário.' },
//     { id: 6, name: 'Sinal 6', category: 'Sinais de editoras', description: 'Descrição detalhada do sinal 6 e seu significado literário.' },
//   ];

//   // Filtros disponíveis
//   const filters = [
//     'Todos',
//     'Sinais de autores',
//     'Sinais de editoras',
//     'Sinais de gêneros e subgêneros',
//     'Sinais de palavras literárias'
//   ];

//   // Filtrar sinais
//   const filteredSignals = signals.filter(signal => {
//     const matchesFilter = activeFilter === 'Todos' || signal.category === activeFilter;
//     const matchesSearch = signal.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
//                          signal.description.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesFilter && matchesSearch;
//   });

//     useEffect(() => {
//     document.title = "Dicionário";
//   }, []);

//   return (
//     <main className="min-h-screen bg-white">
//       {/* Header */}
//       <section className="flex flex-col items-center px-4 md:max-w-6xl md:mx-auto pt-16">
//         <h1 className="text-3xl md:text-5xl font-bold text-[#1C9997]">Dicionário de Sinais Literários</h1>
//       </section>

//       {/* Introdução */}
//       <section className='px-4 mx-10 md:mx-auto md:px-0 md:py-8 md:max-w-5xl'>
//         <p className="text-lg text-gray-700 leading-relaxed mb-6">
//           Os sinalários e o registro de sinais desempenham um papel crucial na promoção de inclusão e acessibilidade para a Comunidade Surda. Estes recursos não apenas preservam e documentam a Língua Brasileira de Sinais (Libras), mas também facilitam a comunicação e o aprendizado.
//         </p>
//         <p className="text-lg text-gray-700 leading-relaxed">
//           Ao reunir um vasto conjunto de sinais, o dicionário serve como uma ferramenta educativa indispensável, permitindo que tanto pessoas surdas quanto pessoas ouvintes possam abordar diversos assuntos sem encontrar a barreira linguística.
//         </p>
//       </section>

//       {/* Filtros e Busca */}
//       <section className="px-4 md:mx-auto md:px-0 md:py-8 md:max-w-5xl">
//         <div className="flex flex-col md:flex-row gap-4 mb-8">
//           {/* Filtros */}
//           <div className="relative flex-1">
//             <div className="flex items-center gap-2 text-[#1C9997]">
//               <HiFilter className="text-xl" />
//               <span className="font-medium">Filtros:</span>
//             </div>
//             <div className="flex flex-wrap gap-2 mt-2">
//               {filters.map(filter => (
//                 <button
//                   key={filter}
//                   onClick={() => setActiveFilter(filter)}
//                   className={`px-3 py-1 rounded-full text-sm ${activeFilter === filter ? 
//                     'bg-[#1C9997] text-white' : 
//                     'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
//                 >
//                   {filter}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Barra de pesquisa */}
//           <div className="relative flex-1">
//             <div className="relative">
//               <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Pesquisar sinais..."
//                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C9997] focus:border-transparent"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Lista de Sinais */}
//       <section className="px-4 md:mx-auto md:px-0 md:pb-12 md:max-w-3xl">
//         <h2 className="text-2xl font-semibold text-[#1C9997] mb-6">Resultados</h2>
        
//         {filteredSignals.length === 0 ? (
//           <p className="text-gray-500 text-center py-8">Nenhum sinal encontrado com os critérios selecionados.</p>
//         ) : (
//           <div className="space-y-4">
//             {filteredSignals.map(signal => (
//               <div key={signal.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
//                 <button
//                   className="w-full flex justify-between items-center p-4 hover:bg-gray-50 focus:outline-none"
//                   onClick={() => setExpandedSignal(expandedSignal === signal.id ? null : signal.id)}
//                 >
//                   <div className="text-left">
//                     <h3 className="font-medium text-lg text-gray-800">{signal.name}</h3>
//                     <p className="text-sm text-gray-500">{signal.category}</p>
//                   </div>
//                   {expandedSignal === signal.id ? (
//                     <HiChevronUp className="text-gray-500" />
//                   ) : (
//                     <HiChevronDown className="text-gray-500" />
//                   )}
//                 </button>
                
//                 {expandedSignal === signal.id && (
//                   <div className="p-4 bg-gray-50 border-t border-gray-200">
//                     <p className="text-gray-700">{signal.description}</p>
//                     {/* Aqui você pode adicionar um vídeo do sinal em LIBRAS */}
//                     <div className="mt-4 bg-gray-200 rounded h-48 flex items-center justify-center text-gray-500">
//                       [Vídeo demonstrando o sinal em LIBRAS]
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </section>
//     </main>
//   );
// }

// export default Dicionario;