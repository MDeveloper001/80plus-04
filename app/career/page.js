import Hero from "@/app/_components/Hero";
import HeroImg from "@/public/services/oil-gas.png";
import { JoinPlus } from "@/app/_components/Join";
import { CareerSection } from "../_components/Career";

export const metadata = {
  title: "Career",
};
export default function Page() {
  return (
    <>
      <Hero
        className="text-primary-900"
        id="Career"
        title="Careers at 80Plus"
        showImages={true}
        centerImg={HeroImg}
        currentpage="career"
        // onReady={() => setHeroReady(true)}
      />
      <JoinPlus />
      <CareerSection />
    </>
  );
}
