import { useEffect } from 'react';

function Privacidade() {
  useEffect(() => {
    document.title = "Política de Privacidade | Surdes Literáries";
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <section className="flex flex-col items-center px-4 md:max-w-6xl md:mx-auto pt-16">
        <h1 className="text-3xl md:text-5xl font-bold text-[#1C9997] text-center">Política de Privacidade</h1>
      </section>

      <section className="px-4 mx-auto max-w-[80ch] mt-8 pb-20 md:pb-8 text-lg text-gray-700 leading-relaxed text-left">
        <p className="text-gray-600">Última atualização: 4 de outubro de 2026</p>

        <h2 className="text-2xl font-semibold text-[#1C9997] mt-12 md:mt-16 mb-6">Quem somos</h2>
        <p>
          O Surdes Literáries é um coletivo de leitura da Comunidade Surda. Somos um projeto voluntário, não uma empresa.
        </p>

        <h2 className="text-2xl font-semibold text-[#1C9997] mt-12 md:mt-16 mb-6">Quais dados recebemos</h2>
        <p>Este site não tem cadastro nem login. Só recebemos seus dados quando você decide enviar:</p>
        <ul className="list-disc list-outside pl-6 mt-3 space-y-2">
          <li><strong>Fale Conosco:</strong> o que você escrever no formulário.</li>
          <li><strong>Pedido na loja:</strong> seu nome, e-mail, endereço de entrega e o comprovante do Pix.</li>
          <li><strong>Apoio ao projeto:</strong> o pagamento é feito por Pix, no aplicativo do seu banco. Vemos só o que aparece no comprovante.</li>
        </ul>
        <p className="mt-3">
          Também contamos as visitas ao site com o Vercel Analytics. Ele não usa cookies e não identifica você.
        </p>

        <h2 className="text-2xl font-semibold text-[#1C9997] mt-12 md:mt-16 mb-6">Para que usamos</h2>
        <ul className="list-disc list-outside pl-6 space-y-2">
          <li>Responder sua mensagem.</li>
          <li>Confirmar o pagamento e enviar seu pedido pelos Correios.</li>
        </ul>
        <p className="mt-3">
          A venda de produtos, como a caneca, ajuda a pagar os custos do projeto.
        </p>

        <h2 className="text-2xl font-semibold text-[#1C9997] mt-12 md:mt-16 mb-6">Com quem compartilhamos</h2>
        <p>
          Não vendemos seus dados. Só passamos seu nome e endereço aos Correios, para a entrega do pedido.
        </p>

        <h2 className="text-2xl font-semibold text-[#1C9997] mt-12 md:mt-16 mb-6">Por quanto tempo guardamos</h2>
        <p>
          Guardamos seus dados só pelo tempo necessário para atender você. Depois, você pode pedir para apagarmos.
        </p>

        <h2 className="text-2xl font-semibold text-[#1C9997] mt-12 md:mt-16 mb-6">Outros sites</h2>
        <p>
          Nosso site mostra publicações do Instagram e tem links para o YouTube, o Threads, o formulário do Google e o pagamento por Pix. Cada um desses serviços tem sua própria política de privacidade.
        </p>

        <h2 className="text-2xl font-semibold text-[#1C9997] mt-12 md:mt-16 mb-6">Seus direitos</h2>
        <p>
          Você pode pedir para ver, corrigir ou apagar seus dados a qualquer momento. Escreva para{' '}
          <a href="mailto:surdosliterarios@gmail.com" className="font-semibold text-[#003C43] underline">
            surdosliterarios@gmail.com
          </a>.
        </p>

        <h2 className="text-2xl font-semibold text-[#1C9997] mt-12 md:mt-16 mb-6">Mudanças nesta política</h2>
        <p>
          Podemos atualizar este texto. A data no início da página mostra a última mudança.
        </p>
      </section>
    </main>
  );
}

export default Privacidade;
