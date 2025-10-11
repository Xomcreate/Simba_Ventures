import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaUserCircle, FaPhoneAlt } from "react-icons/fa";

function UserDash() {
  const [showContact, setShowContact] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.name) setUserName(user.name);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-5 relative">
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl p-6 shadow-md flex flex-col sm:flex-row items-center justify-between mb-8">
        <div>
          <h2 className="text-xl font-semibold">Welcome, {userName || "User"} 👋🏽</h2>
          <p className="text-sm text-orange-100">
            Discover great products and connect directly with sellers.
          </p>
        </div>
        <FaUserCircle className="text-white text-6xl mt-4 sm:mt-0" />
      </div>

      <motion.div
        className="bg-white p-6 rounded-xl shadow-md text-center"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-lg font-semibold text-[#02081d] mb-2">
          Want to Buy a Product?
        </h3>
        <p className="text-sm text-gray-500 mb-4">
          Contact the product owner directly to discuss prices, deals, or product details.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowContact(true)}
          className="bg-[#F97316] text-white px-6 py-2 rounded-md font-medium hover:bg-orange-500 flex items-center gap-2 mx-auto"
        >
          <FaPhoneAlt /> Call to Buy Now
        </motion.button>
      </motion.div>

      {showContact && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black/30">
          <motion.div
            className="bg-white border border-gray-300 rounded-lg p-6 w-full max-w-sm shadow-xl relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-bold text-[#02081d] mb-4">Seller Information</h3>
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
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default UserDash;
