import ContactHero from "@/app/_components/ContactHero";
import Mss from "@/app/_components/Mss";
import Map from "@/app/_components/Map";

export const metadata = {
  title: "Contect",
};
export default function Page() {
  return (
    <>
      <ContactHero />

      <Map />
      <Mss />
    </>
  );
}
