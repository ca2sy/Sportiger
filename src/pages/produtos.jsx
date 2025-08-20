import { Button } from "../components/button";

export function Produtos() {
  return (
    <section
      id="produtos"
      className="relative z-30 mt-0 scroll-mt-24 px-4 pt-8 text-center sm:px-6 lg:px-10"
    >
      {/* Cabeçalho da seção */}
      <h2 className="font-poppins mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
        Nossos Produtos
      </h2>

      <div className="mx-auto mb-6 h-0.5 w-[21.5rem] rounded bg-gradient-to-r from-[#F54900] to-[#dfaa71] shadow-[0_4px_20px_#F54900] sm:w-[36rem]" />

      <p className="mx-auto mb-1 max-w-[70rem] text-lg font-normal text-white sm:text-xl md:text-2xl">
        Superamos desafios e criamos{" "}
        <span className="font-semibold text-[#FFB86A]">bolsas esportivas</span>{" "}
        que aliam estilo, funcionalidade e qualidade para cada modalidade.
      </p>

      {/* Card do produto */}
      <div className="mx-auto mt-12 w-full max-w-[1300px]">
        <div
          className="rounded-[20px] border border-[#FFB86A] bg-black/25
                     p-6 sm:p-8 lg:p-12 mb-20"
        >
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* Coluna texto */}
            <div className="text-left">
              <h3 className="font-inter mb-6 text-[28px] sm:text-[34px] lg:text-[40px] font-bold text-white">
                Bolsa de ombro
              </h3>

              <p className="font-inter text-xl sm:text-2xl font-semibold leading-relaxed">
                Qualidade de verdade para quem vive o esporte.
              </p>

              <p className="mt-4 font-inter text-lg sm:text-2xl font-normal leading-relaxed lg:max-w-[90%]">
                As bolsas da Sportiger foram criadas para encarar qualquer
                desafio com você. Unindo resistência, praticidade e proteção
                contra qualquer clima. Escolha a sua e leve o melhor com você!
              </p>

              <div className="mt-8">
                <Button href="#compre-aqui" className="w-full px-10 sm:w-auto">
                  Compre aqui
                </Button>
              </div>
            </div>

            {/* Coluna imagem */}
            <div className="flex justify-center">
              <div
                className="aspect-square h-[300px] sm:h-[400px] lg:h-[450px]
                           overflow-hidden rounded-full border-[5px] border-[#FFB86A]"
              >
                <img
                  src="/src/assets/bolsa.svg"
                  alt="Bolsa Sportiger"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
