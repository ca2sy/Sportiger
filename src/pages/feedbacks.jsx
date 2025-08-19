import { FeedbackCard } from "../components/FeedbackCard.jsx";

const feedbacks = [
  {
    text:
      "Amei minha bolsa ❤️\nótima qualidade da para levar bastante coisa dentro dela 😍 perfeita ❤️❤️❤️❤️",
    handle: "jeruza.pessoa",
  },
  {
    text:
      "Não estava na programação em comprar hoje no shopping, mas ao adquirir achei espetacular.\nExcelente 👏👏👏😄",
    handle: "_shirley.pessoa_",
  },
  {
    text:
      "Amei a funcionalidade. E já adquiri a minha pochete. É sucesso absoluto 👏👏👏 😍",
    handle: "celianrocha",
  },
];

export function Feedbacks() {
  return (
    <section
      id="feedbacks"
      className="mt-20 relative z-30 rounded-[50px] bg-[#101820]/40
                 px-4 pt-[120px] text-center backdrop-blur-md sm:px-6 lg:px-10"
    >
      {/* Header */}
      <h2
        className="font-poppins mb-3 font-medium text-white leading-tight
                   text-[48px]"
      >
        FeedBacks
      </h2>

      <div
        className="mb-6 h-0.5 w-full max-w-[240px] sm:max-w-[320px] mx-auto rounded
                  bg-gradient-to-r from-[#F54900] to-[#dfaa71]
                  shadow-[0px_4px_20px_0_#F54900]"
      />

      <p
        className="mb-16 max-w-[70rem] text-lg font-light text-white sm:text-xl md:text-2xl"
      >
        Avaliações que comprovam nossa qualidade
      </p>

      {/* Cards */}
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {feedbacks.map((fb, i) => (
          <FeedbackCard
            key={i}
            {...fb}
            className="w-full max-w-[494px] mx-auto"
            style={{ minHeight: 571 }}
          />
        ))}
      </div>
    </section>
  );
}
