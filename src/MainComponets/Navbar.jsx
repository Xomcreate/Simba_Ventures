import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { MdPhone, MdEmail } from "react-icons/md";
import lionhead from "../assets/lionhead.jpeg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const navbarRef = useRef(null);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (!navbarRef.current) return;
      const rect = navbarRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      setAnimate(inView);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div ref={navbarRef} className="bg-white w-full shadow-md">
        {/* Main grid */}
        <div className="grid grid-cols-4 items-center px-6 py-2">
          {/* Logo Section */}
          <div
            className={`flex flex-col items-center justify-center col-span-4 sm:col-span-1 relative 
            transition-transform duration-700 ease-out
            ${animate ? 'translate-x-0 opacity-100' : '-translate-x-40 opacity-0'}
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

            {/* Hamburger for Mobile */}
            <button
              className="sm:hidden absolute right-0 top-1/2 transform -translate-y-1/2 text-2xl text-[#02081d]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Right Side (Desktop Only) */}
          <div
            className={`hidden sm:flex col-span-3 flex-col justify-center space-y-2
            transition-transform duration-700 ease-out
            ${animate ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}
          `}
          >
            {/* Topbar */}
            <div className="bg-[#02081d] grid grid-cols-7 items-center text-white px-4 py-1 gap-x-4 text-sm">
              <div className="col-span-1 flex items-center space-x-2">
                <MdPhone className="text-[#F97316]" size={18} />
                <span>+234 812 345 6789</span>
              </div>
              <div className="col-span-1 flex items-center space-x-2">
                <MdEmail className="text-[#F97316]" size={18} />
                <span>info@simbaventures.com</span>
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
                <a href="#" className="hover:text-[#F97316]"><FaFacebookF /></a>
                <a href="#" className="hover:text-[#F97316]"><FaTwitter /></a>
                <a href="#" className="hover:text-[#F97316]"><FaInstagram /></a>
              </div>
              <div className="col-span-1 flex items-center justify-center">
                <button className="flex items-center space-x-2 bg-white text-[#02081d] px-3 py-1 rounded-lg font-semibold hover:bg-[#F97316] hover:text-white transition duration-300 text-sm">
                  <FaUser className="text-base" />
                  <span>My Account</span>
                </button>
              </div>
            </div>

            {/* Menu Section */}
            <div className="bg-white flex items-center justify-center h-12">
              <div className="flex flex-1 justify-center items-center space-x-10">
                <Link to="/" className="text-[#02081d] font-semibold text-lg hover:text-[#F97316]">Home</Link>
                <Link to="/about" className="text-[#02081d] font-semibold text-lg hover:text-[#F97316]">About</Link>
                <Link to="/shop" className="text-[#02081d] font-semibold text-lg hover:text-[#F97316]">Shop</Link>
                <Link to="/contact" className="text-[#02081d] font-semibold text-lg hover:text-[#F97316]">Contact</Link>

                <button className="flex items-center space-x-2 bg-[#F97316] text-white px-3 py-1 rounded-lg font-semibold hover:bg-orange-500 transition duration-300">
                  <FaShoppingCart />
                  <span>Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Slide-out Menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } sm:hidden`}
      >
        <div className="flex flex-col items-center justify-center mt-24 px-6 space-y-6">
          <Link to="/" className="text-[#02081d] font-semibold text-lg hover:text-[#F97316]">Home</Link>
          <Link to="/about" className="text-[#02081d] font-semibold text-lg hover:text-[#F97316]">About</Link>
          <Link to="/shop" className="text-[#02081d] font-semibold text-lg hover:text-[#F97316]">Shop</Link>
          <Link to="/contact" className="text-[#02081d] font-semibold text-lg hover:text-[#F97316]">Contact</Link>
          <button className="flex items-center space-x-2 bg-[#F97316] text-white px-3 py-1 rounded-lg font-semibold hover:bg-orange-500 transition duration-300">
            <FaShoppingCart />
            <span>Cart</span>
          </button>
          <button className="flex items-center space-x-2 bg-white text-[#02081d] px-3 py-1 rounded-lg font-semibold hover:bg-[#F97316] hover:text-white transition duration-300">
            <FaUser className="text-base" />
            <span>My Account</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
