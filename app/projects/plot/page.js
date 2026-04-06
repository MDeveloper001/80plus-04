import Hero from "@/app/_components/Hero";
import { ProjectInfo } from "@/app/_components/ProjectInfo";
import { ProjectScope } from "@/app/_components/ProjectScope";
import scopeImg from "@/public/PlotImage/G2.png";
import PlotImage from "@/public/PlotImage/G1.png";
import Gallery from "@/app/_components/Gallery";

import G1 from "@/public/PlotImage/G1.png";
import G2 from "@/public/PlotImage/G2.png";
import G3 from "@/public/PlotImage/G3.png";
import G4 from "@/public/PlotImage/G4.png";
import G5 from "@/public/PlotImage/G5.png";
import G6 from "@/public/PlotImage/G5.png";
import G7 from "@/public/PlotImage/G6.png";
import G8 from "@/public/PlotImage/G7.png";

const words = "Ongoing Residential Development – Plot 1004, Life Camp, Abuja";
const images = [
  {
    src: G1,
    caption: words,
  },
  {
    src: G2,
    caption: words,
  },
  {
    src: G3,
    caption: words,
  },
  {
    src: G4,
    caption: words,
  },
  {
    src: G5,
    caption: words,
  },
  {
    src: G6,
    caption: words,
  },
  {
    src: G7,
    caption: words,
  },
  {
    src: G8,
    caption: words,
  },
];

export const metadata = {
  title: "Project Plot",
};

export default function Plot() {
  return (
    <>
      <Hero
        id="plot"
        title="Plot 1004, Life Camp"
        showImages={true}
        backLink="/"
        centerImg={PlotImage}
      />
      <ProjectInfo
        client="Residential Development"
        location="Plot 1004, Life Camp"
        businessSegment=" Construction Development"
        industry=" Structural & Building"
        coordinates={[10.5167, 7.4165]}
      />
      <ProjectScope
        title=" Scope"
        subtitle="Structural & Building Works"
        description1="Ongoing execution of residential structural works including
          foundations, reinforced concrete frames, blockwork, suspended slabs,
          and integrated plumbing and electrical provisions."
        description2="The project emphasizes quality workmanship, structural integrity, and
          phased construction management."
        image={scopeImg}
        reverse={true}
      />
      <Gallery title="Project Gallery" images={images} />
    </>
  );
}
