import { Button } from '../components/button';
import { Instagram } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

export function Compre() {
  return (
    <section className="w-full bg-[#101820] px-6 py-16 text-white lg:px-20">
      <div
        id="compre-aqui"
        className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2"
      >
        <div className="flex w-full flex-col items-center justify-center space-y-6 text-center lg:w-auto lg:items-start lg:text-left">
          <h2 className="font-poppins relative inline-block text-5xl font-medium after:absolute after:-bottom-2 after:left-0 after:block after:h-[2px] after:w-[18rem] after:rounded after:bg-gradient-to-r after:from-[#F54900] after:to-[#dfaa71] after:shadow-[0_4px_20px_#F54900] sm:after:w-[24rem]">
            Compre aqui
          </h2>

          <p className="max-w-md text-2xl leading-relaxed font-medium">
            Garanta já a sua! <br />
            Solicite sua bolsa esportiva enviando um e-mail para o nosso
            contato. Praticidade, estilo e performance em um só lugar!
          </p>

          <div className="mt-6 space-y-4">
            <p className="mb-8 text-2xl font-normal">
              Siga nossas redes sociais
            </p>
            <a
              href="https://instagram.com/sportigers.ae"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir Instagram da Sportiger (@sportigers.ae)"
              className="group flex items-center gap-3 rounded-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D9D9D9]/50 transition group-hover:bg-[#D9D9D9]/70">
                <Instagram className="h-7 w-7" aria-hidden="true" />
              </span>
              <span className="text-lg group-hover:underline">
                @sportigers.ae
              </span>
            </a>

            <a
              href="https://www.tiktok.com/@sportigers.ae"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir TikTok da Sportiger (@sportigers.ae)"
              className="group flex items-center gap-3 rounded-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D9D9D9]/50 transition group-hover:bg-[#D9D9D9]/70">
                <FontAwesomeIcon
                  icon={faTiktok}
                  className="text-[30px]"
                  aria-hidden="true"
                />
              </span>
              <span className="text-lg group-hover:underline">
                @sportigers.ae
              </span>
            </a>
          </div>
        </div>

        <form className="mt-20 flex flex-col items-center space-y-6">
          <input
            type="text"
            placeholder="Nome"
            className="h-[72px] w-[491px] max-w-full rounded-[20px] border-[5px] border-[#FFB86A] bg-[#19222A] px-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#F54900] focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="h-[72px] w-[491px] max-w-full rounded-[20px] border-[5px] border-[#FFB86A] bg-[#19222A] px-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#F54900] focus:outline-none"
          />
          <input
            type="text"
            placeholder="Assunto"
            className="h-[72px] w-[491px] max-w-full rounded-[20px] border-[5px] border-[#FFB86A] bg-[#19222A] px-4 text-white focus:ring-2 focus:ring-[#F54900] focus:outline-none"
          />
          <textarea
            placeholder="Descrição"
            maxLength={500}
            className="h-[164px] w-[491px] max-w-full resize-none rounded-[20px] border-[5px] border-[#FFB86A] bg-[#19222A] px-4 py-3 text-white focus:ring-2 focus:ring-[#F54900] focus:outline-none"
          />

          <Button size="lg" full className="max-w-[491px]">
            Enviar
          </Button>
        </form>
      </div>
    </section>
  );
}
