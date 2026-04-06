import Hero from "@/app/_components/Hero";
import { ProjectInfo } from "@/app/_components/ProjectInfo";
import { ProjectScope } from "@/app/_components/ProjectScope";
import scopeImg from "@/public/MCImage/Road2.png";
import HeroImg from "@/public/MCImage/Road1.png";
import Gallery from "@/app/_components/Gallery";

import Road1 from "@/public/MCImage/Road1.png";
import Road2 from "@/public/MCImage/Road2.png";
import Road3 from "@/public/MCImage/Road3.png";
import Road4 from "@/public/MCImage/Road4.png";
import Road5 from "@/public/MCImage/Road5.png";
import Road6 from "@/public/MCImage/Road6.png";

const images = [
  {
    src: Road1,
    caption: " Internal Estate Road Infrastructure , Road Compeleted",
  },
  {
    src: Road2,
    caption: " Internal Estate Road Infrastructure, When it on Process",
  },
  {
    src: Road3,
    caption: "Road Intrustructure, When The Asplalt is taking place",
  },
  {
    src: Road4,
    caption: "When The Road Was Not Properly compacted.",
  },
  {
    src: Road5,
    caption: "Well Street",
  },
  {
    src: Road6,
    caption: "Done",
  },
];

export const metadata = {
  title: "Project Millemium",
};

export default function Millennium() {
  return (
    <>
      <Hero
        id="Millennium"
        title="Millennium City"
        showImages={true}
        backLink="/"
        centerImg={HeroImg}
      />
      <ProjectInfo
        client="Road Construction Works"
        location="Millennium City, Kaduna"
        businessSegment="Infrastructure Development"
        industry="Road Construction"
        coordinates={[10.5167, 7.4165]}
      />
      <ProjectScope
        title=" Scope"
        subtitle="Internal Estate Road Infrastructure"
        description1=" Execution of comprehensive internal road works including subgrade
          preparation, lateritic improvement, crushed stone base course
          placement, asphalt paving, mechanical compaction, and final finishing."
        description2="  Works were delivered in compliance with engineering specifications,
          traffic safety requirements, and established quality control
          standards."
        image={scopeImg}
        reverse={true}
      />
      <Gallery title="Project Gallery" images={images} />
    </>
  );
}
