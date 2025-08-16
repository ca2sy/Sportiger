import { useState } from "react";
import { Button } from "../components/button";

/* ----------------------------
 * Configuração da navegação
 * ---------------------------- */
const NAV_ITEMS = [
  { href: "#sobre-nos", label: "Sobre nós" },
  { href: "#produtos", label: "Produtos" },
  { href: "#feedbacks", label: "Feedbacks" },
];

/* ----------------------------
 * Subcomponentes
 * ---------------------------- */
function Logo() {
  return (
    <a
      href="#inicio"
      className="flex items-center gap-2 md:gap-3 group"
      aria-label="Início"
    >
      <img
        src="/src/assets/logo.svg"
        alt="Logo"
        className="size-25 md:size-35 transition-transform group-hover:scale-110"
      />
      <span className="sr-only">Sportiger</span>
    </a>
  );
}

function DesktopNav() {
  return (
    <ul className="hidden md:flex items-center gap-8 text-white font-medium text-lg">
      {NAV_ITEMS.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            className="relative px-1 hover:text-orange-300 transition-colors 
                       focus:outline-none"
          >
            {item.label}
            <span
              className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-400 
                         transition-all duration-300 hover:w-full"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}

function MobileToggle({ open, onToggle }) {
  return (
    <button
      className="md:hidden inline-flex items-center justify-center h-10 w-10 
                 rounded-full text-white hover:bg-white/10 transition"
      aria-label={open ? "Fechar menu" : "Abrir menu"}
      aria-expanded={open}
      onClick={onToggle}
    >
      <span className="text-2xl">{open ? "✕" : "☰"}</span>
    </button>
  );
}

function MobileMenu({ open, onClose }) {
  return (
    <div
      className={`md:hidden fixed z-[60] left-0 top-[80px] w-full px-4 
                  transform transition-all duration-300 ease-in-out
                  ${open
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
    >
      <div
        className="rounded-2xl text-white bg-[#0B1220]/95 backdrop-blur-md
                   shadow-lg ring-1 ring-white/10 overflow-hidden"
      >
        <ul className="flex flex-col divide-y divide-white/10">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block px-4 py-4 text-center text-base font-medium 
                           hover:bg-white/5 transition"
                onClick={onClose}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#compre-aqui"
              onClick={onClose}
              className="block w-full px-6 py-4 text-center font-semibold
                         bg-gradient-to-r from-orange-500 to-yellow-400
                         hover:opacity-90 transition"
            >
              Compre aqui
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

/* ----------------------------
 * Header principal
 * ---------------------------- */
export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-[1656px] px-4 sm:px-6 lg:px-10 mt-3 md:mt-5">
        <div
          className="bg-gradient-to-r from-black/40 via-black/25 to-black/40
                     rounded-full backdrop-blur-md shadow-lg"
        >
          <nav
            className="px-5 h-16 md:h-20 md:px-10 flex items-center justify-between"
            aria-label="Menu principal"
          >
            <Logo />
            <DesktopNav />
            <div className="hidden md:block">
              <Button href="/produtos">Compre aqui</Button>
            </div>
            <MobileToggle open={open} onToggle={() => setOpen((v) => !v)} />
          </nav>
        </div>
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}