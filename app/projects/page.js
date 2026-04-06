import Hero from "../_components/Hero";
import { ProjectHome } from "@/app/_components/ProjectTitle";
import { ProjectCards } from "@/app/_components/ProjectCard";

export const metadata = {
  title: "Projects",
};
export default function Page() {
  return (
    <>
      <Hero
        id="Services & Expertise"
        title="Energy & Power Systems"
        showImages={true}
        centerImg="/hero4.png"
        currentpage="projects"
        // onReady={() => setHeroReady(true)}
      />
      <ProjectHome />
      <ProjectCards />
    </>
  );
}
