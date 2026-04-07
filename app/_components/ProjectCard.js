"use client";

import Image from "next/image";
import Link from "next/link";

// Instead of importing from '@/public/...'
const img1 = "/Project/R1.png";
const img2 = "/Project/G1.png";
const img3 = "/Project/HTR2.png";
const img4 = "/Project/SUB1.png";

const featuresData = [
  {
    id: "01",
    link: "/projects/millennium", // <-- add this
    image: img1,
    title: "Millennium City",
    description: "Road Construction Works– Millennium City, Kaduna",
  },
  {
    id: "02",
    link: "/projects/plot",
    image: img2,
    title: "Plot 1004, Life Camp",
    description: "Residential Development– Plot 1004, Life Camp, Abuja",
  },
  {
    id: "03",
    link: "projects/eastern",
    image: img3,
    title: "Eastern Bypass",
    description: "Residential Building Construction– Eastern Bypass, Kano",
  },
  {
    id: "04",
    link: "/projects/corridor",
    image: img4,
    title: "Eastern Bypass Corridor",
    description: "Power Substation Installation– Eastern Bypass Corridor",
  },
];

export function ProjectCards() {
  return (
    <section className="bg-white py-12 md:py-16 px-4 md:px-6">
      {/* TITLE */}
      <div className="flex items-center justify-center gap-4 mb-12">
        <span className="flex-1 h-px bg-primary-900/40"></span>

        <h2 className="text-[26px] md:text-[32px] font-bold text-primary-900 text-center">
          Features
        </h2>

        <span className="flex-1 h-px bg-primary-900/40"></span>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuresData.map((item, index) => (
          <Link href={item.link} key={index} className="group">
            <div className="bg-white rounded shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={200}
                  className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* CORNER ANGLE */}
                <div className="absolute right-[-90px] bottom-[-90px] w-[180px] h-[180px] bg-primary-900/70 rotate-45 scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-10"></div>

                {/* ARROW */}
                <div className="absolute right-4 bottom-4 w-8 h-8 rounded-full border border-white text-white flex items-center justify-center text-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-20">
                  →
                </div>
              </div>

              {/* CONTENT */}
              <div className="px-4 py-4">
                <h3 className="text-[18px] md:text-[20px] font-semibold text-primary-900 mb-2 relative">
                  {item.title}
                </h3>

                <p className="text-[14px] md:text-[15px] text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
