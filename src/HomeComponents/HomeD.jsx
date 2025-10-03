import React from "react";
import { FaCar, FaBicycle, FaTools } from "react-icons/fa"; // React Icons

function HomeD() {
  const services = [
    {
      title: "Spare Parts",
      description:
        "High-quality spare parts for all vehicle types — from brake pads to engines. Durable, reliable, and built to keep you moving.",
      icon: <FaTools className="text-3xl" />,
      image: "/compressed/ww.webp",
    },
    {
      title: "Cars",
      description:
        "Browse our wide collection of cars — affordable, luxury, and everything in between. Drive your dream with confidence.",
      icon: <FaCar className="text-3xl" />,
      image: "/compressed/gg.webp",
    },
    {
      title: "Bicycles",
      description:
        "From mountain bikes to city rides, our bicycles combine comfort and performance for every kind of rider.",
      icon: <FaBicycle className="text-3xl" />,
      image: "/compressed/mm.webp",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300 group"
        >
          {/* Top Icon & Text */}
          <div className="flex flex-col items-center text-center p-6">
            <div
              className="flex justify-center items-center w-20 h-20 rounded-full mb-4 shadow-md bg-gray-100 
              transition duration-300 group-hover:bg-[#F97316] group-hover:scale-105 hover:bg-[#02081d]"
            >
              {/* Icon turns white on hover */}
              <div className="text-[#F97316] group-hover:text-white transition duration-300">
                {service.icon}
              </div>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {service.title}
            </h2>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Bottom Image */}
          <div className="relative">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            {/* Overlay with CTA */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition">
              <button className="bg-[#F97316] text-white px-4 py-2 rounded-lg shadow-md hover:bg-orange-600">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeD;
