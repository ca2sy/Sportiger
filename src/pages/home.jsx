import { Button } from '../components/button';

export function Home() {
  return (
    <div
      id="inicio"
      className="
        relative z-30 flex min-h-screen w-full flex-col items-center justify-center text-center
        /* respiro abaixo do header */
        pt-[96px] sm:pt-[112px] md:pt-[128px]
        /* âncora considera a altura do header */
        scroll-mt-[110px]
        /* layout */
        px-4 gap-10
      "
    >
      <h1 className="flex flex-col gap-3 text-7xl">
        O esporte usa{' '}
        <span className="bg-linear-to-b from-[#F54900] from-60% to-[#FFB86A] bg-clip-text p-2 font-bold text-transparent">
          Sportiger
        </span>
      </h1>

      <p className="text-3xl font-extralight">
        Tecnologia, conforto e estilo para o seu melhor{' '}
        <span className="flex flex-col gap-2">desempenho.</span>
      </p>

      <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
        <Button variant="glow" href="#produtos">
          Veja nossos produtos
        </Button>
        <Button href="#sobre-nos">O que é Sportiger ?</Button>
      </div>
    </div>
  );
}
