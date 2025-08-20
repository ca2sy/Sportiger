import { Button } from '../components/button';

export function Sobre() {
  return (
    <div id="sobre-nos" className="mt-20 relative z-30 flex flex-col items-center justify-center rounded-t-[50px] bg-[#101820]/40 px-4 pt-30 text-center backdrop-blur-md sm:px-6 lg:px-10">
      <h2 className="font-poppins mb-4 text-4xl font-medium text-white sm:text-5xl md:text-6xl">
        Sobre nós
      </h2>

      <div className="mb-12 h-0.5 w-64 rounded bg-gradient-to-r from-[#F54900] to-[#dfaa71] shadow-[0px_4px_20px_0px_#F54900] sm:w-96" />

      <p className="mb-16 max-w-[70rem] text-lg font-light text-white sm:text-xl md:text-2xl">
        Criada por alunos do ensino médio, a{' '}
        <span className="font-semibold text-[#F54900]">Sportiger</span> nasceu
        da paixão pelo esporte e da admiração pela força e determinação dos
        atletas.
      </p>

      <div className="mb-20 flex w-full flex-col gap-8 md:flex-row">
        <div className="flex w-full justify-center px-4 md:w-1/2 md:justify-end md:px-8">
          <img
            src="/src/assets/grupo.svg"
            alt="Imagem dos integrantes da Sportiger"
            className="h-auto w-3/4 max-w-[500px] rounded-sm object-cover md:w-11/12"
          />
        </div>

        <div className="mt-8 flex w-full flex-col items-center justify-start px-4 md:mt-0 md:w-1/2 md:items-start md:px-8">
          <p className="font-poppins mb-4 text-3xl font-light text-white sm:text-4xl md:mb-6 md:text-[42px]">
            Por que Sportiger?
          </p>

          <p className="mt-4 mb-10 text-justify text-base text-white sm:text-lg md:mt-6 md:text-2xl">
            Nosso nome reflete nossa essência.{' '}
            <span className="text-[#FFB86A]">“Sport”</span>, do inglês para
            esporte, representa nossa dedicação ao mundo esportivo.{' '}
            <span className="text-[#F54900]">“Tiger”</span>, tigre em inglês,
            simboliza a garra, a agilidade e a força que vemos em cada atleta —
            a visão de quem nos inspira.
          </p>

          <Button href="#produtos">Veja nossos produtos</Button>
        </div>
      </div>
    </div>
  );
}
