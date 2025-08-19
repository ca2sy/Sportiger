import { ChevronRight } from 'lucide-react';

export function Button({
  children,
  href = '',
  variant = 'solid',
  className = '',
}) {
  // Classes comuns para tamanho
  const sizeClasses = 'h-[56px] px-6';

  if (variant === 'glow') {
    return (
      <a href={href} className={`group inline-block ${className}`}>
        <button
          type="button"
          className="inline-flex rounded-full bg-gradient-to-r from-[#F54900] from-45% to-[#FFFFFF] p-[2px] shadow-[0_4px_10px_#F54900] transition-transform duration-150 group-hover:scale-[1.01]"
        >
          <span
            className={`font-poppins inline-flex items-center justify-center gap-3 rounded-full bg-[#0B1220] text-xl font-bold text-white ${sizeClasses} `}
          >
            <span className="whitespace-nowrap">{children}</span>
            <ChevronRight />
          </span>
        </button>
      </a>
    );
  }


  return (
    <a
      href={href}
      className={`font-poppins flex items-center justify-center rounded-full bg-gradient-to-b from-[#F54900] via-[#F54900] via-70% to-[#FFB86A] text-xl font-bold text-white shadow-[0_4px_10px_0_#F54900] md:inline-flex ${sizeClasses} `}
    >
      {children}
    </a>
  );
}
