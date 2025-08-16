import { useState } from "react";
import { Button } from "../components/button";

export function Header() {
  const [open, setOpen] = useState(false);

  const nav = [
    { href: "#sobre-nos", label: "Sobre nós" },
    { href: "#produtos", label: "Produtos" },
    { href: "#feedbacks", label: "Feedbacks" },
  ];

  return (
    <header className="relative inset-x-0 top-0 z-50">
      {/* barra tipo "pílula" translúcida */}
      <div className="fixed mx-auto mt-3 md:mt-5 max-w-[1656px] px-3 sm:px-4">
        <div className="bg-black/25 rounded-full backdrop-blur">
          <nav
            className="h-[64px] md:h-[80px] px-4 sm:px-6 lg:px-10 flex items-center justify-between"
            aria-label="Menu principal"
          >
            {/* Logo */}
            <a href="#inicio" className="flex items-center gap-3" aria-label="Início">
              {/* use /IMG_7047.png ou ajuste o caminho */}
              <div className="p-4">
                <img
                  src="/src/assets/logo.svg"
                  alt="Logo"
                  className="size-35"
                />
              </div>
              <span className="sr-only">Sportiger</span>
            </a>

            {/* Navegação desktop */}
            <ul className="hidden md:flex items-center gap-8 text-white font-mono text-lg leading-8">
              {nav.map((i) => (
                <li key={i.href}>
                  <a className="hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded"
                    href={i.href}>{i.label}</a>
                </li>
              ))}
            </ul>

            {/* CTA desktop */}
            <Button>Compre aqui</Button>

            {/* Botão mobile */}
            <button
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full text-white border border-white/40"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              ☰
            </button>
          </nav>
        </div>
      </div>

      {/* Menu mobile dropdown (escuro, fixado sob o header) */}
      {/* Menu mobile dropdown (escuro, fixo sob o header) */}
      {open && (
        <div
          className="md:hidden fixed z-[60] left-1/2 -translate-x-1/2
               w-[min(95vw,1656px)] px-3 sm:px-4 top-[90px]"
        >
          <div
            className="overflow-hidden rounded-2xl text-white
                 backdrop-blur-sm ring-1 ring-white/10
                 shadow-[0_6px_24px_rgba(0,0,0,.35)]
                 !bg-[#0B1220]"                 // força o fundo
            style={{ backgroundColor: '#0B1220' }}   // mata qualquer override
          >
            <ul className="p-2 bg-transparent text-white/90">
              {nav.map((i) => (
                <li key={i.href}>
                  <a
                    href={i.href}
                    className="block px-3 py-3 text-base font-mono hover:bg-white/5 rounded-lg"
                    onClick={() => setOpen(false)}
                  >
                    {i.label}
                  </a>
                </li>
              ))}
              <li className="p-2">
                <a
                  href="#compre-aqui"
                  onClick={() => setOpen(false)}
                  className="block text-center w-full rounded-full px-6 py-3
                       text-white font-poppins font-bold
                       bg-gradient-to-b from-[#F54900] to-[#FFB86A]
                       shadow-[0_4px_10px_0_#F54900]"
                >
                  Compre aqui
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}


    </header>
  );
}
