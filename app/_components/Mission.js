"use client";

import Image from "next/image";
import Link from "next/link";
import Team from "@/public/mission/Team.png";
import { Button } from "./SButton";

const Accent = "text-primary-900";

export default function Mission() {
  return (
    <section className="bg-[#f3f6f9] py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* IMAGE (TOP on mobile, RIGHT on desktop) */}
        <div className="relative w-full h-[260px] sm:h-[320px] md:h-[420px] overflow-hidden order-1 lg:order-2 group">
          <Image
            src={Team} // move image to public/mission/
            alt="Construction leadership on site"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* subtle overlay */}
          <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-primary-900/0 transition"></div>
        </div>

        {/* CONTENT */}
        <div className="order-2 lg:order-1">
          {/* Title */}
          <h2 className="text-[22px] sm:text-[26px] md:text-[30px] font-bold text-primary-900">
            Our Mission
          </h2>

          {/* Line */}
          <div className="w-12 h-0.5 bg-accent-500 mt-3 mb-5"></div>

          {/* Text */}
          <p className="text-[14px] md:text-[15px] text-gray-700 leading-relaxed mb-4">
            To design, build, and deliver world-class construction and
            infrastructure solutions using skilled talent, modern technologies,
            and globally recognized standards.
          </p>

          <p className="text-[14px] md:text-[15px] text-gray-700 leading-relaxed mb-6">
            We execute projects safely, efficiently, and sustainably—creating
            long-term value for clients, empowering our workforce, and
            contributing to communities across Africa and beyond.
          </p>

          {/* LIST */}
          <ul className="space-y-2 text-[14px] md:text-[15px] text-gray-700 mb-6">
            <li>
              <span className="text-accent-500">✓</span> Client-focused delivery
            </li>
            <li>
              <span className="text-accent-500">✓</span> International safety
              standards
            </li>
            <li>
              <span className="text-accent-500">✓</span> Continuous innovation
            </li>
            <li>
              <span className="text-accent-500">✓</span> Strong governance
            </li>
          </ul>

          {/* BUTTON */}
          <Button href="/projects">Our Projects →</Button>
        </div>
      </div>
    </section>
  );
}
