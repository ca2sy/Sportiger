import { Button } from '../components/button';

export function Produtos() {
  return (
    <div
      id="produtos"
      className="relative z-30 mt-0 flex scroll-mt-24 flex-col items-center justify-center bg-[#101820]/40 px-4 pt-8 text-center backdrop-blur-md sm:px-6 lg:px-10"
    >
      <h2 className="font-poppins mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
        Nossos Produtos
      </h2>

      <div className="mx-auto mb-6 h-0.5 w-[21.5rem] rounded bg-gradient-to-r from-[#F54900] to-[#dfaa71] shadow-[0_4px_20px_#F54900] sm:w-[36rem]" />

      <p className="mb-1 max-w-[70rem] text-lg font-normal text-white sm:text-xl md:text-2xl">
        Superamos desafios e criamos{' '}
        <span className="font-semibold text-[#FFB86A]">bolsas esportivas</span>{' '}
        que aliam estilo, funcionalidade e qualidade para cada modalidade.
      </p>

      <div className="mt-12 w-full max-w-[1300px]">
        <div className="relative flex h-auto min-h-[600px] w-full flex-col rounded-[20px] border border-[#FFB86A] bg-black/25 px-6 py-10 text-left lg:flex-row lg:px-12 lg:py-0 mb-20">
          <h2 className="font-inter mb-6 text-[40px] font-bold text-white lg:absolute lg:top-10 lg:left-12 lg:mb-0">
            Bolsa de ombro
          </h2>

          <div className="order-2 w-full space-y-6 text-white lg:order-1 lg:mt-32 lg:w-1/2">
            <p className="font-inter text-2xl leading-relaxed font-semibold">
              Qualidade de verdade para quem vive o esporte.
            </p>

            <p className="font-inter text-2xl leading-relaxed font-normal lg:w-11/12">
              As bolsas da Sportiger foram criadas para encarar qualquer desafio
              com você. Unindo resistência, praticidade e proteção contra
              qualquer clima. Escolha a sua e leve o melhor com você!
            </p>
            <div className="mt-8 flex justify-start">
              <Button className="w-full px-10 lg:w-80">Compre aqui.</Button>
            </div>
          </div>

          <div className="order-1 mb-8 flex w-full items-center justify-center lg:order-2 lg:mb-0 lg:w-1/2">
            <div className="flex h-[300px] w-[300px] items-center justify-center overflow-hidden rounded-full border-[5px] border-[#FFB86A] sm:h-[400px] sm:w-[400px] lg:h-[450px] lg:w-[440px]">
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
  );
}
