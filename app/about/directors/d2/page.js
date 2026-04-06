import DirectorDetail from "@/app/_components/DirectorDetail";
import directorImg from "@/public/directors/d2.png";

export default function Director1() {
  return (
    <>
      <DirectorDetail
        name="Engr. Ibrahim Almustapha, R73435"
        title="Executive Director – Engineering & Projects"
        roles={["COREN-Licensed Engineere"]}
        image={directorImg}
        bio={[
          "Engr. Ibrahim Almustapha is a COREN-licensed Civil and StructuraEngineer and serves as Executive Director – Engineering & Projects at 80PLUS International Limited. He leads the company’s engineering, construction, and project delivery functions.",

          "He holds a Bachelor of Technology in Civil Engineering and a Higher National Diploma in Architecture—a rare and highly complementary combination that enables him to bridge architectural design intent with engineering rigor, constructability, cost efficiency, and lifecycle performance.",

          "He brings extensive hands-on experience in infrastructure and building projects, with responsibility for project planning, execution, quality assurance, health and safety management, and technical risk control. His role ensures that all projects are delivered in compliance with approved designs, specifications, regulatory requirements, and industry standards.",

          " Engr. Ibrahim provides technical leadership across the project lifecycle, coordinating multidisciplinary teams, managing site execution, and resolving complex construction challenges. His approach emphasizes safety, build quality, programme control, and operational efficiency.",
        ]}
      />
    </>
  );
}
