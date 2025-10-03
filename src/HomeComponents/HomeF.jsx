import React from "react";
import { FaThumbsUp, FaHeadset, FaLayerGroup, FaPhoneAlt } from "react-icons/fa";

function HomeF() {
  const features = [
    { icon: <FaThumbsUp size={24} />, text: "100% Customer Satisfaction" },
    { icon: <FaLayerGroup size={24} />, text: "Help and access is our mission" },
    { icon: <FaLayerGroup size={24} />, text: "100% quality Car Accessories" },
    { icon: <FaPhoneAlt size={24} />, text: "24/7 Support for Clients" },
  ];

  return (
    <div className="bg-orange-500 text-white py-6">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between gap-6 px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center md:flex-row md:items-center text-center md:text-left gap-3 bg-orange-400/20 px-4 py-3 rounded-md shadow-md"
          >
            <div>{feature.icon}</div>
            <div className="text-sm md:text-base font-medium">{feature.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeF;
