"use client";

import Image from "next/image";
import { Button } from "./SButton";

import constructionImg from "@/public/services/construction.png";
import energyImg from "@/public/services/energy.png";
import industrialImg from "@/public/services/industrial.png";
import oilGasImg from "@/public/services/oil-gas.png";
import telecomImg from "@/public/services/ict.png";
import logisticsImg from "@/public/services/logistics.png";

const services = [
  {
    id: "construction",
    title: "Construction & Infrastructure",
    desc: "We execute civil and building construction projects that support mobility, urban development, and essential services.",
    list: [
      "Road construction and rehabilitation",
      "Drainage and flood control systems",
      "Bridges and culverts",
      "Highways and urban access roads",
      "Earthworks and site development",
      "Reinforced concrete structures",
      "Construction of residential, commercial, and institutional buildings",
      "Water supply and treatment works",
    ],
    img: constructionImg,
    link: "/projects/millennium",
    reverse: false,
  },
  {
    id: "Energy",
    title: "Energy & Power Systems",
    desc: "Reliable and sustainable power solutions for industries, communities, and institutions.",
    list: [
      "Solar power plants and mini-grids",
      "Electrical distribution networks",
      "Rural electrification projects",
      "Public lighting infrastructure",
      "Industrial power systems",
      "Street lighting and public power infrastructurees",
    ],
    img: energyImg,
    link: "/projects/corridor",
    reverse: false,
  },

  {
    id: "industrial",
    title: "Industrial Construction & Structural Works",
    desc: " Construction of facilities that drive industrial growth and logistics efficiency.",
    list: [
      "Warehouses and logistics hubs",
      "Factories and industrial buildings",
      "Steel structures and sheds",
      "Precast and in-situ concrete works",
      "Tank foundations and industrial plinths",
    ],
    img: industrialImg,
    link: "/projects",
    reverse: true,
  },
  {
    id: "oil-gas",
    title: "Oil & Gas Construction Supports",
    desc: "  Civil and structural construction support for midstream and downstream operations.",
    list: [
      "Pipeline civil works",
      "Industrial foundations",
      "Site preparation and access roads",
      "ROW clearing and earthworks",
      "Mechanical and structural supports",
    ],
    img: oilGasImg,
    link: "/projects",
    reverse: true,
  },
  {
    id: "ict",
    title: "ICT & Telecom Infrastructure",
    desc: "Construction services supporting reliable digital connectivity.",
    list: [
      "Telecom tower foundations",
      "BTS site construction",
      "Fibre trenching and ducting",
      "Data centre civil works",
      "Equipment bases and platforms",
    ],
    img: telecomImg,
    link: "/projects",
    reverse: false,
  },

  {
    id: "logistics",
    title: "Logistics & Technical Services",
    desc: "Supporting project execution through equipment, materials, manpower, and logistics.",
    list: [
      "Construction equipment leasing",
      "Material supply and procurement",
      "Technical manpower support",
      "Project logistics and site support",
    ],
    img: logisticsImg,
    link: "/projects",
    reverse: true,
  },

  // 👉 Continue same pattern for others (industrial, oil-gas, ict, logistics)
];

export default function ServicesGrid() {
  return (
    <section className="w-full">
      {services.map((service, i) => (
        <div
          key={service.id}
          className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px]"
        >
          {/* TEXT */}
          <div
            id={service.id}
            className={`
              bg-[#f7f9fc]
              px-6 md:px-10 lg:px-[70px]
              py-10 md:py-12 lg:py-[80px]
              flex flex-col justify-center
              ${i % 2 === 0 ? "lg:order-1" : "lg:order-2"}
            `}
          >
            <h2 className="text-[26px] md:text-[32px] font-bold text-primary-900 mb-5">
              {service.title}
            </h2>

            <p className="text-[15px] md:text-[16px] text-gray-700 leading-[1.7] mb-5">
              {service.desc}
            </p>

            <ul className="pl-5 space-y-2 mb-6 list-disc">
              {service.list.map((item, idx) => (
                <li
                  key={idx}
                  className="text-[14px] md:text-[15px] text-gray-700"
                >
                  {item}
                </li>
              ))}
            </ul>

            {service.link && (
              <Button href={service.link} className="text-center">
                Project →
              </Button>
            )}
          </div>

          {/* IMAGE */}
          <div
            className={`
              relative w-full min-h-[260px] lg:min-h-full
              ${i % 2 === 0 ? "lg:order-2" : "lg:order-1"}
            `}
          >
            <Image
              src={service.img}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      ))}
    </section>
  );
}
