import React, { useEffect, useState } from 'react';
import turquesaGif from '../../assets/Turquesa.gif';
import InstagramEmbed from '../../contexts/InstagramEmbed.jsx';

 
function Parcerias() {
  useEffect(() => {
    document.title = "Parcerias | Surdes Literáries";
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Header - Mantendo o mesmo estilo das outras páginas */}
      <section className="flex flex-col items-center px-4 md:max-w-6xl md:mx-auto pt-16">
        <h1 className="text-3xl md:text-5xl font-bold text-[#1C9997]">Parcerias</h1>
        {/* <img 
          src={turquesaGif}
          alt="Decoração turquesa animada" 
          className="w-20 md:w-20 h-auto"
          tabIndex="0"
        /> */}
      </section>

      {/* Bloco de texto */}
      <section className='px-4 mx-auto mt-8 max-w-[80ch] text-left'>
        <div className="text-lg text-gray-700 leading-relaxed space-y-4">
          <p>
           A <a href="https://kklibras.com.br/" target="_blank" rel="noopener noreferrer"><strong className="text-[#157A78]"> K&K Libras</strong><span className="sr-only"> (abre em nova aba)</span></a> é uma empresa que auxilia na inclusão de pessoas surdas, 
            por meio de interpretação em Libras em empresas e cursos, conta com Surdes Literáries 
            para divulgação dos minicursos de leituras guiadas.
          </p>
          
          <p>
            O primeiro minicurso aconteceu em 18 de março a 15 de abril de 2024, 
            falamos sobre o romance de Franz Kafka, <em>"A Metamorfose"</em>. 
            O segundo foi sobre <em>"A Revolução dos Bichos"</em>, de George Orwell, 
            em 20 de maio a 17 de junho de 2024.
          </p>
        </div>
      </section>

            {/* Seção de vídeos do Instagram */}
        <section className="px-4 md:mx-auto md:px-0 mt-12 md:mt-16 md:max-w-6xl">
        {/* Título da seção (opcional) */}
        <h2 className="text-2xl font-semibold text-[#1C9997] mb-6 text-center">
            Nossas Publicações
        </h2>

        {/* Container responsivo */}
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-8">
            {/* Vídeo 1 - Ocupa 100% em mobile e metade em desktop */}
            <div className="w-full md:w-[calc(50%-1rem)]">
            <InstagramEmbed url="https://www.instagram.com/reel/DIxKM5itiDl/" title="Publicação do Instagram sobre o minicurso A Metamorfose" />
            </div>
            
            {/* Vídeo 2 - Oculto em mobile, visível a partir de md */}
            <div className="w-full md:w-[calc(50%-1rem)]">
            <InstagramEmbed url="https://www.instagram.com/reel/C6HyQyOpWzI/" title="Publicação do Instagram sobre o minicurso A Revolução dos Bichos" />
            </div>
        </div>
        </section>

            {/* Seção Imagens */}
        <section className="px-4 md:mx-auto md:px-0 mt-12 md:mt-16 pb-20 md:pb-8 md:max-w-6xl">
        {/* Título da seção (opcional) */}
        <h2 className="text-2xl font-semibold text-[#1C9997] mb-6 text-center">
            Nossos Encontros
        </h2>

        {/* Container responsivo */}
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-8">
            {/* Vídeo 1 - Ocupa 100% em mobile e metade em desktop */}
            <div className="w-full md:w-[calc(50%-1rem)]">
            <img src="https://res.cloudinary.com/dwkzysoyd/image/upload/v1749612535/image_4_rbn5ua.png" alt="Captura de tela de um encontro online do curso A Metamorfose, com participantes mostrando o livro"  className="w-full h-auto rounded-lg shadow-md"/>
            <div className="mt-3 text-left text-gray-700">
              <p><strong>Curso:</strong> A Metamorfose, de Franz Kafka</p>
            </div>
            </div>
            
            {/* Vídeo 2 - Oculto em mobile, visível a partir de md */}
            <div className="w-full md:w-[calc(50%-1rem)]">
            <img src="https://res.cloudinary.com/dwkzysoyd/image/upload/v1749612534/image_5_qexdht.png" alt="Captura de tela de um encontro online do curso A Revolução dos Bichos, com participantes mostrando o livro" className="w-full aspect-[460/210] object-cover rounded-lg shadow-md" />
            <div className="mt-3 text-left text-gray-700">
              <p><strong>Curso:</strong> A Revolução dos Bichos, de George Orwell</p>
            </div>
            </div>
        </div> 
        </section>
    </main>
  );
}

export default Parcerias;