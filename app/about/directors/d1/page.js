import DirectorDetail from "@/app/_components/DirectorDetail";
import directorImg from "@/public/directors/d1.png";

export default function Director1() {
  return (
    <>
      <DirectorDetail
        name="Abubakar Tanimu"
        title="Founder & Managing Director"
        roles={["B.Tech Civil Engineering", "HND Architecture"]}
        image={directorImg}
        bio={[
          "Abubakar Tanimu is the Founder and Managing Director of 80PLUS International Limited, providing overall strategic leadership and executive direction for the company’s engineering, construction, infrastructure, and energy operations.",

          "He holds a Bachelor of Technology in Civil Engineering and a Higher National Diploma in Architecture—a rare and highly complementary combination that enables him to bridge architectural design intent with engineering rigor, constructability, cost efficiency, and lifecycle performance.",

          "As Managing Director, Abubakar is responsible for corporate strategy, market positioning, project selection, governance framework development, and key stakeholder relationships.",

          "His leadership style is defined by discipline, accountability, and long-term value creation. Under his direction, 80PLUS International Limited is positioned as a credible, scalable, and professionally governed EPC company.",
        ]}
      />
    </>
  );
}
