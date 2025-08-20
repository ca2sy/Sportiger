import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTop = () => {
    const target = document.getElementById('inicio');
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={goTop}
      aria-label="Voltar ao topo"
      className={`fixed right-6 bottom-6 z-50 h-14 w-14 rounded-full bg-gradient-to-b from-[#F54900] via-[#F54900] via-70% to-[#FFB86A] text-white shadow-[0_4px_10px_#F54900] transition-all duration-200 ${show ? 'pointer-events-auto scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'}`}
    >
      <ChevronUp className="mx-auto h-6 w-6" />
    </button>
  );
}
