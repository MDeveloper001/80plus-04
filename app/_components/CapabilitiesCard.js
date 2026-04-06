"use client";

import Image from "next/image";
import Link from "next/link";

const capabilities = [
  {
    id: "construction",
    title: "Construction & Infrastructure",
    img: "/capabilities/construction.png",
  },
  {
    id: "energy",
    title: "Energy & Power Systems",
    img: "/capabilities/energy.png",
  },
  {
    id: "industrial",
    title: "Industrial Construction & Structural",
    img: "/capabilities/industrial.png",
  },
  {
    id: "oil-gas",
    title: "Oil & Gas Construction Support",
    img: "/capabilities/oil-gas.png",
  },
  {
    id: "ict",
    title: "ICT & Telecom Infrastructure",
    img: "/capabilities/ict.png",
  },
  {
    id: "logistics",
    title: "Logistics & Technical Services",
    img: "/capabilities/logistics.png",
  },
];

export default function Capabilities() {
  return (
    <section className="bg-primary-900 py-20 px-6 md:px-12">
      {/* Section Title */}
      <h2 className="flex items-center justify-center gap-4 md:gap-6 text-3xl md:text-4xl font-bold text-white mb-16">
        <span className="h-0.5 bg-accent-500/70 flex-1 animate-scaleX"></span>
        Our Services
        <span className="h-0.5 bg-accent-500/70 flex-1 animate-scaleX"></span>
      </h2>

      {/* Capabilities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {capabilities.map((cap) => (
          <Link
            key={cap.id}
            href={`/services#${cap.id}`}
            className="group relative flex flex-col cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative w-full h-56 md:h-64 lg:h-72 overflow-hidden">
              <Image
                src={cap.img}
                alt={cap.title}
                fill
                sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 50vw,
         33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Angled Background */}
              <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-primary-900/70 rotate-45 scale-90 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"></div>

              {/* Arrow */}
              <div className="absolute right-4 bottom-4 w-10 h-10 border border-white rounded-full flex items-center justify-center text-white text-2xl opacity-0 translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                &rsaquo;
              </div>
            </div>

            {/* Title */}
            <span className="mt-4 text-lg md:text-xl font-semibold text-white">
              {cap.title}
            </span>
          </Link>
        ))}
      </div>

      {/* Tailwind Animation */}
      <style jsx>{`
        @keyframes scaleX {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }
        .animate-scaleX {
          animation: scaleX 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
