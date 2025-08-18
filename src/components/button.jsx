export function Button({ children }) {
  return (
    <a
      href=""
      className="hidden md:inline-flex items-center justify-center h-[56px] w-auto px-6
                 rounded-full text-white font-poppins font-bold text-xl
                 bg-gradient-to-b from-[#F54900] via-[#F54900] via-60% to-[#FFB86A]
                 shadow-[0_4px_10px_0_#F54900]"
    >
      {children}
    </a>
  );
}
