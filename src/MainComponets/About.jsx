import React from "react";
import AboutA from "../AboutComponets/AboutA";
import AboutB from "../AboutComponets/AboutB";
import AboutC from "../AboutComponets/AboutC";
import AboutD from "../AboutComponets/AboutD";
import AboutE from "../AboutComponets/AboutE";
import HomeF from "../HomeComponents/HomeF";

function About() {
  return (
    <div className="relative">
      <AboutA />
      <AboutB />
      <AboutC />

      {/* Responsive: float on large, stack on small */}
      <div
        className="
          flex justify-center
          lg:-mt-40    /* float only on large screens */
          md:-mt-20
          sm:mt-0      /* stack normally on small screens */
          mt-0
          relative z-20
        "
      >
        <AboutE />
      </div>

      <AboutD />
      <HomeF/>
    </div>
  );
}

export default About;
