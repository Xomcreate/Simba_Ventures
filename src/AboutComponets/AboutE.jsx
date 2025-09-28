import React, { useEffect, useState, useRef } from "react";
import { FaCar, FaUserTie, FaStar, FaUserCheck } from "react-icons/fa";

function AboutE() {
  const stats = [
    { icon: <FaCar className="text-black text-2xl" />, number: 27600, label: "CARS FOR SALE" },
    { icon: <FaUserTie className="text-black text-2xl" />, number: 1600, label: "VERIFIED DEALERS" },
    { icon: <FaStar className="text-black text-2xl" />, number: 25600, label: "HAPPY CUSTOMERS" },
    { icon: <FaUserCheck className="text-black text-2xl" />, number: 18600, label: "ACTIVE USERS" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  // Observer to detect when AboutE enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          startCounting();
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 } // trigger when 30% is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  // Function to count up numbers
  const startCounting = () => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.number;
      const duration = 2000; // 2 seconds
      const stepTime = 20; // ms
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

  return (
    <div
      ref={sectionRef}
      className="
        bg-[#0b0f1d] 
        py-10 px-6 
        w-full flex justify-center items-center 
        h-auto sm:h-auto md:h-[20vh] lg:h-[25vh] 
        sm:mx-0 md:mx-0 lg:ml-[180px] lg:mr-[60px]
      "
    >
      <div
        className="
          grid 
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
          gap-8 w-full max-w-6xl text-white 
          text-center sm:text-left
        "
      >
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-4"
          >
            <div className="bg-yellow-400 p-4 rounded-lg shadow-md flex items-center justify-center">
              {item.icon}
            </div>
            <div>
              <h2 className="text-2xl font-bold">
                {counts[index].toLocaleString()}+
              </h2>
              <p className="text-gray-300 text-sm">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutE;
