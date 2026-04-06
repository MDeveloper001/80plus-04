"use client";

import { useState } from "react";
import Hero from "@/app/_components/Hero";
import WhoWeAre from "@/app/_components/WhoWeAre";
import Capabilities from "@/app/_components/CapabilitiesCard";
import WhyUs from "@/app/_components/WhyUs";

export default function Page() {
  // const [heroReady, setHeroReady] = useState(false);

  return (
    <>
      <Hero
        id="home"
        title="Engineering Africa’s Future"
        subtitle="Delivering world-class construction, infrastructure, energy, and industrial solutions for complex projects across Nigeria and Africa."
        showImages={true}
        onReady={() => setHeroReady(true)}
      />
      <WhoWeAre />
      <Capabilities />
      <WhyUs />
    </>
  );
}
