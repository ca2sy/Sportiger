import { FeedbackCard } from '../components/FeedbackCard.jsx';

const feedbacks = [
  {
    text: 'Amei minha bolsa ❤️\nótima qualidade da para levar bastante coisa dentro dela 😍 perfeita ❤️❤️❤️❤️',
    handle: 'jeruza.pessoa',
  },
  {
    text: 'Não estava na programação em comprar hoje no shopping, mas ao adquirir achei espetacular.\nExcelente 👏👏👏😄',
    handle: '_shirley.pessoa_',
  },
  {
    text: 'Amei a funcionalidade. E já adquiri a minha pochete. É sucesso absoluto 👏👏👏 😍',
    handle: 'celianrocha',
  },
];

export function Feedbacks() {
  return (
    <section
      id="feedbacks"
      className="relative z-30 mt-0 scroll-mt-[110px] bg-[#101820]/40 px-4 py-12 text-center sm:px-6 lg:px-10"
    >
      {/* Header */}
      <h2 className="font-poppins mb-3 text-[48px] leading-tight font-medium text-white">
        FeedBacks
      </h2>

      <div className="mx-auto mb-6 h-0.5 w-full max-w-[240px] rounded bg-gradient-to-r from-[#F54900] to-[#dfaa71] shadow-[0px_4px_20px_0_#F54900] sm:max-w-[320px]" />
      <p className="mx-auto mb-16 max-w-[70rem] text-center text-lg font-light text-white sm:text-xl md:text-2xl">
        Avaliações que comprovam nossa qualidade
      </p>

      {/* Cards */}
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {feedbacks.map((fb, i) => (
          <FeedbackCard
            key={i}
            {...fb}
            className="mx-auto w-full max-w-[494px]"
            style={{ minHeight: 571 }}
          />
        ))}
      </div>
    </section>
  );
}
