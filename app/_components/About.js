"use client";

export default function AboutSection() {
  return (
    <section className="bg-[#f5f8fc] py-6 px-4 md:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-start">
        {/* LEFT → TITLE */}
        <div>
          <h2 className="flex items-center gap-3 text-[22px] sm:text-[26px] md:text-[30px] font-bold text-primary-900 leading-tight">
            We design and deliver impactful <br />
            infrastructure solutions across Africa.
          </h2>
          {/* 
          

          {/* Divider */}
          <span className="block w-10 h-0.5 bg-accent-500 mt-3"></span>
        </div>

        {/* RIGHT → TEXT */}
        <div className="space-y-3">
          <p className="text-[14px] md:text-[15px] leading-relaxed text-gray-700">
            80PLUS International Limited is a Nigerian construction,
            engineering, and infrastructure development company providing
            end-to-end solutions across transportation infrastructure,
            buildings, energy systems, industrial facilities, oil & gas support
            works, and digital infrastructure.
          </p>

          <p className="text-[14px] md:text-[15px] leading-relaxed text-gray-700">
            Founded with a vision to contribute meaningfully to Africa’s
            development, we combine strong technical capability, disciplined
            construction management, and international best practices to deliver
            projects that stand the test of time.
          </p>
        </div>
      </div>
    </section>
  );
}
