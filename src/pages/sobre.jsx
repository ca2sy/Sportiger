import { Button } from '../components/button';

export function Sobre() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-10 mt-20">
      
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-medium text-white mb-4">
        Sobre nós
      </h2>

      <div className="w-64 sm:w-96 h-0.5 rounded shadow-[0px_4px_20px_0px_#F54900] bg-gradient-to-r from-[#F54900] to-[#dfaa71] mb-12" />

      <p className="text-lg sm:text-xl md:text-2xl text-white font-light mb-16 max-w-[70rem]">
        Criada por alunos do ensino médio, a{' '}
        <span className="text-[#F54900] font-semibold">Sportiger</span> nasceu da paixão
        pelo esporte e da admiração pela força e determinação dos atletas.
      </p>

     
      <div className="flex flex-col md:flex-row w-full gap-8  mb-20">

        
        <div className="w-full md:w-1/2 flex justify-center md:justify-end px-4 md:px-8">
          <img
            src="/src/assets/grupo.svg"
            alt="Imagem dos integrantes da Sportiger"
            className="w-3/4 md:w-11/12 max-w-[500px] h-auto object-cover rounded-sm"
          />
        </div>

    
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-start px-4 md:px-8 mt-8 md:mt-0">
          <p className="text-3xl sm:text-4xl md:text-[42px] font-light text-white font-poppins mb-4 md:mb-6">
            Por que Sportiger?
          </p>

          <p className="text-base sm:text-lg md:text-2xl text-white mt-4 md:mt-6 text-justify mb-10">
            Nosso nome reflete nossa essência.{' '}
            <span className="text-[#FFB86A]">“Sport”</span>, do inglês para esporte, representa nossa dedicação ao mundo esportivo.{' '}
            <span className="text-[#F54900]">“Tiger”</span>, tigre em inglês, simboliza a garra, a agilidade e a força que vemos em cada atleta — a visão de quem nos inspira.
          </p>

          <Button href="/produtos">
            Veja nossos produtos
          </Button>

        </div>
      </div>
    </div>
  );
}