"use client";

import Image from "next/image";
import Link from "next/link";
import Leader from "@/public/directors/d1.png";

export default function Leadership() {
  return (
    <section className="bg-[#f3f6f9] py-12 md:py-16 px-4 md:px-6 font-montserrat">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">
        {/* IMAGE (LEFT) */}
        <div className="relative w-full h-60 sm:h-75 md:h-90 flex items-center justify-center overflow-hidden group">
          <Image
            src={Leader}
            alt="Leadership at 80PLUS"
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* CONTENT (RIGHT) */}
        <div className="flex flex-col justify-center">
          {/* Title */}
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-primary-900 mb-2">
            Leadership
          </h2>

          {/* Line */}
          <div className="w-12 h-0.5 bg-accent-500 mb-4"></div>

          {/* Text */}
          <p className="text-[14px] md:text-[16px] leading-relaxed text-gray-700 mb-3">
            At 80Plus, our leadership is committed to building infrastructure
            that supports Africa’s growth. Guided by an independent board of
            directors, we ensure strong governance and accountability.
          </p>

          <p className="text-[14px] md:text-[16px] leading-relaxed text-gray-700">
            Our management team leads with purpose, delivering reliable
            infrastructure solutions that create jobs, strengthen communities,
            and support long-term economic development across Africa.
          </p>

          {/* ACTION */}
          <div className="mt-5">
            <Link
              href="/about/directors"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold border-2 border-primary-900 text-primary-900 hover:bg-accent-500 transition-all duration-300"
            >
              Board of Directors
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
