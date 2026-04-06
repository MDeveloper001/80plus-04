import Hero from "@/app/_components/Hero";
import BoardImage from "@/public/directors/boardDirector.png";
import { DirectorS } from "@/app/_components/DirectorS";

export const metadata = {
  title: "About Directors",
};
export default function Directors() {
  return (
    <>
      <Hero
        id="directors"
        title="Boad of Directors"
        showImages={true}
        backLink="/"
        centerImg={BoardImage}
      />
      <DirectorS />
    </>
  );
}
