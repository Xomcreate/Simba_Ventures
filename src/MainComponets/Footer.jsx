import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import lionhead from "../assets/lionhead.jpeg";

// Fade-up animation
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// Pop animation for logo
const popLogo = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 150, damping: 12 } },
};

function Footer() {
  return (
    <motion.footer
      className="w-full bg-[#02081d] pt-12 pb-8 relative overflow-hidden text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      {/* Decorative circles */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#F97316] opacity-10 rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#F97316] opacity-10 rounded-full -z-10" />

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Logo & About */}
        <div className="flex flex-col items-center md:items-start">
          <motion.div className="flex flex-col items-center mb-3" variants={popLogo}>
            <img
              src={lionhead}
              alt="Simba Ventures Logo"
              className="w-20 h-20 object-cover rounded-full shadow-md"
            />
            <h2 className="text-2xl font-bold mt-3 text-white">Simba Ventures</h2>
            <p className="text-sm text-gray-400 mt-1">Cars & Spare Parts</p>
          </motion.div>

          <p className="text-gray-300 leading-relaxed max-w-xs">
            At Simba Ventures, we bring you premium cars and genuine spare parts,
            combining quality, trust, and exceptional service. Drive your dreams with confidence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#F97316] uppercase mb-4 tracking-wider">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {["Home", "Shop", "About Us", "Contact"].map((item, idx) => (
              <motion.li
                key={idx}
                whileHover={{ x: 5, color: "#F97316" }}
                className="transition cursor-pointer"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact Info & Social */}
        <div>
          <h3 className="text-lg font-semibold text-[#F97316] uppercase mb-4 tracking-wider">
            Contact Us
          </h3>
          <ul className="space-y-3 text-gray-300 text-sm mb-6">
            <li className="flex items-center justify-center md:justify-start gap-2.5">
              <FaMapMarkerAlt className="text-[#F97316]" />
              <span>835 Middle Country Rd, Selden, NY</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2.5">
              <FaPhoneAlt className="text-[#F97316]" />
              <span>(+163)-1202-0088</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2.5">
              <FaEnvelope className="text-[#F97316]" />
              <span>help24/7@gmail.com</span>
            </li>
          </ul>

          {/* Social Media */}
          <h3 className="text-lg font-semibold text-[#F97316] uppercase mb-3 tracking-wider">
            Follow Us
          </h3>
          <div className="flex gap-3 justify-center md:justify-start">
            {[FaFacebookF, FaTwitter, FaInstagram].map((Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ scale: 1.2 }}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F97316] text-white border border-[#F97316] transition shadow-md"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-[#F97316] font-semibold tracking-wide">Simba Ventures</span>.
        All Rights Reserved.
      </div>
    </motion.footer>
  );
}

export default Footer;
