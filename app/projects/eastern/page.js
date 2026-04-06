import Gallery from "@/app/_components/Gallery";
import Hero from "@/app/_components/Hero";
import { ProjectInfo } from "@/app/_components/ProjectInfo";
import { ProjectScope } from "@/app/_components/ProjectScope";
import Eastern from "@/public/Eastern-bypass/HTR1.png";
import scopeImg from "@/public/Eastern-bypass/HTR2.png";

import HTR1 from "@/public/Eastern-bypass/HTR1.png";
import HTR2 from "@/public/Eastern-bypass/HTR2.png";
import HTR3 from "@/public/Eastern-bypass/HTR3.png";
import HTR4 from "@/public/Eastern-bypass/HTR4.png";
import HTR5 from "@/public/Eastern-bypass/HTR5.png";
import HTR6 from "@/public/Eastern-bypass/HTR6.png";
import HTR7 from "@/public/Eastern-bypass/HTR7.png";
import HTR8 from "@/public/Eastern-bypass/HTR8.png";

const words = "Residential Building Construction – Eastern Bypass, Kano, Done";

const images = [
  {
    src: HTR2,
    caption: words,
  },
  {
    src: HTR3,
    caption: words,
  },
  {
    src: HTR4,
    caption: words,
  },
  {
    src: HTR5,
    caption: words,
  },
  {
    src: HTR6,
    caption: words,
  },
  {
    src: HTR7,
    caption: words,
  },
  {
    src: HTR8,
    caption: words,
  },
  {
    src: HTR1,
    caption: words,
  },
];
export const metadata = {
  title: "Project Easten",
};

export default function EasternByPass() {
  return (
    <>
      <Hero
        id="Eastern"
        title="Eastern By Pass"
        showImages={true}
        backLink="/"
        centerImg={Eastern}
      />
      <ProjectInfo
        client="Residential Building Construction"
        location="Eastern Bypass, Kano"
        businessSegment="Infrastructure Development"
        industry="building Construction"
        coordinates={[10.5167, 7.4165]}
      />
      <ProjectScope
        title=" Scope"
        subtitle="Multi-Unit Residential Development"
        description1=" Construction of multiple residential units involving foundations,
          reinforced concrete frames, blockwork, suspended slabs, roofing
          framework, and external works."
        description2="The project required close site coordination, material management, and
          adherence to structural and architectural specifications."
        image={scopeImg}
        reverse={true}
      />
      <Gallery title="Project Gallery" images={images} />
    </>
  );
}
