import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";

function AboutD() {
  const testimonials = [
    {
      name: "Alex Franklin",
      text: "The service was phenomenal! Their team went above and beyond to help me find the perfect car. They listened carefully to my preferences, offered expert advice, and guided me through the entire process smoothly. I felt valued and supported every step of the way."
    },
    {
      name: "Imon Hossain",
      text: "Absolutely amazing experience! From the first inquiry to final delivery, everything was seamless. The staff were attentive, knowledgeable, and genuinely cared about ensuring I got exactly what I wanted. I highly recommend them to anyone looking for quality service."
    },
    {
      name: "Sarah Johnson",
      text: "Exceptional service and a smooth process from start to finish. I was impressed by how professional and friendly the team was. They took the time to answer all my questions and made sure I felt comfortable and confident in my decision. Truly outstanding!"
    },
    {
      name: "Michael Lee",
      text: "Quick, efficient, and very professional. The team handled everything with precision and attention to detail. I appreciated their clear communication and honesty throughout the process. I will definitely return for future needs and recommend them to friends and family."
    },
    {
      name: "Emily Davis",
      text: "Amazing customer support and top-notch service. The entire experience exceeded my expectations. The staff were patient, responsive, and extremely helpful. They made a potentially stressful process simple and enjoyable. I’m extremely satisfied."
    },
    {
      name: "John Carter",
      text: "A seamless experience from beginning to end. The team demonstrated professionalism, knowledge, and genuine care. I never felt rushed or overlooked, and their recommendations were always spot-on. This is a company you can truly trust."
    },
    {
      name: "Sophia Brown",
      text: "Friendly staff and great quality. I love my new car! The process was smooth and hassle-free, and every detail was handled efficiently. They made sure I understood everything and felt comfortable throughout. Highly recommend their services."
    },
    {
      name: "David Wilson",
      text: "Highly recommend this company. The level of service, professionalism, and attention to detail was impressive. They went out of their way to ensure I was happy with my purchase and that all my needs were met. Exceptional experience from start to finish."
    },
    {
      name: "Olivia Taylor",
      text: "Fantastic experience. Everything went smoothly and exceeded my expectations. The team was thorough, approachable, and genuinely cared about providing the best service. I felt supported at every stage and couldn’t be happier with the result."
    },
    {
      name: "James Anderson",
      text: "Professional, friendly, and trustworthy. I’m very impressed by the service and support provided. The team handled all the details flawlessly and made the entire process enjoyable. I will definitely use their services again and recommend them to others."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Update visible count based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setVisibleCount(1); // mobile
      else if (window.innerWidth < 1024) setVisibleCount(2); // tablet
      else setVisibleCount(3); // desktop
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide only forward
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev =>
        prev >= testimonials.length - visibleCount ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [visibleCount]);

  const prevSlide = () => {
    setCurrentIndex(prev =>
      prev === 0 ? testimonials.length - visibleCount : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex(prev =>
      prev >= testimonials.length - visibleCount ? 0 : prev + 1
    );
  };

  return (
    <div className="bg-white py-24 px-6 md:px-20 relative">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h4 className="text-yellow-500 font-semibold tracking-widest uppercase">Testimonials</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Customer Feedback</h2>
      </div>

      {/* Slider */}
      <div className="relative flex justify-center">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-3 rounded-full shadow hover:bg-gray-300 z-10"
        >
          <FaArrowLeft />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-3 rounded-full shadow hover:bg-gray-300 z-10"
        >
          <FaArrowRight />
        </button>

        {/* Testimonials Container */}
        <div className="overflow-hidden w-full md:w-4/5">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${(currentIndex * 100) / visibleCount}%)` }}
          >
            {testimonials.map((item, index) => (
              <div key={index} className={`flex-shrink-0 px-4`} style={{ width: `${100 / visibleCount}%` }}>
                <div className="bg-gray-50 rounded-2xl shadow-lg p-6 h-[500px] flex flex-col justify-between hover:scale-105 transition-transform duration-300 text-center">
                  <div className="text-yellow-400 text-3xl mb-4 mx-auto">
                    <FaQuoteLeft />
                  </div>
                  <p className="text-gray-700 italic mb-6">{item.text}</p>
                  <span className="font-bold text-gray-900">{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutD;
