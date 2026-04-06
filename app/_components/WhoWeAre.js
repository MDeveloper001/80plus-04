"use client";

import Title from "./Title";

export default function WhoWeAre() {
  const lineVariant = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

  return (
    <section className="bg-white text-primary-900 py-20 px-6 md:px-12 flex flex-col items-center gap-12">
      {/* Heading with animated lines */}
      <Title>Who We Are</Title>
      {/* Paragraphs */}
      <div className="flex flex-col items-center text-center gap-6 max-w-4xl">
        <p className="text-base md:text-lg leading-relaxed text-gray-800">
          80PLUS International Limited is a multi-sector construction,
          engineering, and infrastructure development company delivering
          high-quality solutions across construction & infrastructure, energy &
          power systems, industrial construction, oil & gas support works, and
          ICT infrastructure.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-gray-800">
          We execute projects with a commitment to quality, safety, innovation,
          and long-term value creation, supporting Africa’s urbanization,
          industrial growth, and energy transition.
        </p>
      </div>
    </section>
  );
}
