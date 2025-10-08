import React, { useState } from "react";

function ShopB() {
  const categories = ["All", "Cars", "Bicycles", "Spare Parts"];

  const allProducts = [
    { id: 1, img: "/compressed/hy.webp", category: "Cars", name: "Toyota Yaris" },
    { id: 2, img: "/compressed/car2.webp", category: "Cars", name: "Golf 3 Salon" },
    { id: 3, img: "/compressed/be.webp", category: "Cars", name: "Mercedes Benz C300" },
    { id: 4, img: "/compressed/hon.webp", category: "Cars", name: "Honda Accord 2022" },
    { id: 5, img: "/compressed/fur.webp", category: "Spare Parts", name: "Brembo Disc Brake" },
    { id: 6, img: "/compressed/fir.webp", category: "Spare Parts", name: "Automatic Car Engine" },
    { id: 7, img: "/compressed/bat.webp", category: "Spare Parts", name: "Car Battery" },
    { id: 8, img: "/compressed/set.webp", category: "Spare Parts", name: "Headlight Set" },
    { id: 9, img: "/compressed/bike.webp", category: "Bicycles", name: "Mountain Bike" },
    { id: 10, img: "/compressed/roadbike.webp", category: "Bicycles", name: "Road Bike" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showContact, setShowContact] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      {/* ===== Page Title ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#02081d] mb-2">
          Gear Up: Explore Cars, Bikes & Auto Essentials
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Browse our latest cars, bikes, and spare parts — find what drives you!
        </p>
      </div>

      {/* ===== Main Content ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Left Column: Categories */}
        <div className="md:w-1/5 bg-white rounded-2xl shadow-md p-4 sm:p-6 sticky top-20 h-fit md:flex-shrink-0">
          <h3 className="text-lg sm:text-xl font-bold text-[#02081d] mb-4">Categories</h3>
          <ul className="flex flex-row md:flex-col gap-2 md:gap-3 overflow-x-auto md:overflow-visible">
            {categories.map((cat) => (
              <li
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`cursor-pointer px-3 sm:px-4 py-2 rounded-lg font-semibold transition-all flex-shrink-0 md:flex-shrink-auto ${
                  selectedCategory === cat
                    ? "bg-[#F97316] text-white shadow-md"
                    : "hover:bg-[#F97316]/20 hover:text-[#F97316]"
                }`}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Products */}
        <div className="md:w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="relative bg-white rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col items-center text-center transition-transform transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <span className="absolute top-3 left-3 bg-white text-[#F97316] text-xs font-semibold px-2 py-1 rounded-full border border-[#F97316] shadow-sm">
                NEW
              </span>

              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                className="w-32 sm:w-44 md:w-48 h-32 sm:h-44 md:h-48 object-contain mb-3 sm:mb-5"
              />

              <p className="text-sm text-gray-500 mb-1">{p.category}</p>
              <h4 className="font-bold text-md sm:text-lg text-[#02081d]">{p.name}</h4>

              <button
                onClick={() => {
                  setSelectedProduct(p);
                  setShowContact(true);
                }}
                className="mt-3 sm:mt-4 px-4 sm:px-6 py-2 bg-[#F97316] text-white font-bold rounded-full hover:bg-orange-600 transition duration-300 text-sm sm:text-base"
              >
                CALL FOR PRICE
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Seller Info Popup */}
      {showContact && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
          <div className="bg-white border border-gray-300 rounded-lg p-6 w-full max-w-sm shadow-xl relative pointer-events-auto">
            <h3 className="text-xl font-bold text-[#02081d] mb-4">
              Seller Information for {selectedProduct?.name}
            </h3>
            <p className="text-gray-700 mb-1">
              📞 Phone: <span className="font-semibold">+234 806 052 3370</span>
            </p>
            <p className="text-gray-700 mb-1">
              📧 Email: <span className="font-semibold">kennyojimba@gmail.com</span>
            </p>
            <p className="text-gray-700">
              💬 WhatsApp: <span className="font-semibold">+234 806 052 3370</span>
            </p>
            <button
              onClick={() => setShowContact(false)}
              className="mt-4 w-full px-4 py-2 bg-[#F97316] text-white rounded-md hover:bg-orange-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShopB;
