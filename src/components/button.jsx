import { ChevronRight } from "lucide-react";

export function Button({
  children,
  href = "",
  variant = "solid",
  size = "md",          // "sm" | "md" | "lg"
  full = false,         // true = w-full
  className = "",
}) {
  const sizes = {
    sm: "h-12 px-5 text-base",
    md: "h-14 px-6 text-xl",
    lg: "h-20 px-10 text-2xl", // 80px de altura
  };

  if (variant === "glow") {
    return (
      <a href={href} className={`group inline-block ${full ? "w-full" : ""}`}>
        <span className="inline-flex rounded-full bg-gradient-to-r from-[#F54900] from-45% to-[#FFFFFF] p-[2px] shadow-[0_4px_10px_#F54900] transition-transform duration-150 group-hover:scale-[1.01]">
          <span
            className={`font-poppins inline-flex items-center justify-center gap-3 rounded-full bg-[#0B1220] font-bold text-white ${sizes[size]} ${full ? "w-full" : ""} ${className}`}
          >
            <span className="whitespace-nowrap">{children}</span>
            <ChevronRight />
          </span>
        </span>
      </a>
    );
  }

  return (
    <a
      href={href}
      className={`font-poppins inline-flex items-center justify-center rounded-full
                  bg-gradient-to-b from-[#F54900] via-[#F54900] via-70% to-[#FFB86A]
                  font-bold text-white shadow-[0_4px_10px_0_#F54900]
                  ${sizes[size]} ${full ? "w-full" : ""} ${className}`}
    >
      {children}
    </a>
  );
}
