import Hero from "@/app/_components/Hero";
import { ProjectInfo } from "@/app/_components/ProjectInfo";
import { ProjectScope } from "@/app/_components/ProjectScope";
import CorridorImage from "@/public/services/energy.png";
import scopeImg from "@/public/PImage/SUB2.png";
import Gallery from "@/app/_components/Gallery";

import SUB1 from "@/public/PImage/SUB1.png";
import SUB2 from "@/public/PImage/SUB2.png";

const images = [
  {
    src: SUB2,
    caption:
      "Supply and installation of a 200kVA, 11/0.415kV distribution transformer substation",
  },
  {
    src: CorridorImage,
    caption: "Easten By Pass",
  },
  {
    src: SUB1,
    caption:
      "The installation was carried out in accordance with power utility standards and safety regulations.",
  },
];

export const metadata = {
  title: "Project millemium",
};

export default function Corridor() {
  return (
    <>
      <Hero
        id="sub"
        title="Eastern Bypass Corridor"
        showImages={true}
        backLink="/"
        centerImg={CorridorImage}
      />
      <ProjectInfo
        client="Power Substation Installation"
        location="Eastern Bypass Corridor"
        businessSegment="Electrical Infrastructure"
        industry="Power Distribution"
        coordinates={[10.5167, 7.4165]}
      />
      <ProjectScope
        title=" Scope"
        subtitle=" Electrical Infrastructure & Power Distribution"
        description1="   Supply and installation of a 200kVA, 11/0.415kV distribution
          transformer substation, including high-tension concrete poles,
          conductors, insulators, earthing system, protection equipment, and
          commissioning support."
        description2=" The installation was carried out in accordance with power utility
          standards and safety regulations."
        image={scopeImg}
        reverse={true}
      />
      <Gallery title="Project Gallery" images={images} />
    </>
  );
}
