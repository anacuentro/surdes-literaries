import { passosCompra } from './produtos';

function ComoComprar() {
  return (
    <section className="px-4 md:mx-auto md:px-0 md:max-w-6xl mt-12 md:mt-16 pb-20 md:pb-8">
      <h2 className="text-2xl font-semibold text-[#1C9997] mb-6 text-center">
        Como comprar
      </h2>

      <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {passosCompra.map((passo, index) => (
          <li key={passo.titulo} className="bg-[#1C9997]/10 rounded-lg p-5 text-left">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#157A78] text-white font-bold mb-3">
              {index + 1}
            </span>
            <p className="font-semibold text-gray-800 mb-1">{passo.titulo}</p>
            <p className="text-gray-700">{passo.texto}</p>
          </li>
        ))}
      </ol>

      <p className="text-gray-600 text-left mt-6 max-w-[80ch]">
        O Surdes Literáries é um projeto voluntário: os pedidos são atendidos manualmente,
        com pagamento por Pix e envio pelos Correios.
      </p>
    </section>
  );
}

export default ComoComprar;
