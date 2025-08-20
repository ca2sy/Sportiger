import { useState } from 'react';
import { Button } from '../components/button';

/* ----------------------------
 * Configuração da navegação
 * ---------------------------- */
const NAV_ITEMS = [
  { href: '#sobre-nos', label: 'Sobre nós' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#feedbacks', label: 'Feedbacks' },
];

/* ----------------------------
 * Subcomponentes
 * ---------------------------- */
function Logo() {
  return (
    <a
      href="#inicio"
      className="group flex items-center gap-2 md:gap-3"
      aria-label="Início"
    >
      <img
        src="/src/assets/logo.svg"
        alt="Logo"
        className="size-25 transition-transform group-hover:scale-110 md:size-35"
      />
      <span className="sr-only">Sportiger</span>
    </a>
  );
}

function DesktopNav() {
  return (
    <ul className="hidden items-center gap-8 text-lg font-medium text-white md:flex">
      {NAV_ITEMS.map(item => (
        <li key={item.href}>
          <a
            href={item.href}
            className="relative px-1 transition-colors hover:text-orange-300 focus:outline-none"
          >
            {item.label}
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-orange-400 transition-all duration-300 hover:w-full" />
          </a>
        </li>
      ))}
    </ul>
  );
}

function MobileToggle({ open, onToggle }) {
  return (
    <button
      type="button"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/10 md:hidden"
      aria-label={open ? 'Fechar menu' : 'Abrir menu'}
      aria-expanded={open}
      onClick={onToggle}
    >
      <span className="text-2xl">{open ? '✕' : '☰'}</span>
    </button>
  );
}

function MobileMenu({ open, onClose }) {
  return (
    <div
      className={`fixed top-[80px] left-0 z-[60] w-full transform px-4 transition-all duration-300 ease-in-out md:hidden ${
        open
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none -translate-y-5 opacity-0'
      }`}
    >
      <div className="overflow-hidden rounded-2xl bg-[#0B1220]/95 text-white shadow-lg ring-1 ring-white/10 backdrop-blur-md">
        <ul className="flex flex-col divide-y divide-white/10">
          {NAV_ITEMS.map(item => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block px-4 py-4 text-center text-base font-medium transition hover:bg-white/5"
                onClick={onClose}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            
            <button
              type="button"
              href='#compre-aqui'
              onClick={onClose}
              className="block w-full bg-gradient-to-r from-orange-500 to-yellow-400 px-6 py-4 text-center font-semibold transition hover:opacity-90"
            >
              Compre aqui
            </button>
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
      <div className="mx-auto mt-3 max-w-[1656px] px-4 sm:px-6 md:mt-5 lg:px-10">
        <div className="rounded-full bg-gradient-to-r from-black/40 via-black/25 to-black/40 shadow-lg backdrop-blur-md">
          <nav
            className="flex h-16 items-center justify-between px-5 md:h-20 md:px-10"
            aria-label="Menu principal"
          >
            <Logo />
            <DesktopNav />
            <div className="hidden md:block">
              <Button href="/produtos">Compre aqui</Button>
            </div>
            <MobileToggle open={open} onToggle={() => setOpen(v => !v)} />
          </nav>
        </div>
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
