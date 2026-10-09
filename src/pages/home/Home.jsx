import React, { useEffect, useState } from 'react';
import turquesaEstatico from '../../assets/Turquesa-estatico.png';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import turquesaGif from '../../assets/Turquesa.gif';
import DannikiFoto from '../../assets/img/danniki-martins.png';
import VivianFoto from '../../assets/img/vivian-juliati.png';
import GermanoFoto from '../../assets/img/germano-dutra-jr.png';
import AgnesFoto from '../../assets/img/agnes-m-varela.png';
import AnaFoto from '../../assets/img/ana-cuentro.png';

const membrosEquipe = [
  { name: 'Danniki Martins', role: 'Líder', foto: DannikiFoto },
  { name: 'Vívian Juliati', role: 'Apoio à liderança', foto: VivianFoto },
  { name: 'Germano Dutra Jr.', role: 'Criador de conteúdo', foto: GermanoFoto },
  { name: 'Agnes M. Varela', role: 'Web Designer', foto: AgnesFoto },
  { name: 'Ana Cuentro', role: 'Líder de Design', foto: AnaFoto },
];

function MainContent() {
   const [membros, setMembros] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [equipeIndex, setEquipeIndex] = useState(0);
  // A animação do sinal começa parada para quem pediu menos movimento no sistema
  const [animacaoAtiva, setAnimacaoAtiva] = useState(
    () => !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    // Buscar membros do backend
    axios.get('https://sl-backend.up.railway.app/api/members')
      .then(response => {
        setMembros(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar membros:', error);
      });
  }, []);

  useEffect(() => {
    document.title = "Surdes Literáries";
  }, []);

  return (
    <main className="min-h-screen bg-white">

      {/* Header */}
      <section className="flex flex-col items-center px-4 md:max-w-6xl md:mx-auto pt-16">
        <h1 className="text-3xl md:text-5xl font-bold text-[#1C9997]">Surdes Literáries</h1>
        <img
          src={animacaoAtiva ? turquesaGif : turquesaEstatico}
          alt="Sinal de Surdes Literáries em Libras, ilustrado"
          className="w-48 md:w-64 h-auto"
        />
        <button
          type="button"
          onClick={() => setAnimacaoAtiva(!animacaoAtiva)}
          className="mt-2 mb-3 px-4 py-2.5 rounded-lg text-gray-700 underline hover:text-[#003C43]"
        >
          {animacaoAtiva ? 'Pausar animação' : 'Reproduzir animação'}
        </button>
      </section>

      {/* Parágrafo */}
      <section className="px-4 mx-auto md:px-0 max-w-[80ch] text-left">
        <p className="text-lg text-gray-700 leading-relaxed">
          Seja bem-vindo(a/e) ao nosso espaço, onde a magia dos sinais e das palavras se conecta.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          O <strong className="text-[#157A78]">Surdes Literáries</strong> é um coletivo voluntário composto por membros da <strong className="text-[#157A78]">Comunidade Surda</strong> que compartilham a paixão por livros, HQs, mangás e cinema. O propósito é fortalecer a literatura acessível, registrando sinais literários, compartilhando resenhas, divulgando notícias do meio cultural e gerando inclusão.
        </p>
        <div className="flex justify-center mt-6">
          <Link
            to="/apoie"
            className="
              font-semibold
              text-white
              bg-[#157A78]
              px-8
              py-3
              rounded-lg
              hover:bg-[#003C43]
              transition-colors
            "
          >
            Apoie o Surdes Literáries!
          </Link>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Sua contribuição de qualquer valor, é fundamental para mantermos nossa produção de conteúdo acessível e inclusiva.
        </p>
      </section>
       {/* Nossa Equipe Carrossel */}
      <section className="relative px-4 md:px-8 md:mx-auto md:max-w-6xl mt-12 md:mt-16">
        <h2 className="text-3xl font-bold text-center text-[#1C9997] mb-6">Nossa Equipe</h2>

        <div className="relative">
          <div className="flex items-center justify-center gap-2 md:gap-8">
            <button
              onClick={() => setEquipeIndex((prev) => (prev - 1 + membrosEquipe.length) % membrosEquipe.length)}
              className="p-2 rounded-full hover:bg-gray-200 transition-colors"
              aria-label="Membro anterior"
            >
              <HiChevronLeft className="text-2xl md:text-3xl text-[#1C9997]" />
            </button>

            <div className="w-full md:w-auto">
              {(() => {
                return (
                  <>
                    {/* Mobile: uma pessoa por vez */}
                    <div className="md:hidden flex flex-col items-center">
                      {(() => {
                        const membro = membrosEquipe[equipeIndex % membrosEquipe.length];
                        return (
                          <>
                            <div className="rounded-full overflow-hidden w-24 h-24 sm:w-32 sm:h-32 mb-4 shadow-lg">
                              {membro.foto && (
                                <img
                                  src={membro.foto}
                                  alt={`Foto de ${membro.name}`}
                                  className="w-full h-full object-cover object-center"
                                  loading="lazy"
                                />
                              )}
                            </div>
                            <p className="text-lg font-semibold text-center text-[#157A78]">
                              {membro.name}
                            </p>
                            <p className="text-md text-center text-gray-600">
                              {membro.role}
                            </p>
                          </>
                        );
                      })()}
                    </div>

                    {/* Desktop: três pessoas lado a lado */}
                    <div className="hidden md:grid md:grid-cols-3 gap-4 md:gap-8 md:min-w-max">
                      {[0, 1, 2].map((offset) => {
                        const index = (equipeIndex + offset) % membrosEquipe.length;
                        const membro = membrosEquipe[index];
                        return (
                          <div key={index} className="flex flex-col items-center">
                            <div className="rounded-full overflow-hidden w-32 h-32 mb-4 shadow-lg">
                              {membro.foto && (
                                <img
                                  src={membro.foto}
                                  alt={`Foto de ${membro.name}`}
                                  className="w-full h-full object-cover object-center"
                                  loading="lazy"
                                />
                              )}
                            </div>
                            <p className="text-lg font-semibold text-center text-[#157A78]">
                              {membro.name}
                            </p>
                            <p className="text-md text-center text-gray-600">
                              {membro.role}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </>
                );
              })()}
            </div>

            <button
              onClick={() => setEquipeIndex((prev) => (prev + 1) % membrosEquipe.length)}
              className="p-2 rounded-full hover:bg-gray-200 transition-colors"
              aria-label="Próximo membro"
            >
              <HiChevronRight className="text-2xl md:text-3xl text-[#1C9997]" />
            </button>
          </div>
        </div>
      </section>

      {/* Agradecimentos */}
      <section className="relative px-4 md:px-8 md:mx-auto pt-12 pb-20 md:pb-8 md:max-w-6xl">
        <p className="text-center text-gray-700 mb-8">
          Agradecemos às pessoas que contribuíram para o desenvolvimento do projeto em diferentes momentos.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          <div className="text-center">
            <p className="font-semibold text-black mb-1">Aldir Junior</p>
            <p className="text-gray-600">Criador de conteúdo</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-black mb-1">Hidel Silva</p>
            <p className="text-gray-600">Dublador</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-black mb-1">Vanessa Santos</p>
            <p className="text-gray-600">Edição de vídeos</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-black mb-1">Dario Diniz</p>
            <p className="text-gray-600">Dublador</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-black mb-1">Mayara Silva</p>
            <p className="text-gray-600">Dubladora</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-black mb-1">Rafael Oliveira</p>
            <p className="text-gray-600">Designer</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-black mb-1">Elis de Jesus</p>
            <p className="text-gray-600">Revisora de textos</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-black mb-1">Marina Souza</p>
            <p className="text-gray-600">Pesquisadora</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-black mb-1">Giselle Virgínio</p>
            <p className="text-gray-600">Advogada</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-black mb-1">Ferdinand Oliveira</p>
            <p className="text-gray-600">Criadore de conteúdo</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-black mb-1">Pablo Dassero</p>
            <p className="text-gray-600">Dublador</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-black mb-1">Cássia Palópolo</p>
            <p className="text-gray-600">Criadora de conteúdo</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-black mb-1">Mariane Noguti</p>
            <p className="text-gray-600">Criadora de conteúdo</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-black mb-1">Murilo Silva</p>
            <p className="text-gray-600">Criador de conteúdo</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-black mb-1">Valdo Nóbrega</p>
            <p className="text-gray-600">Criador de conteúdo</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-black mb-1">Airam Aimé</p>
            <p className="text-gray-600">Dublador</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-black mb-1">Aline L&apos;Astorina</p>
            <p className="text-gray-600">Dubladora</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-black mb-1">Andrew Martinelle</p>
            <p className="text-gray-600">Dublador</p>
          </div>
        </div>
      </section>

      {/* Membros - só aparece quando o backend retorna membros */}
      {membros.some(m => m.team !== 'leader') && (
      <section className="relative px-4 md:px-8 md:mx-auto py-12 md:max-w-6xl">
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            <div className="min-w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {membros.filter(m => m.team !== 'leader').map((membro, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="rounded-full overflow-hidden w-20 h-20 sm:w-30 sm:h-30 md:w-45 md:h-45 border-4 border-[#1C9997] mb-4 shadow-lg">
                    <img 
                      src={membro.url} 
                      alt={`Foto de ${membro.name}`} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <p className="text w-fit md:text-lg text-center text-gray-800">{membro.name}</p>
                  <p className="text-sm md:text-lg text-center">{membro.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      )}
    </main>
  );
}

export default MainContent;
