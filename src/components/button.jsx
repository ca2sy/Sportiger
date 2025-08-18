export function Button({
  children,
  href = "",
  variant = "solid",
  className = "",
}) {
  // Classes comuns para tamanho
  const sizeClasses = "h-[56px] px-6";

  if (variant === "glow") {
    return (
      <a href={href} className={`group inline-block ${className}`}>
        <span
          className="
            inline-flex p-[2px] rounded-full
            bg-gradient-to-r from-[#FF7A1A] via-[#F54900] to-[#FFB86A]
            shadow-[0_4px_10px_#F54900]
            transition-transform duration-150 group-hover:scale-[1.01]
          "
        >
          <span
            className={`
              inline-flex items-center justify-center gap-3
              rounded-full bg-[#0B1220]
              text-white font-poppins text-xl font-bold
              ${sizeClasses}
            `}
          >
            <span className="whitespace-nowrap">{children}</span>
            <svg
              width="16" height="32" viewBox="0 0 16 32"
              className="opacity-90 group-hover:opacity-100 transition"
              aria-hidden="true"
            >
              <path d="M4 6l8 10-8 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </span>
      </a>
    );
  }

  // variante original (solid)
  return (
    <a
      href={href}
      className={`
        hidden md:inline-flex items-center justify-center
        rounded-full text-white font-poppins font-bold text-xl
        bg-gradient-to-b from-[#F54900] via-[#F54900] via-70% to-[#FFB86A]
        shadow-[0_4px_10px_0_#F54900]
        ${sizeClasses}
      `}
    >
      {children}
    </a>
  );
}