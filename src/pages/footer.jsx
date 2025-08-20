import logoUrl from "../assets/logo.svg";
import ellipse6Url from "../assets/Ellipse_6.svg";
import { Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-30 mt-20">
      <div className="relative w-full rounded-t-[50px] bg-black/25 overflow-hidden">
        {/* ELIPSE no fundo do footer */}
        <img
          src={ellipse6Url}
          alt=""
          aria-hidden
          className="pointer-events-none select-none
                     absolute left-1/2 -translate-x-1/2
                     bottom-[-30%] z-0
                     w-[1400px] h-auto opacity-100" />
        {/* Conteúdo do footer */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-8 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
            {/* Contatos */}
            <div className="flex justify-center md:justify-start">
              <div className="relative flex flex-col gap-5 pl-6 text-white">
                <span aria-hidden className="absolute left-0 top-0 h-full w-[2px] bg-white/70" />
                <a href="https://instagram.com/sportigers.ae" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-90">
                  <Instagram className="h-6 w-6" />
                  <span className="text-base md:text-lg">@sportigers.ae</span>
                </a>
                <a href="mailto:sportiger@gmail.com" className="flex items-center gap-3 hover:opacity-90">
                  <Mail className="h-7 w-7" />
                  <span className="text-base md:text-lg">assessoria.sportiger@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Logo central */}
            <div className="flex justify-center">
              <img src={logoUrl} alt="Sportiger" className="h-[125px] w-[235px] object-contain" />
            </div>

            {/* Navegação */}
            <nav className="flex justify-center gap-10 text-white md:justify-end">
              <a href="/#inicio" className="text-xl hover:opacity-90">Início</a>
              <a href="/#produtos" className="text-xl hover:opacity-90">Produtos</a>
              <a href="/#sobre-nos" className="text-xl hover:opacity-90">Sobre nós</a>
            </nav>
          </div>

          <p className="mt-6 text-center text-sm text-white/90 md:text-base">
            © {new Date().getFullYear()} Sportiger. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}