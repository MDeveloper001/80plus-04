"use client";

import Image from "next/image";
import ValueImg from "@/public/value/Usman.png";

const Accent = "text-primary-900";

export default function Value() {
  return (
    <section className="bg-[#f7f9fc] py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* IMAGE → FIRST on mobile, RIGHT on desktop */}
        <div className="order-1 lg:order-2 relative w-full h-65 sm:h-80 md:h-105 overflow-hidden group">
          <Image
            src="/value/Usman.png"
            alt="Construction team at work"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-primary-900/0 transition"></div>
        </div>

        {/* TEXT → SECOND on mobile, LEFT on desktop */}
        <div className="order-2 lg:order-1">
          <h2 className="text-[22px] sm:text-[26px] md:text-[30px] font-bold text-primary-900">
            Purpose & Values
          </h2>

          <div className="w-12 h-0.5 bg-accent-500 mt-3 mb-5"></div>

          <p className="text-[14px] md:text-[15px] text-gray-700 leading-relaxed mb-6">
            To become one of Africa’s most trusted and influential construction
            and infrastructure companies.
          </p>

          <ul className="space-y-3 text-[14px] md:text-[15px] text-gray-700">
            <li>
              <strong className="text-primary-900">Integrity</strong> – Ethical,
              transparent delivery
            </li>
            <li>
              <strong className="text-primary-900">Excellence</strong> – Quality
              without compromise
            </li>
            <li>
              <strong className="text-primary-900">Safety</strong> – Zero-harm
              culture
            </li>
            <li>
              <strong className="text-primary-900">Innovation</strong> – Smarter
              construction
            </li>
            <li>
              <strong className="text-primary-900">Sustainability</strong> –
              Responsible development
            </li>
            <li>
              <strong className="text-primary-900">Accountability</strong> –
              Ownership of outcomes
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
