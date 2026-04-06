import Hero from "@/app/_components/Hero";
import AboutSection from "@/app/_components/About";
import Leadership from "@/app/_components/Leader";
import Value from "@/app/_components/Value";
import Mission from "@/app/_components/Mission";
import Hero2 from "@/public/hero2.png";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        id="about-hero"
        title="About 80PLUS "
        showImages={true}
        centerImg={Hero2}
        currentpage="about"
        // onReady={() => setHeroReady(true)}
      />
      <AboutSection />
      <Leadership />
      <Value />
      <Mission />
    </>
  );
}
