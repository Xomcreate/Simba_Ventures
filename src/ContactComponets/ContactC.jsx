import React from "react";

function ContactC() {
  return (
    <>
      {/* Contact Section */}
      <div
        className="h-[70vh] w-full bg-cover bg-center flex items-center justify-center relative px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: "url('/compressed/side.webp')",
        }}
      >
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Contact Content (directly on bg) */}
        <div className="relative z-10 w-full max-w-2xl text-white">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3 text-center drop-shadow-lg">
            Drive Your Dream with Us 🚗
          </h2>
          <p className="text-gray-200 mb-6 sm:mb-8 text-base sm:text-lg text-center leading-relaxed drop-shadow">
            Whether you’re buying, upgrading, or just curious — we’ll guide you
            every step of the way. Drop us a message and our car experts will
            reach out shortly.
          </p>

          {/* Contact Form */}
          <form className="space-y-4 sm:space-y-6">
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full bg-white/10 border border-white/30 text-white placeholder-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-[#F97316]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/10 border border-white/30 text-white placeholder-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-[#F97316]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Tell us about the car you’re looking for..."
                className="w-full bg-white/10 border border-white/30 text-white placeholder-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-[#F97316]"
              ></textarea>
            </div>

            {/* Fancy Button with Spin Animation */}
            <button
              type="submit"
              className="relative overflow-hidden bg-gradient-to-r from-[#F97316] to-[#fb923c] 
                         text-white w-full py-3 rounded-lg font-semibold text-lg 
                         shadow-md transition-all duration-500 
                         hover:scale-105 hover:shadow-xl
                         group"
            >
              <span className="relative z-10">Send Message</span>

              {/* Spin overlay effect */}
              <span
                className="absolute inset-0 bg-gradient-to-r from-[#02081d] to-[#02081d] 
                           transform scale-0 group-hover:scale-150 
                           rotate-0 group-hover:rotate-180 
                           transition-all duration-700 ease-in-out rounded-lg"
              ></span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactC;
