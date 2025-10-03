import React from "react";

function ContactA() {
  return (
    <>
      <div className="relative w-full h-[60vh] flex items-center justify-center">
        {/* Hero Background Image */}
        <img
          src="/compressed/spur.webp"
          alt="Luxury Car"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay with your dark brand color */}
        <div className="absolute inset-0 bg-[#02081d]/70"></div>

        {/* Hero Text */}
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide">
            <span className="bg-gradient-to-r from-[#F97316] via-yellow-400 to-white bg-clip-text text-transparent">
              Let’s Drive Connection
            </span>
          </h1>
          <p className="mt-5 text-lg md:text-2xl font-medium opacity-90 max-w-2xl mx-auto">
            Have questions about our cars, parts, or services?  
            We’re just a message away—let’s keep you moving forward.
          </p>
        </div>
      </div>
    </>
  );
}

export default ContactA;
