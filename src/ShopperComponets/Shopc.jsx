import React, { useEffect, useState, useRef } from "react";
import { FaCar, FaBicycle, FaCogs, FaUsers } from "react-icons/fa";

function ShopC() {
  // Category stats similar to AboutE style
  const stats = [
    { icon: <FaCar className="text-black text-2xl" />, number: 120, label: "CARS AVAILABLE" },
    { icon: <FaBicycle className="text-black text-2xl" />, number: 85, label: "BICYCLES AVAILABLE" },
    { icon: <FaCogs className="text-black text-2xl" />, number: 60, label: "SPARE PARTS" },
    { icon: <FaUsers className="text-black text-2xl" />, number: 5000, label: "HAPPY CUSTOMERS" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  // Animate numbers when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          startCounting();
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  const startCounting = () => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.number;
      const duration = 2000;
      const stepTime = 20;
      const step = Math.ceil(end / (duration / stepTime));

      const counter = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = start;
          return newCounts;
        });
      }, stepTime);
    });
  };

  // Featured products
  const featuredProducts = [
    { id: 1, name: "Toyota Yaris", category: "Cars", img: "/compressed/hy.webp" },
    { id: 2, name: "Mountain Bike", category: "Bicycles", img: "/compressed/bike.webp" },
    { id: 3, name: "Brembo Disc Brake", category: "Spare Parts", img: "/compressed/fur.webp" },
  ];

  return (
    <div className="w-full bg-gray-50 ">


      {/* ===== Category Stats Section ===== */}
      <div
        ref={sectionRef}
        className="bg-[#0b0f1d] py-10 px-6 w-full flex justify-center items-center"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl text-white text-center sm:text-left">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="bg-yellow-400 p-4 rounded-lg shadow-md flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h2 className="text-2xl font-bold">{counts[index].toLocaleString()}+</h2>
                <p className="text-gray-300 text-sm">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
}

export default ShopC;
