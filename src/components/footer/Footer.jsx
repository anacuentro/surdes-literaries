import { Link } from 'react-router-dom';
import { FaYoutube, FaInstagram, FaThreads } from 'react-icons/fa6';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1C9997]/76 text-[#003C43] py-6 flex justify-center">
      <div className="text-center space-y-2">
        {/* Ícones de redes sociais */}
        <div className="flex justify-center text-xl">
          <a
            href="https://www.threads.com/@surdosliterarios"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Threads (abre em nova aba)"
            className="p-3 hover:text-black transition-colors duration-300 rounded"
          >
            <FaThreads aria-hidden="true" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCLxR01iVkuNqBPO3PY6eqcg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube (abre em nova aba)"
            className="p-3 hover:text-black rounded"
          >
            <FaYoutube aria-hidden="true" />
          </a>
          <a
            href="https://www.instagram.com/surdosliterarios/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram (abre em nova aba)"
            className="p-3 hover:text-black rounded"
          >
            <FaInstagram aria-hidden="true" />
          </a>
        </div>

        {/* Links e direitos */}
        <div className="text-l">
          <p>
            <a
              href="https://docs.google.com/forms/d/1OiBetnpjQvOr2AWB2hc7N4Ie2dOLKSpnyWUskbWXrF8/viewform?edit_requested=true"
              className="inline-block py-2.5 hover:text-black rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale Conosco<span className="sr-only"> (abre em nova aba)</span>
            </a>
          </p>
          <p>
            <Link
              to="/politica-de-privacidade"
              className="inline-block py-2.5 hover:text-black rounded"
            >
              Política de Privacidade
            </Link>
          </p>
          <p className="pt-1">&copy; {currentYear} Surdes Literaries. Todos os direitos reservados.</p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
