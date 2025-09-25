import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

function ContactB() {
  return (
    <>
      <div className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {/* Card 1 - Address */}
          <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-2xl transition duration-300">
            <div className="flex justify-center mb-6 relative group">
              {/* Outer ring with hover collapse effect */}
              <span
                className="absolute w-20 h-20 rounded-full border-2 border-[#F97316] 
                flex items-center justify-center transition-all duration-500 
                group-hover:w-16 group-hover:h-16 group-hover:border-[#02081d]"
              ></span>
              {/* Inner circle */}
              <div className="w-16 h-16 bg-[#F97316] rounded-full flex items-center justify-center relative z-10 translate-y-2 transition-colors duration-500 group-hover:bg-[#02081d]">
                <FaMapMarkerAlt className="text-[#02081d] text-2xl group-hover:text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#02081d] mb-3">
              Our Office Address
            </h3>
            <p className="text-gray-600 leading-relaxed">
              835 Middle Country Rd, Selden, NY 11784, United States
            </p>
          </div>

          {/* Card 2 - Call */}
          <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-2xl transition duration-300">
            <div className="flex justify-center mb-6 relative group">
              <span
                className="absolute w-20 h-20 rounded-full border-2 border-[#F97316] 
                flex items-center justify-center transition-all duration-500 
                group-hover:w-16 group-hover:h-16 group-hover:border-[#02081d]"
              ></span>
              <div className="w-16 h-16 bg-[#F97316] rounded-full flex items-center justify-center relative z-10 translate-y-2 transition-colors duration-500 group-hover:bg-[#02081d]">
                <FaPhoneAlt className="text-[#02081d] text-2xl group-hover:text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#02081d] mb-3">
              Call Us Anytime
            </h3>
            <p className="text-gray-600">help24/7@gmail.com</p>
            <p className="text-gray-600">(+163)-1202-0088</p>
          </div>

          {/* Card 3 - Work Time */}
          <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-2xl transition duration-300">
            <div className="flex justify-center mb-6 relative group">
              <span
                className="absolute w-20 h-20 rounded-full border-2 border-[#F97316] 
                flex items-center justify-center transition-all duration-500 
                group-hover:w-16 group-hover:h-16 group-hover:border-[#02081d]"
              ></span>
              <div className="w-16 h-16 bg-[#F97316] rounded-full flex items-center justify-center relative z-10 translate-y-2 transition-colors duration-500 group-hover:bg-[#02081d]">
                <FaClock className="text-[#02081d] text-2xl group-hover:text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#02081d] mb-3">
              Official Work Time
            </h3>
            <p className="text-gray-600">9:00am - 6:00pm (Monday - Friday)</p>
            <p className="text-gray-600">Saturday & Sunday Closed</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactB;
