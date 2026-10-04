import React from 'react';
import { useEffect } from 'react';
import turquesaGif from '../../assets/Turquesa.gif';
import { HiOutlineExclamationTriangle, HiOutlineWrenchScrewdriver } from 'react-icons/hi2';


function Cursos() {
   useEffect(() => {
    document.title = "Cursos | Surdes Literáries";
  }, []);
  
  return (
    <main className="min-h-screen bg-white">
      {/* Header - Mantendo o mesmo estilo das outras páginas */}
      <section className="flex flex-col items-center px-4 md:max-w-6xl md:mx-auto pt-16">
        <h1 className="text-3xl md:text-5xl font-bold text-[#1C9997]">Cursos</h1>
        {/* <img 
          src={turquesaGif}
          alt="Decoração turquesa animada" 
          className="w-20 md:w-20 h-auto"
          tabIndex="0"
        /> */}
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
          Estamos trabalhando para trazer informações incríveis sobre nossos cursos em breve!
        </p>
        
        <div className="mt-8 text-sm text-gray-500 flex items-center gap-1">
          <span>Volte em breve para conferir as novidades</span>
          <span aria-hidden="true">🚧</span>
        </div>
      </section>
    </main>
  );
}

export default Cursos;