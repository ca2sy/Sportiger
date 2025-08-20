import quote from '../assets/quote.svg';
import { Instagram } from 'lucide-react';

export function FeedbackCard({ text, handle, className = '', style }) {
  return (
    <blockquote
      className={`relative rounded-[20px] bg-[linear-gradient(180deg,rgba(245,73,0,0.8)_0%,rgba(253,156,80,0.8)_100%)] p-6 text-white shadow-[0_4px_10px_#F54900]/40 sm:p-8 ${className}`}
      style={style}
    >
      <img
        src={quote}
        alt=""
        aria-hidden="true"
        className="h-10 w-10 sm:h-[54px] sm:w-[54px]"
      />

      <p className="font-poppins mt-4 max-w-[431px] text-left text-2xl leading-[48px] font-normal whitespace-pre-line text-white">
        {text}
      </p>

      <footer className="font-poppins absolute top-[487px] right-[39px] left-[39px] flex items-center gap-3 text-[24px] leading-[36px] font-medium text-white">
        <Instagram
          className="h-8 w-8 shrink-0"
          strokeWidth={2.2}
          aria-hidden="true"
        />
        <cite className="block min-w-0 overflow-hidden text-ellipsis whitespace-nowrap not-italic">
          @{handle}
        </cite>
      </footer>
    </blockquote>
  );
}
