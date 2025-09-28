import React from "react";
import { motion } from "framer-motion";

function AboutC() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="relative bg-gray-50 w-full">
      <div className="relative flex flex-col lg:flex-row items-start gap-8 px-6 md:px-16 py-12 lg:py-16">

        {/* LEFT - Video with slant */}
        <motion.div
          className="relative w-full lg:w-1/2 h-[500px] lg:h-[600px] md:min-h-[400px]"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <video
            src="/images/vid.mp4"
            className="object-cover w-full h-full clip-slant-image rounded-xl shadow-lg"
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Play button overlay */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            variants={fadeInScale}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="bg-[#F97316] rounded-full p-5 cursor-pointer shadow-xl hover:scale-110 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT - Text + Cards (Shorter than video) */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-start text-center lg:text-left max-h-[450px] overflow-hidden"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            className="text-[#F97316] text-sm font-semibold uppercase mb-2 tracking-wider lg:text-base"
            variants={fadeInUp}
          >
            Why Choose Us
          </motion.p>

          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-[#02081d] mb-4 leading-snug"
            variants={fadeInUp}
          >
            We Got You Covered <br /> Good Cars, Good People Guarantee
          </motion.h2>

          <motion.p
            className="text-gray-600 mb-6 text-base lg:text-lg leading-relaxed"
            variants={fadeInUp}
          >
            Uniquely reintermediate distinctive niche markets whereas interoperable
            infomediaries. Completely negotiate seamless partnerships via
            cutting-edge expertise. Rapidiously reintermediate cooperative
            expertise rather than high-quality growth strategies.
          </motion.p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              className="p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300 text-center lg:text-left"
              variants={fadeInScale}
            >
              <div className="flex items-center justify-center lg:justify-start mb-3">
                <div className="bg-[#FFF4E6] text-[#F97316] p-3 rounded-full text-xl">
                  ⭐
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#02081d]">
                Wide Range of Brands
              </h3>
              <p className="text-gray-600 text-sm">
                Dynamically redefine flexible core competencies with synergistic solutions.
              </p>
            </motion.div>

            <motion.div
              className="p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300 text-center lg:text-left"
              variants={fadeInScale}
            >
              <div className="flex items-center justify-center lg:justify-start mb-3">
                <div className="bg-[#FFF4E6] text-[#F97316] p-3 rounded-full text-xl">
                  💲
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#02081d]">
                Get Reasonable Price
              </h3>
              <p className="text-gray-600 text-sm">
                Reasonably redefine flexible core competencies with synergistic solutions.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutC;
