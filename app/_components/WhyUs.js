"use client";

import Image from "next/image";
import { Button } from "./SButton";

// Reusable Button Component

export default function WhyUs() {
  return (
    <section className="relative flex flex-col items-center text-center text-primary-100 py-20 px-6 md:px-12 overflow-hidden min-h-[60vh]">
      {/* Rotating Background */}
      <div className="absolute inset-[-10%] z-0">
        <Image
          src="/hero5.png"
          alt="Background"
          fill
          className="object-cover animate-rotateBg"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl w-full space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-primary-900">
          Why 80PLUS
        </h2>
        <div className="w-full max-w-md h-px bg-accent-500 mx-auto my-4"></div>

        <p>
          Execution-Driven Construction, Company We are builders and executors,
          not just designers or consultants.
        </p>
        <p>
          Multi-Sector Capability Integrated solutions across construction,
          energy, industry, and digital infrastructure.
        </p>
        <p>
          International Standards, HSSE, QA/QC, and project management systems
          aligned with global EPC practices.
        </p>
        <p>
          Long-Term EPC Vision, Structured growth roadmap modeled after global
          EPC leaders such as Bechtel and KEC International.
        </p>
        <p>
          Industries We Serve, Government • Corporate Organizations • Industrial
          Clients • Real Estate Developers • NGOs & Donor Agencies • Telecom
          Operators • Energy Developers
        </p>

        <Button href="/contacts">Why 80PLUS →</Button>
      </div>

      {/* Tailwind Custom Keyframes */}
      <style jsx>{`
        @keyframes rotateBg {
          0% {
            transform: rotate(0deg);
          }
          30% {
            transform: rotate(30deg);
          }
          100% {
            transform: rotate(20deg);
          }
        }
        .animate-rotateBg {
          animation: rotateBg 10s ease-in-out infinite alternate;
        }
      `}</style>
    </section>
  );
}
