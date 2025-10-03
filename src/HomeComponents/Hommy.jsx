import React from "react";
import { FaTools, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";

function Hommy() {
  return (
    <div className="w-full bg-gradient-to-br from-[#fdfdfd] via-[#fefefe] to-[#f7f7f7] py-16 px-6 md:px-10 lg:px-16">
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        
        {/* LEFT IMAGES */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative flex flex-col items-start"
        >
          {/* Glow blob */}
          <div className="absolute -top-6 -left-6 w-56 h-56 bg-[#F97316] opacity-30 rounded-full -z-10 blur-3xl"></div>

          {/* Main Image */}
          <div className="relative">
            <img
              src="/compressed/hp.webp"
              alt="Car Sales"
              loading="lazy"
              className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-700"
            />

            {/* Overlapping Image */}
            <motion.img
              src="/compressed/spare.webp"
              alt="Spare Parts"
              loading="lazy"
              className="w-32 h-36 sm:w-40 sm:h-44 lg:w-44 lg:h-48 object-cover rounded-xl shadow-lg absolute -top-8 -right-6 border-4 border-white"
              initial={{ opacity: 0, scale: 0.9, y: -10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            />
          </div>

          {/* Bottom Image */}
          <div className="relative mt-8 lg:-mt-[50px] lg:ml-[140px] w-72 h-44">
            <img
              src="/compressed/cycle.webp"
              alt="Bicycle Sales"
              loading="lazy"
              className="w-full h-full object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6 text-center lg:text-left"
        >
          {/* Heading */}
          <div>
            <h4 className="text-[#F97316] font-bold uppercase tracking-widest italic">
              Trusted Mobility Solutions
            </h4>
            <h2 className="text-2xl md:text-3xl font-extrabold mt-2 text-[#02081d] leading-snug">
              Elevating Cars, Parts & Bicycles with Quality You Can Rely On
            </h2>
          </div>

          {/* Paragraphs */}
          <p className="text-gray-600 leading-relaxed">
            At <span className="font-semibold text-[#F97316]">Simba Ventures</span>, 
            we’re redefining mobility with a handpicked selection of modern vehicles, 
            authentic spare parts, and durable bicycles. Whether you’re upgrading to 
            a luxury car, replacing critical components, or embracing eco-friendly 
            transport, we bring reliability to your doorstep.
          </p>
          <p className="text-gray-600 leading-relaxed">
            With unmatched quality, competitive prices, and nationwide reach, we are more 
            than just a marketplace — we’re your lifelong partner for smooth journeys 
            and confident rides, backed by a team that truly understands your needs.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="w-14 h-14 bg-[#02081d] text-white flex items-center justify-center rounded-full text-2xl hover:bg-[#F97316] transition-colors duration-500 shadow-md">
                <FaTools />
              </div>
              <p className="font-semibold text-[#02081d]">
                100% Genuine Spare Parts <br /> & Accessories
              </p>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="w-14 h-14 bg-[#02081d] text-white flex items-center justify-center rounded-full text-2xl hover:bg-[#F97316] transition-colors duration-500 shadow-md">
                <FaClock />
              </div>
              <p className="font-semibold text-[#02081d]">
                Nationwide Support <br /> 7 Days a Week
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hommy;
