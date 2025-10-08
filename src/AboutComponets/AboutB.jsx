import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaHeadset } from "react-icons/fa";
import { Link } from "react-router-dom"; // <-- Added for linking

// Variants for left section (staggered children)
const leftVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// Variants for each left item (zoom + fade)
const itemVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8 } },
};

// Right section variant (fade + slide)
const rightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 1 } },
};

function AboutB() {
  return (
    <div className="relative mt-5 bg-white w-full min-h-[80vh] grid grid-cols-1 md:grid-cols-2 gap-6 font-inter px-6 md:px-16 py-10 overflow-hidden">
      
      {/* LEFT (images + badge) */}
      <motion.div
        className="order-1 md:order-1 col-span-1 relative flex flex-col items-start pl-6 pb-[180px] sm:pb-[220px] md:pb-0"
        variants={leftVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        {/* Top image */}
        <motion.div
          className="w-[80%] sm:w-[75%] md:w-[65%] h-[220px] sm:h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-lg z-10"
          variants={itemVariants}
        >
          <img
            src="/compressed/hello.webp"
            alt="Top Car"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Bottom image */}
        <motion.div
          className="absolute left-[20%] sm:left-[18%] md:left-[20%] top-[150px] sm:top-[200px] md:top-[250px] w-[72%] sm:w-[72%] md:w-[70%] h-[260px] sm:h-[320px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl border-8 border-white z-20"
          variants={itemVariants}
        >
          <img
            src="/compressed/hi.webp"
            alt="Bottom Car"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Badge */}
        <motion.div
          className="absolute left-[58%] sm:left-[58%] md:left-[59%] top-[120px] sm:top-[140px] md:top-[150px] z-30"
          variants={itemVariants}
        >
          <div className="w-36 h-36 md:w-44 md:h-44 rounded-full border-8 border-[#F97316] bg-white flex flex-col items-center justify-center shadow-lg">
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#02081d]">1k+</h3>
            <p className="text-xs md:text-sm font-semibold text-gray-700 text-center leading-tight mt-1">
              BEST CAR <br /> DEALER AWARD
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* RIGHT (text content) */}
      <motion.div
        className="order-2 md:order-2 col-span-1 flex items-start justify-start pr-0 md:pr-6 pt-8 md:pt-14"
        variants={rightVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        <div className="max-w-full md:max-w-md w-full">
          {/* Small Tag */}
          <h2 className="text-sm tracking-widest font-semibold text-[#F97316] mb-1 uppercase text-center md:text-left">
            About Our Company
          </h2>
          <p className="text-xs md:text-sm text-gray-500 mb-3 text-center md:text-left">
            Driving trust, quality, and excellence in every deal we make.
          </p>

          {/* Bigger heading with styled Simba Ventures */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#02081d] mb-4 leading-snug text-center md:text-left">
            Welcome to{" "}
            <span className="font-extrabold text-[#F97316] font-['Playfair_Display'] text-2xl md:text-4xl">
              Simba Ventures
            </span>{" "}
            – Your Trusted Car & Spare Parts Dealer
          </h3>

          {/* Short paragraph */}
          <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed text-center md:text-left">
            From brand-new cars to genuine spare parts, Simba Ventures is your
            one-stop hub for quality, affordability, and unmatched customer
            service.
          </p>

          {/* Section Tag with Icon */}
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <FaHeadset className="text-[#F97316] text-2xl md:text-3xl" />
            <h4 className="text-base md:text-xl font-semibold text-[#02081d]">
              We’re Here When You Need Us
            </h4>
          </div>

          {/* Services */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 text-sm md:text-base text-center md:text-left">
            {["Car Sales", "Spare Parts", "Top Brands", "Trusted Dealer"].map(
              (item, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-center md:justify-start gap-2 text-gray-700 font-medium"
                >
                  <FaCheckCircle className="text-[#F97316]" />
                  {item}
                </li>
              )
            )}
          </ul>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start">
            <Link
              to="/shop" // <-- Shop Cars page
              className="w-[55%] sm:w-auto px-6 py-3 rounded-full bg-[#F97316] text-white font-semibold shadow-md hover:bg-[#02081d] hover:text-white transition text-base mx-auto md:mx-0 text-center"
            >
              Shop Cars
            </Link>

            <Link
              to="/shop" // <-- Spare Parts page (or same shop page)
              className="w-[55%] sm:w-auto px-6 py-3 rounded-full border border-gray-300 font-medium hover:border-[#F97316] hover:text-[#F97316] transition text-base mx-auto md:mx-0 text-center"
            >
              Find Spare Parts
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutB;
