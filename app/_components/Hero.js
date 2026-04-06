"use client";

import Image from "next/image";

export default function Hero({
  title,
  subtitle,
  showImages = true,
  id = "",
  centerImg,
  currentpage,
}) {
  return (
    <section
      id={id}
      className="relative w-full overflow-hidden font-montserrat min-h-[75vh] md:min-h-[85vh]"
      style={{
        background: `linear-gradient(
          135deg,
          #003366 0%,
          #003366 35%,
          #6097cfc4 35%,
          #6097cfc4 45%,
          #f5f8fc 45%,
          #f5f8fc 100%
        )`,
      }}
    >
      {/* IMAGE VERSION */}
      {showImages && (
        <div className="relative w-[92%] md:w-[88%] h-[55vh] sm:h-[60vh] md:h-[70vh] mx-auto mt-8 md:mt-12 flex items-center justify-center group">
          <Image
            src={centerImg || "/hero1.png"}
            alt="hero"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />

          <h2
            className={`
              absolute z-10
              left-4 sm:left-6 md:left-10
              bottom-4 sm:bottom-6 md:bottom-10
              text-white font-extrabold
              max-w-[90%] md:max-w-130
              leading-tight
              text-[22px] sm:text-[28px] md:text-[42px] lg:text-[56px]
              drop-shadow-[0_6px_25px_rgba(0,0,0,0.65)]
              ${
                currentpage === "career"
                  ? "text-primary-900 drop-shadow-none"
                  : ""
              }
            `}
          >
            {title}
          </h2>
        </div>
      )}

      {/* TEXT ONLY */}
      {!showImages && (
        <div className="flex flex-col items-center text-center px-4 py-10">
          <h2 className="text-primary-900 font-extrabold text-[28px] md:text-[48px]">
            {title}
          </h2>
        </div>
      )}

      {/* SUBTITLE */}
      {subtitle && (
        <p className="relative z-10 text-center text-black/80 max-w-3xl mx-auto px-4 mt-6 md:mt-10 text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed animate-[fadeUp_1s_ease-out]">
          {subtitle}
        </p>
      )}

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
