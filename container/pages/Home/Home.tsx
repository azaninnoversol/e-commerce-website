import React from "react";

// page section
import Hero from "./Hero";
import TodaySale from "./TodaySale";
import CategoriesSection from "./CategoriesSection";

function Home() {
  return (
    <>
      <Hero />
      <TodaySale />
      <CategoriesSection />
    </>
  );
}

export default React.memo(Home);
