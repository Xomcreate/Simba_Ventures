import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaSearch,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { MdPhone, MdEmail } from "react-icons/md";
import lionhead from "../assets/lionhead.jpeg";
import { motion, AnimatePresence } from "framer-motion";
import Login from "./Login";
import Register from "./Register";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // Default to Login page
  const navbarRef = useRef(null);

  // Scroll animation
  useEffect(() => {
    const handleScroll = () => {
      if (!navbarRef.current) return;
      const rect = navbarRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      setAnimate(inView);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div ref={navbarRef} className="bg-white w-full shadow-md">
        <div className="grid grid-cols-4 items-center px-6 py-2">
          {/* Logo */}
          <div
            className={`flex flex-col items-center justify-center col-span-4 sm:col-span-1 relative 
              transition-transform duration-700 ease-out
              ${animate ? "translate-x-0 opacity-100" : "-translate-x-40 opacity-0"}
            `}
          >
            <img
              src={lionhead}
              alt="Simba Ventures Logo"
              className="w-16 h-16 object-cover rounded-full shadow-md"
            />
            <span className="text-[#02081d] font-extrabold text-2xl mt-1 font-serif tracking-wide text-center">
              Simba Ventures
            </span>

            {/* Hamburger Mobile */}
            <button
              className="sm:hidden absolute right-0 top-1/2 transform -translate-y-1/2 text-2xl text-[#02081d]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Right Side Desktop */}
          <div
            className={`hidden sm:flex col-span-3 flex-col justify-center space-y-2
              transition-transform duration-700 ease-out
              ${animate ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"}
            `}
          >
            {/* Topbar */}
            <div className="bg-[#02081d] grid grid-cols-7 items-center text-white px-4 py-1 gap-x-4 text-sm">
              <div className="col-span-1 flex items-center space-x-2">
                <MdPhone className="text-[#F97316]" size={18} />
                <span>+234 806 052 3370</span>
              </div>
              <div className="col-span-1 flex items-center space-x-2">
                <MdEmail className="text-[#F97316]" size={18} />
                <span>kennyojimba@gmail.com</span>
              </div>
              <div className="col-span-3 flex items-center bg-white rounded-xl shadow-md overflow-hidden h-10">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="px-3 py-1 text-black outline-none w-full text-sm"
                />
                <button className="bg-[#F97316] px-4 py-3">
                  <FaSearch className="text-white text-base" />
                </button>
              </div>
              <div className="col-span-1 flex items-center justify-center space-x-3 text-lg">
                <a href="#" className="hover:text-[#F97316]">
                  <FaFacebookF />
                </a>
                <a href="#" className="hover:text-[#F97316]">
                  <FaTwitter />
                </a>
                <a href="#" className="hover:text-[#F97316]">
                  <FaInstagram />
                </a>
              </div>
              <div className="col-span-1 flex items-center justify-center">
                <button
                  onClick={() => {
                    setShowAccount(true);
                    setIsLogin(true); // Open Login first
                  }}
                  className="flex items-center space-x-2 bg-white text-[#02081d] px-3 py-1 rounded-lg font-semibold hover:bg-[#F97316] hover:text-white transition duration-300 text-sm"
                >
                  <FaUser className="text-base" />
                  <span>My Account</span>
                </button>
              </div>
            </div>

            {/* Menu */}
            <div className="bg-white flex items-center justify-center h-12">
              <div className="flex flex-1 justify-center md:justify-start items-center space-x-10 md:ml-[280px]">
                <Link to="/" className="text-[#02081d] font-semibold text-lg hover:text-[#F97316]">
                  Home
                </Link>
                <Link to="/about" className="text-[#02081d] font-semibold text-lg hover:text-[#F97316]">
                  About
                </Link>
                <Link to="/shop" className="text-[#02081d] font-semibold text-lg hover:text-[#F97316]">
                  Shop
                </Link>
                <Link to="/contact" className="text-[#02081d] font-semibold text-lg hover:text-[#F97316]">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } sm:hidden`}
      >
        <div className="flex flex-col items-center justify-center mt-24 px-6 space-y-6">
          <Link to="/" className="text-[#02081d] font-semibold text-lg hover:text-[#F97316]">
            Home
          </Link>
          <Link to="/about" className="text-[#02081d] font-semibold text-lg hover:text-[#F97316]">
            About
          </Link>
          <Link to="/shop" className="text-[#02081d] font-semibold text-lg hover:text-[#F97316]">
            Shop
          </Link>
          <Link to="/contact" className="text-[#02081d] font-semibold text-lg hover:text-[#F97316]">
            Contact
          </Link>
          <button
            onClick={() => {
              setShowAccount(true);
              setIsLogin(true); // Open Login first
            }}
            className="flex items-center space-x-2 bg-white text-[#02081d] px-3 py-1 rounded-lg font-semibold hover:bg-[#F97316] hover:text-white transition duration-300"
          >
            <FaUser className="text-base" />
            <span>My Account</span>
          </button>
        </div>
      </div>

      {/* Account Modal */}
      <AnimatePresence>
        {showAccount && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6 relative overflow-hidden border border-gray-200 pointer-events-auto"
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              exit={{ y: 50 }}
            >
              {/* Close button */}
              <button
                onClick={() => setShowAccount(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-black"
              >
                <FaTimes />
              </button>

              {/* Heading and sub-text */}
              <div className="text-center mb-4">
                <h2 className="text-2xl font-bold text-[#02081d]">
                  {isLogin ? "Login" : "Register"}
                </h2>
                <p className="text-gray-600 text-sm mt-1">
                  Access your account or create one to get started.
                </p>
              </div>

              {/* Tabs */}
              <div className="flex border-b mb-4">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-2 text-center font-medium ${
                    isLogin
                      ? "border-b-2 border-[#F97316] text-[#F97316]"
                      : "text-gray-600 hover:text-[#F97316]"}
                  `}
                >
                  Login
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-2 text-center font-medium ${
                    !isLogin
                      ? "border-b-2 border-[#F97316] text-[#F97316]"
                      : "text-gray-600 hover:text-[#F97316]"}
                  `}
                >
                  Register
                </button>
              </div>

              {/* Sliding Forms */}
              <div className="relative w-full h-full overflow-hidden">
                <motion.div
                  className="flex w-[200%]"
                  animate={{ x: isLogin ? "0%" : "-50%" }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Login */}
                  <div className="w-1/2 px-2">
                    <Login setIsLogin={setIsLogin} />
                  </div>

                  {/* Register */}
                  <div className="w-1/2 px-2">
                    <Register setIsLogin={setIsLogin} />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
