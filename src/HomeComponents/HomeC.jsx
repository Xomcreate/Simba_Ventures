import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

function HomeC() {
  return (
    <div className="relative bg-[#02081d] text-white pt-16 md:pt-20 pb-28 md:pb-32 px-4 sm:px-6">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
          Everything You Need for the Road — <br className="hidden sm:block" />
          Cars, Spare Parts & Bicycles
        </h2>

        <p className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed">
          From powerful cars to reliable bicycles and genuine spare parts,{" "}
          <span className="text-[#F97316] font-semibold">Simba Ventures</span>{" "}
          is your trusted partner in keeping you moving. Premium quality, fair
          prices, and a team that puts your journey first.
        </p>

        {/* Buttons with Hover Animation */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          {/* Shop Now Button */}
          <button
            className="relative overflow-hidden bg-gradient-to-r from-[#F97316] to-[#fb923c] 
                       text-white font-semibold px-6 py-3 rounded-sm shadow-md
                       transition-all duration-500 ease-in-out
                       hover:scale-105 hover:shadow-lg group w-full sm:w-auto"
          >
            <span className="relative z-10">Shop Now</span>
            {/* Animated Overlay */}
            <span
              className="absolute inset-0 bg-[#ffcc00] 
                         transform scale-0 group-hover:scale-150 
                         rotate-0 group-hover:rotate-180
                         transition-all duration-700 ease-in-out"
            ></span>
          </button>

          {/* Phone Button */}
          <button
            className="relative overflow-hidden bg-[#ffcc00] text-black font-semibold 
                       px-6 py-3 rounded-sm flex items-center justify-center gap-2
                       shadow-md transition-all duration-500 ease-in-out
                       hover:scale-105 hover:shadow-lg group w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center gap-2">
              <FaPhoneAlt className="transition-colors duration-500 group-hover:text-white" />
              +234 806 052 3370
            </span>
            {/* Animated Overlay */}
            <span
              className="absolute inset-0 bg-gradient-to-r from-[#F97316] to-[#fb923c] 
                         transform scale-0 group-hover:scale-150 
                         rotate-0 group-hover:rotate-180
                         transition-all duration-700 ease-in-out"
            ></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeC;
