import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function HomeB() {
  // Product Data (no price displayed)
  const allProducts = [
    { id: 1, img: "/images/hy.jpeg", category: "Cars", name: "Toyota Yaris" },
    { id: 2, img: "/images/car2.jpeg", category: "Cars", name: "Golf 3 Salon" },
    { id: 3, img: "/images/car.jpg", category: "Cars", name: "Mercedes Benz C300" },
    { id: 4, img: "/images/car4.jpg", category: "Cars", name: "Honda Accord 2022" },
    { id: 5, img: "/images/fur.jpeg", category: "Spare Parts", name: "Brembo Disc Brake" },
    { id: 6, img: "/images/fir.jpeg", category: "Spare Parts", name: "Automatic Car Engine" },
    { id: 7, img: "/images/part3.jpg", category: "Spare Parts", name: "Car Battery" },
    { id: 8, img: "/images/part4.jpg", category: "Spare Parts", name: "Headlight Set" },
    { id: 9, img: "/images/bb.jpeg", category: "Bicycles", name: "Canyon Mountain Bike" },
    { id: 10, img: "/images/gi.jpeg", category: "Bicycles", name: "Giant Road Bike" },
    { id: 11, img: "/images/ee.jpeg", category: "Bicycles", name: "Electric Bicycle" },
    { id: 12, img: "/images/lol.jpeg", category: "Bicycles", name: "Hybrid Bike" },
  ];

  const categories = ["ALL", "Cars", "Spare Parts", "Bicycles"];

  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [startIndex, setStartIndex] = useState(0);

  // Modal state
  const [showContact, setShowContact] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filter products by category
  const filteredProducts =
    selectedCategory === "ALL"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  const visibleProducts = filteredProducts.slice(startIndex, startIndex + 4);

  const handleNext = () => {
    if (startIndex + 4 < filteredProducts.length) {
      setStartIndex(startIndex + 1);
    } else {
      setStartIndex(0);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    } else {
      setStartIndex(Math.max(filteredProducts.length - 4, 0));
    }
  };

  // Auto-slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [startIndex, filteredProducts]);

  return (
    <div className="w-full py-12 bg-white relative">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center text-[#02081d] mb-6">
        Our Popular Products
      </h2>

      {/* Category Filters */}
      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setStartIndex(0);
            }}
            className={`px-5 py-2 border text-sm font-semibold rounded-md transition duration-300 ${
              selectedCategory === cat
                ? "bg-[#F97316] text-white border-[#F97316]"
                : "border-gray-300 text-[#02081d] hover:bg-[#F97316] hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Cards with Carousel */}
      <div className="relative flex items-center justify-center px-12">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-2 md:left-6 bg-white border border-gray-300 rounded-full p-3 shadow-md hover:bg-gray-100 z-10"
        >
          <FaArrowLeft className="text-[#F97316]" />
        </button>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-[90%]">
          {visibleProducts.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center relative hover:shadow-xl transition duration-300"
            >
              {/* NEW Badge */}
              <span className="absolute top-3 left-3 bg-white text-[#F97316] text-xs font-semibold px-3 py-1 rounded-full border border-[#F97316]">
                NEW
              </span>

              {/* Product Image */}
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                className="w-56 h-56 object-contain mb-4"
              />

              {/* Text Info */}
              <p className="text-sm text-gray-500">{p.category}</p>
              <h4 className="font-bold text-lg text-[#02081d]">{p.name}</h4>

              {/* Call for Price Button */}
              <button
                onClick={() => {
                  setSelectedProduct(p);
                  setShowContact(true);
                }}
                className="mt-4 px-5 py-2 bg-[#F97316] text-white font-bold rounded-md hover:bg-orange-600 transition duration-300"
              >
                CALL FOR PRICE
              </button>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-2 md:right-6 bg-white border border-gray-300 rounded-full p-3 shadow-md hover:bg-gray-100 z-10"
        >
          <FaArrowRight className="text-[#F97316]" />
        </button>
      </div>

      {/* Seller Info Popup */}
      {showContact && (
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 rounded-lg p-6 w-[90%] max-w-sm shadow-xl z-50">
          <h3 className="text-xl font-bold text-[#02081d] mb-4">
            Seller Information for {selectedProduct?.name}
          </h3>
          <p className="text-gray-700">
            📞 Phone: <span className="font-semibold">+234 806 052 3370</span>
          </p>
          <p className="text-gray-700">
            📧 Email: <span className="font-semibold">kennyojimba@gmail.com</span>
          </p>
          <p className="text-gray-700">
            💬 WhatsApp: <span className="font-semibold">+234 806 052 3370</span>
          </p>
          <button
            onClick={() => setShowContact(false)}
            className="mt-4 px-4 py-2 bg-[#F97316] text-white rounded-md hover:bg-orange-600"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default HomeB;
