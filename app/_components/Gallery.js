"use client";
import { useState } from "react";
import Image from "next/image";

export default function Gallery({ images = [], title = "Project Gallery" }) {
  const [current, setCurrent] = useState(0);

  const isFirst = current === 0;
  const isLast = current === images.length - 1;

  const prev = () => {
    if (!isFirst) setCurrent((prev) => prev - 1);
  };

  const next = () => {
    if (!isLast) setCurrent((prev) => prev + 1);
  };

  return (
    <section className="bg-white px-4 sm:px-8 md:px-12 py-12">
      {/* TITLE */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="w-16 h-[2px] bg-accent-500"></div>
        <h2 className="text-2xl md:text-3xl font-bold text-primary-900">
          {title}
        </h2>
        <div className="w-16 h-[2px] bg-accent-500"></div>
      </div>

      {/* MAIN IMAGE */}
      <div className="relative w-full h-[280px] sm:h-[380px] md:h-[520px] overflow-hidden rounded-xl shadow-lg group">
        <Image
          src={images[current]?.src}
          alt={images[current]?.caption || "Gallery Image"}
          fill
          className="object-cover transition duration-500 ease-in-out group-hover:scale-105"
        />

        {/* NAV BUTTONS */}
        <button
          onClick={prev}
          disabled={isFirst}
          className={`absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full text-white text-2xl bg-black/50 hover:bg-black/80 transition ${
            isFirst ? "opacity-40 cursor-not-allowed" : ""
          }`}
        >
          ‹
        </button>

        <button
          onClick={next}
          disabled={isLast}
          className={`absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full text-white text-2xl bg-black/50 hover:bg-black/80 transition ${
            isLast ? "opacity-40 cursor-not-allowed" : ""
          }`}
        >
          ›
        </button>

        {/* CAPTION */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-4 md:p-6 text-sm md:text-base">
          {images[current]?.caption}
        </div>

        {/* COUNT */}
        <div className="absolute bottom-2 right-4 text-white text-xs md:text-sm">
          {current + 1} / {images.length}
        </div>
      </div>

      {/* THUMBNAILS */}
      <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`relative min-w-[120px] h-[70px] md:min-w-[140px] md:h-[80px] cursor-pointer rounded-lg overflow-hidden border-2 transition ${
              index === current
                ? "border-accent-500 opacity-100"
                : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <Image src={img.src} alt="thumb" fill className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
