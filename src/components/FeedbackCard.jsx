import quote from "../assets/quote.svg";
import { Instagram } from "lucide-react";

export function FeedbackCard({ text, handle, className = "", style }) {
  return (
    <blockquote
      className={`relative rounded-[20px] p-6 sm:p-8 text-white
                  shadow-[0_4px_10px_#F54900]/40
                  bg-[linear-gradient(180deg,rgba(245,73,0,0.8)_0%,rgba(253,156,80,0.8)_100%)]
                  ${className}`}
      style={style}
    >
      <img
        src={quote}
        alt=""
        aria-hidden="true"
        className="h-10 w-10 sm:h-[54px] sm:w-[54px]"
      />

    <p
      className="mt-4 max-w-[431px]
                font-poppins font-normal text-2xl leading-[48px]
                text-white whitespace-pre-line text-left"
    >
      {text}
    </p>


      <footer className="absolute left-[79px] top-[487px] w-[168px] h-[36px] font-poppins font-medium text-[24px] leading-[36px] text-white">
        <Instagram className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
        <cite className="not-italic">@{handle}</cite>
      </footer>
    </blockquote>
  );
}



