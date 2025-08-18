export function Sobre() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-6 text-center px-4 sm:px-6 lg:px-10">
      {/* Título */}
      <h2 className="text-8xl font-poppins font-medium text-white">
        Sobre nós
      </h2>

      {/* Linha */}
      <div className="w-[40rem] h-1 rounded shadow-[0px_4px_20px_0px_#F54900] bg-gradient-to-r from-[#F54900] from-10% to-[#FFB86A]" />

      {/* Subtítulo em linha */}
      <p className="text-[32px] text-white font-light">
        Criada por alunos do ensino médio, a{' '}
        <span className="text-[#F54900] font-semibold">Sportiger</span> nasceu da paixão
        pelo esporte e da admiração pela força e determinação dos atletas.
      </p>
      <div class="flex gap-8"> 
        <div> 
            {/* Imagem */}
        </div>
        <div>
            {/* Texto 2 */}
        </div>
      </div>
    </div>
  );
}
