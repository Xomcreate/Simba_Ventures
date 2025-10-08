import React from "react";
import { motion } from "framer-motion";

const categories = [
  { img: "/compressed/tot.webp", label: "Toyata Pervia" },
  { img: "/compressed/rack.webp", label: "Steering Racks" },
  { img: "/compressed/ke.webp", label: "Bicycle" },
  { img: "/compressed/eng.webp", label: "Engine" },
  { img: "/compressed/ope.webp", label: "Opel Zafira" },
  { img: "/compressed/ele.webp", label: "Electric Bicycle" },
];

const fadeIn = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

function ShopA() {
  return (
    <section className="w-full min-h-screen bg-gray-50 font-inter overflow-hidden">
      {/* ===== Hero Section ===== */}
      <header className="relative w-full min-h-[50vh] bg-gradient-to-r from-[#02081d] to-[#0b1330] flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-20 rounded-lg shadow-xl">
        {/* Text Content */}
        <motion.div
          {...fadeIn}
          className="text-white space-y-3 max-w-lg z-10 mt-10 md:mt-0 text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Drive Quality. Ride Confidence.
          </h1>
          <p className="text-sm sm:text-base md:text-xl font-medium opacity-90">
            Your one-stop shop for premium cars, durable bicycles, and authentic
            spare parts.
          </p>
          <p className="text-xs sm:text-sm md:text-base text-gray-200">
            From engines to accessories — everything you need to keep your wheels running strong.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center md:justify-end items-center w-full md:w-[320px] lg:w-[400px] mt-8 md:mt-0"
        >
          <div className="relative w-64 sm:w-80 md:w-full">
            <img
              src="/compressed/peu.webp"
              alt="Car Banner"
              loading="lazy"
              className="rounded-2xl object-cover w-full h-auto max-h-[280px] sm:max-h-[340px] shadow-lg"
            />
          </div>
        </motion.div>
      </header>

     {/* ===== Categories Section ===== */}
<section className="mt-16 text-center px-4 sm:px-6 md:px-10">
  <motion.h2
    {...fadeIn}
    className="text-2xl sm:text-3xl font-bold text-[#02081d] mb-10"
  >
    Explore Our Categories
  </motion.h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 justify-center">
    {categories.map((item, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.06, y: -5 }}
        transition={{ duration: 0.25 }}
        className="bg-white rounded-xl shadow-lg hover:shadow-2xl p-5 sm:p-7 flex flex-col items-center cursor-pointer transform-gpu border border-gray-200 hover:border-[#02081d]/40 transition-all duration-300"
      >
        <img
          src={item.img}
          alt={item.label}
          loading="lazy"
          className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 object-contain mb-4 drop-shadow-md"
        />
        <p className="text-sm sm:text-base md:text-lg font-semibold text-[#02081d]">
          {item.label}
        </p>
      </motion.div>
    ))}
  </div>
</section>

    </section>
  );
}

export default ShopA;
