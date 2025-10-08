import React from "react";
import { FaTools, FaPhoneAlt, FaStore } from "react-icons/fa";
import { Link } from "react-router-dom"; // <-- make sure you have react-router-dom installed

function HomeA() {
  const heroItems = [
    {
      title: "Drive Into Excellence",
      desc: "Whether it’s luxury or everyday rides, our cars are built to move you forward in comfort and style. Explore a collection that turns every journey into an experience.",
      img: "/compressed/blak.webp",
    },
    {
      title: "Power in Every Part",
      desc: "Keep your engine roaring and your ride smooth with spare parts that blend durability, affordability, and reliability — engineered for long-lasting performance.",
      img: "/compressed/spare.webp",
    },
    {
      title: "Pedal Into Adventure",
      desc: "From rugged mountain terrains to smooth city streets, discover bicycles that give you freedom, fun, and fitness for every type of journey.",
      img: "/compressed/bic.webp",
    },
    {
      title: "Style Your Ride",
      desc: "Turn heads everywhere you go with premium car accessories. Functional, stylish, and affordable — everything you need to make your ride uniquely yours.",
      img: "/compressed/view.webp",
    },
    {
      title: "Your Auto Hub",
      desc: "Cars, bikes, parts, and more — all in one trusted marketplace. Save time and shop confidently knowing you’re getting the best for your vehicle.",
      img: "/compressed/road.webp",
    },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gray-50 font-inter flex flex-col lg:flex-row gap-6 p-4 lg:p-8">
      {/* HERO */}
      <div
        key={currentIndex}
        className="w-full lg:w-[78%] relative text-white flex flex-col justify-center items-center text-center px-6 py-10 rounded-xl shadow-lg overflow-hidden transition-all duration-700 ease-in-out min-h-[40vh] sm:min-h-[50vh] lg:min-h-[70vh]"
        style={{
          backgroundImage: `url(${heroItems[currentIndex].img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 leading-tight drop-shadow-lg tracking-wide uppercase bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
            {heroItems[currentIndex].title}
          </h2>
          <p className="text-sm sm:text-base mb-6 text-gray-200 font-light">
            {heroItems[currentIndex].desc}
          </p>
          <Link
            to="/shop"
            className="bg-[#F97316] px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-lg shadow-md hover:bg-orange-500 transition"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE ACTIONS */}
      <div className="w-full lg:w-[22%] flex flex-col gap-4">
        {/* Call to Order */}
        <Link
          to="/contact"
          className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center text-center hover:shadow-lg hover:border hover:border-[#F97316] transition"
        >
          <FaPhoneAlt className="text-[#F97316] text-lg mb-2" />
          <span className="font-medium text-[#02081d] text-sm sm:text-base">
            Call to Order
          </span>
        </Link>

        {/* Request a Quote */}
        <Link
          to="/contact"
          className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center text-center hover:shadow-lg hover:border hover:border-[#F97316] transition"
        >
          <FaTools className="text-[#F97316] text-lg mb-2" />
          <span className="font-medium text-[#02081d] text-sm sm:text-base">
            Request a Quote
          </span>
        </Link>

        {/* Shop Now */}
        <Link
          to="/shop"
          className="bg-[#F97316] text-white text-center p-4 sm:p-5 rounded-lg cursor-pointer font-semibold shadow-md hover:bg-orange-500 transition text-sm sm:text-base"
        >
          Shop Now
        </Link>

        {/* Trusted Store Card */}
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 flex flex-col items-center text-center mt-4 flex-1 lg:h-[70vh]">
          <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-[#F97316] shadow-md mb-4">
            <FaStore className="text-white text-xl sm:text-2xl" />
          </div>
          <h4 className="font-bold text-[#02081d] text-base sm:text-lg mb-2">
            Your Trusted Store
          </h4>
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
            From cars and bikes to spare parts and accessories, we bring
            everything together in one reliable marketplace. Enjoy
            unmatched quality, competitive prices, and customer-first service.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeA;
