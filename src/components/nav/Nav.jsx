import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const itens = [
  { path: '/home', label: 'Início' },
  { path: '/clube', label: 'Clube de Leitura' },
  { path: '/eventos', label: 'Eventos' },
  { path: '/parcerias', label: 'Parcerias' },
  { path: '/cursos', label: 'Cursos' },
  { path: '/loja', label: 'Loja' },
  { path: '/dicionario', label: 'Dicionário de Sinais Literários' },
];

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/home') return location.pathname === '/' || location.pathname === '/home';
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  const fecharMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="bg-[#1C9997]/76 shadow-md" aria-label="Navegação principal">
      <div className="max-w-6xl mx-auto px-4">
        {/* Container principal - logo e botão mobile */}
        <div className="flex justify-between items-center h-16">
          {/* Logo alinhada à esquerda */}
          <div className="flex-shrink-0">
            <Link
              to="/home"
              onClick={fecharMenu}
              className="flex items-center h-11 rounded"
            >
              <img
                className="h-20 w-auto rounded-full"
                src="https://res.cloudinary.com/dwkzysoyd/image/upload/v1749610754/Branco_kec5wp.png"
                alt="Surdes Literáries, página inicial"
              />
            </Link>
          </div>

          {/* Menu Desktop (oculto em mobile) */}
          <ul className="hidden md:flex space-x-8">
            {itens.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  aria-current={isActive(item.path) ? 'page' : undefined}
                  className={`text-[#003C43] hover:text-black
                    inline-flex items-center min-h-11 px-1 rounded font-medium transition duration-300`}
                >
                  <span className={`pb-1 ${isActive(item.path) ? 'border-b-2 border-[#003C43]' : ''}`}>
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Botão Mobile alinhado à direita */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#003C43] hover:text-black p-2.5 rounded"
              aria-expanded={isMobileMenuOpen}
              aria-controls="menu-mobile"
              aria-label="Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Mobile com transição suave. Fechado, fica invisível para não receber foco do teclado. */}
        <div
          id="menu-mobile"
          className={`md:hidden fixed inset-x-0 z-100 overflow-y-auto transition-all duration-350 ease-in-out transform ${isMobileMenuOpen ? 'visible translate-x-0 bg-[#52B1B0]' : 'invisible -translate-x-full bg-transparent pointer-events-none'}`}
        >
          <div className="min-h-screen pt-20 px-4">
            <ul className="space-y-6">
              {itens.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={fecharMenu}
                    aria-current={isActive(item.path) ? 'page' : undefined}
                    className={`block w-full text-left text-[#003C43] hover:bg-white/30 px-6 py-4 rounded-lg text-x transition ${isActive(item.path) ? 'bg-white/40 font-bold' : ''}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
