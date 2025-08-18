import { Button } from '../components/button';

export function Home() {
  return (
    <div className="z-30 flex relative min-h-screen w-full flex-col items-center justify-center gap-12 text-center">
      <h1 className="flex flex-col gap-2 text-6xl">
        O esporte usa{' '}
        <span className="bg-linear-to-b from-[#F54900] from-60% to-[#FFB86A] bg-clip-text p-2 font-bold text-transparent">
          Sportiger
        </span>
      </h1>
      <p className="text-2xl font-extralight">
        Tecnologia, conforto e estilo para o seu melhor{' '}
        <span className="flex flex-col gap-2">desempenho.</span>
      </p>
      <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
        <Button variant="glow" href="#produtos">
          Veja nossos produtos
        </Button>
        <Button href="#sobre-nos">O que é Sportiger ?</Button>
      </div>
    </div>
  );
}
