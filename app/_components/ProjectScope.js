"use client";
import Image from "next/image";

export function ProjectScope({
  title = "Scope",
  subtitle,
  description1,
  description2,
  image,
  reverse = false,
}) {
  return (
    <section
      className={`grid md:grid-cols-2 min-h-[70vh] bg-white ${
        reverse
          ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1"
          : ""
      }`}
    >
      {/* TEXT CONTENT */}
      <div className="px-6 sm:px-8 md:px-20 py-8 sm:py-12 md:py-16 text-primary-100">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-3">
          {title}
        </h2>

        <div className="w-20 h-1 bg-accent-500 mb-7"></div>

        <h4 className="text-lg md:text-[18px] font-semibold text-primary-900 mb-4">
          {subtitle}
        </h4>

        <p className="text-base md:text-[16px] text-gray-700 leading-relaxed mb-4">
          {description1}
        </p>

        <p className="text-base md:text-[16px] text-gray-700 leading-relaxed">
          {description2}
        </p>
      </div>

      {/* IMAGE */}
      <div className="w-full h-[320px] md:h-full overflow-hidden">
        <Image
          src={image}
          alt={subtitle || "Project Image"}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
