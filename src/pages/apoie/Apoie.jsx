import { useEffect, useRef, useState } from 'react';
import qrCodePix from '../../assets/img/Apoie/qr-code-pix.png';

const PIX_COPIA_E_COLA = '00020126480014br.gov.bcb.pix0126surdosliterarios@gmail.com5204000053039865802BR5914Danniki Martin6009Sao Paulo62240520daqr29107403748850426304D925';

function Apoie() {
  const [aviso, setAviso] = useState('');
  const codigoRef = useRef(null);

  useEffect(() => {
    document.title = "Apoie | Surdes Literáries";
  }, []);

  const copiarCodigo = async () => {
    try {
      await navigator.clipboard.writeText(PIX_COPIA_E_COLA);
      setAviso('Código copiado.');
    } catch {
      // Navegadores que bloqueiam a área de transferência: seleciona o código e tenta o método antigo
      const selecao = window.getSelection();
      const intervalo = document.createRange();
      intervalo.selectNodeContents(codigoRef.current);
      selecao.removeAllRanges();
      selecao.addRange(intervalo);
      const copiou = document.execCommand('copy');
      setAviso(copiou ? 'Código copiado.' : 'Não foi possível copiar. O código está selecionado: copie manualmente.');
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="flex flex-col items-center px-4 md:max-w-6xl md:mx-auto pt-16">
        <h1 className="text-3xl md:text-5xl font-bold text-[#1C9997] text-center">Apoie o Surdes Literáries</h1>
      </section>

      <section className="px-4 mx-auto max-w-[80ch] mt-8 pb-20 md:pb-8 text-lg text-gray-700 leading-relaxed text-left">
        <p>
          Sua contribuição, de qualquer valor, ajuda a manter nossa produção de conteúdo acessível e inclusiva.
        </p>
        <p className="mt-4">
          O apoio é feito por Pix. Você escolhe o valor no aplicativo do seu banco.
        </p>

        <h2 className="text-2xl font-semibold text-[#1C9997] mt-12 md:mt-16 mb-6">Pix com QR Code</h2>
        <p>Abra o aplicativo do seu banco, escolha pagar com Pix e aponte a câmera para o QR Code.</p>
        <img
          src={qrCodePix}
          alt="QR Code do Pix do Surdes Literáries"
          className="mt-4 w-56 h-auto border border-gray-200 rounded-lg p-2 [image-rendering:pixelated]"
        />

        <h2 className="text-2xl font-semibold text-[#1C9997] mt-12 md:mt-16 mb-6">Pix Copia e Cola</h2>
        <p>Copie o código abaixo e cole no aplicativo do seu banco, na opção Pix Copia e Cola.</p>
        <p ref={codigoRef} className="mt-4 p-4 bg-[#1C9997]/10 rounded-lg font-mono text-base text-gray-800 break-all">
          {PIX_COPIA_E_COLA}
        </p>
        <button
          type="button"
          onClick={copiarCodigo}
          className="mt-4 px-8 py-3 rounded-lg bg-[#157A78] text-white font-semibold hover:bg-[#003C43] transition-colors"
        >
          Copiar código
        </button>
        <p role="status" className="mt-3 min-h-7 text-gray-700">{aviso}</p>

        <p className="mt-4">
          O Pix está no nome de Danniki Martin, líder do Surdes Literáries.
        </p>
      </section>
    </main>
  );
}

export default Apoie;
