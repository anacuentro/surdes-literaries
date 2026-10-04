import { useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import './App.css'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'



//pages
import MainContent from './pages/home/Home'
import Parcerias from './pages/parcerias/Parcerias'
import Eventos from './pages/eventos/Eventos'
import Clube from './pages/clube/Clube'
import Dicionario from './pages/dicionario/Dicionario'
import Loja from './pages/loja/Loja'
import Produto from './pages/loja/Produto'
import Cursos from './pages/cursos/Cursos.jsx'
import Privacidade from './pages/privacidade/Privacidade'
import Apoie from './pages/apoie/Apoie'
import NaoEncontrada from './pages/naoEncontrada/NaoEncontrada'


// Ao trocar de página, volta ao topo e leva o foco para o conteúdo novo,
// para que leitores de tela e teclado percebam a mudança.
function Conteudo() {
  const { pathname } = useLocation();
  const conteudoRef = useRef(null);
  const primeiraCarga = useRef(true);

  useEffect(() => {
    if (primeiraCarga.current) {
      primeiraCarga.current = false;
      return;
    }
    window.scrollTo(0, 0);
    conteudoRef.current?.focus({ preventScroll: true });
  }, [pathname]);

  return (
    <div id="conteudo" ref={conteudoRef} tabIndex={-1} className="outline-none">
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/home" element={<MainContent />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/clube" element={<Clube />} />
        <Route path="/dicionario" element={<Dicionario />} />
        <Route path="/parcerias" element={<Parcerias />} />
        <Route path="/loja" element={<Loja />} />
        <Route path="/loja/:slug" element={<Produto />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/apoie" element={<Apoie />} />
        <Route path="/politica-de-privacidade" element={<Privacidade />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes >
    </div>
  );
}

function App() {

  return (
    <Router>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-200 focus:bg-white focus:text-[#003C43] focus:font-semibold focus:px-4 focus:py-2 focus:rounded"
        >
          Pular para o conteúdo
        </a>
        <Nav/>
        <Conteudo />
        <Footer/>
        <Analytics />
    </Router>
  )
}

export default App
