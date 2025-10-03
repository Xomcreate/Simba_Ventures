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
import { Link } from "react-router-dom"; // ✅ Import Link
import lionhead from "../assets/lionhead.jpeg";

// Fade-up animation
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// Pop animation for logo
const popLogo = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 150, damping: 12 },
  },
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
          <motion.div
            className="flex flex-col items-center mb-3"
            variants={popLogo}
          >
            <img
              src={lionhead}
              alt="Simba Ventures Logo"
              className="w-20 h-20 object-cover rounded-full shadow-md"
            />
            <h2 className="text-2xl font-bold mt-3 text-white">
              Simba Ventures
            </h2>
            <p className="text-sm text-gray-400 mt-1">Cars & Spare Parts</p>
          </motion.div>

          <p className="text-gray-300 leading-relaxed max-w-xs">
            At Simba Ventures, we bring you premium cars and genuine spare parts,
            combining quality, trust, and exceptional service. Drive your dreams
            with confidence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#F97316] uppercase mb-4 tracking-wider">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {[
              { name: "Home", path: "/" },
              { name: "Shop", path: "/shop" },
              { name: "About Us", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((item, idx) => (
              <motion.li
                key={idx}
                whileHover={{ x: 5, color: "#F97316" }}
                className="transition cursor-pointer"
              >
                <Link
                  to={item.path}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" }); // ✅ smooth scroll up
                  }}
                  className="block w-full"
                >
                  {item.name}
                </Link>
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
              <span>16/18 Industrial Road Olodi Apapa, Lagos, Nigeria</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2.5">
              <FaPhoneAlt className="text-[#F97316]" />
              <span>+234 806 052 3370</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2.5">
              <FaEnvelope className="text-[#F97316]" />
              <span>kennyojimba@gmail.com</span>
            </li>
          </ul>

          {/* Social Media */}
          <h3 className="text-lg font-semibold text-[#F97316] uppercase mb-3 tracking-wider">
            Follow Us
          </h3>
          <div className="flex gap-3 justify-center md:justify-start">
            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F97316] text-white border border-[#F97316] transition shadow-md"
            >
              <FaFacebookF />
            </motion.a>

            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F97316] text-white border border-[#F97316] transition shadow-md"
            >
              <FaTwitter />
            </motion.a>

            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F97316] text-white border border-[#F97316] transition shadow-md"
            >
              <FaInstagram />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-[#F97316] font-semibold tracking-wide">
          Simba Ventures
        </span>
        . All Rights Reserved.
      </div>
    </motion.footer>
  );
}

export default Footer;
