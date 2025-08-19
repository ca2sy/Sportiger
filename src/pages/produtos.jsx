import { Button } from '../components/button';

export function Produtos() {
  return (
    <div id="produtos" className="mt-20 relative z-30 flex flex-col items-center justify-center rounded-[50px] bg-[#101820]/40 px-4 pt-30 text-center backdrop-blur-md sm:px-6 lg:px-10">
      <h2 className="font-poppins mb-4 text-4xl font-medium text-white sm:text-5xl md:text-6xl">
        Nossos Produtos
      </h2>

      <div className="mb-20 h-0.5 w-86 rounded bg-gradient-to-r from-[#F54900] to-[#dfaa71] shadow-[0px_4px_20px_0px_#F54900] sm:w-145" />

      <p className="max-w-[70rem] text-lg font-light text-white sm:text-xl md:text-2xl mb-1">
        Superamos desafios e criamos {' '}
        <span className="font-semibold text-[#FFB86A]">bolsas esportivas</span> que aliam estilo, funcionalidade e qualidade para cada modalidade.
      </p>

      <div className="mt-12 w-full max-w-[1300px]">
        <div className="relative h-auto min-h-[600px] w-full bg-black/25 border border-[#FFB86A] rounded-[20px] flex flex-col lg:flex-row px-6 lg:px-12 py-10 lg:py-0 text-left">
          
          <h2 className="font-inter font-bold text-white text-[40px] mb-6 lg:mb-0 lg:absolute lg:top-10 lg:left-12">
            Bolsa de ombro
          </h2>

          <div className="lg:mt-32 w-full lg:w-1/2 text-white space-y-6 order-2 lg:order-1">
            <p className="leading-relaxed font-inter font-semibold text-2xl whitespace-nowrap">
              Qualidade de verdade para quem vive o esporte.
            </p>

            <p className="leading-relaxed font-inter font-medium text-2xl lg:w-11/12">
              As bolsas da Sportiger foram criadas para encarar qualquer desafio com você.
              Unindo resistência, praticidade e proteção contra qualquer clima.
              Escolha a sua e leve o melhor com você!
            </p>

            <div className="flex justify-start mt-8"> 
              <Button className="w-full lg:w-80 px-10">Compre aqui.</Button>
            </div>
          </div>

          <div className="flex w-full lg:w-1/2 justify-center items-center order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="flex h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[450px] lg:w-[440px] items-center justify-center overflow-hidden rounded-full border-[5px] border-[#FFB86A]">
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