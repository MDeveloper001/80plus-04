import Hero from "@/app/_components/Hero";
import IntroService from "@/app/_components/IntroService";
import ServicesGrid from "../_components/Services";

export const metadata = {
  title: "Services",
};
export default function Page() {
  return (
    <>
      <Hero
        id="Services & Expertise"
        title="Services & Expertise"
        showImages={true}
        centerImg="/hero3.png"
        currentpage="services"
        // onReady={() => setHeroReady(true)}
      />
      <IntroService />
      <ServicesGrid />
    </>
  );
}
