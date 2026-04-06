import { DirectorCard } from "@/app/_components/DirectorCard";
import D1 from "@/public/directors/d1.png";
import D2 from "@/public/directors/d2.png";
import D3 from "@/public/directors/d3.png";

export function DirectorS() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-16 py-12 md:py-16 bg-gray-100">
      <DirectorCard
        image={D1}
        name="Abubakar Tanimu"
        position="Founder & Managing Director"
        role="B.Tech Civil Engineering | HND Architecture"
        link="/about/directors/d1"
      />

      <DirectorCard
        image={D2}
        name="Engr. Ibrahim Almustapha"
        position="Executive Director – Engineering & Projects"
        role="COREN-Licensed Civil & Structural Engineer"
        link="/about/directors/d2"
      />

      <DirectorCard
        image={D3}
        name="QS Abdulaziz Sani Gora, RQS"
        position="Executive Director – Commercial & Finance"
        role="Registered Quantity Surveyor"
        link="/about/directors/d3"
      />
    </section>
  );
}
