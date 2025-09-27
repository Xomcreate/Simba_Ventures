import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function AboutA() {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    // Lazy load the background image
    const img = new Image();
    img.src = "/images/taxi.jpg"; // Ensure this image exists
    img.onload = () => setBgLoaded(true);
  }, []);

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden font-inter">
      
      {/* Background Image */}
      <div
        className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-700 ${
          bgLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundImage: bgLoaded ? "url('/images/taxi.jpg')" : "" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#02081d]/70"></div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center md:text-left max-w-3xl px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 drop-shadow-md">
          Simba Ventures: Own the Road, Own the Moment
        </h1>
        <p className="text-gray-200 text-base md:text-lg mb-5 drop-shadow-sm max-w-xl">
          From sleek rides to genuine parts, we fuel your journey with quality, trust, and style. Every drive becomes a story worth telling.
        </p>
        <button className="bg-[#F97316] hover:bg-white hover:text-[#F97316] text-white font-medium px-5 py-2.5 rounded-full transition shadow-md text-sm md:text-base">
          Explore the Journey
        </button>
      </motion.div>

      {/* Decorative Circles */}
      <div className="absolute -bottom-10 right-10 w-28 h-28 rounded-full bg-[#F97316] opacity-20 blur-3xl"></div>
      <div className="absolute top-8 left-5 w-16 h-16 rounded-full bg-[#F97316] opacity-20 blur-2xl"></div>
    </div>
  );
}

export default AboutA;
