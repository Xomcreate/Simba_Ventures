import React from "react";
import { motion } from "framer-motion";

function Register({ setIsLogin }) {
  return (
    <motion.form
      className="space-y-3 text-center"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Title inside Register form */}
      <h3 className="text-lg font-semibold text-[#02081d]">Create an Account</h3>
      <p className="text-xs text-gray-500 mb-3">
        Join us today — it only takes a minute.
      </p>

      {/* Full Name */}
      <div className="text-left">
        <label className="block text-xs font-medium text-gray-600">
          Full Name
        </label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full px-3 py-1.5 border rounded-md text-sm focus:ring-2 focus:ring-[#F97316]"
        />
      </div>

      {/* Email */}
      <div className="text-left">
        <label className="block text-xs font-medium text-gray-600">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-3 py-1.5 border rounded-md text-sm focus:ring-2 focus:ring-[#F97316]"
        />
      </div>

      {/* Password */}
      <div className="text-left">
        <label className="block text-xs font-medium text-gray-600">
          Password
        </label>
        <input
          type="password"
          placeholder="Create a password"
          className="w-full px-3 py-1.5 border rounded-md text-sm focus:ring-2 focus:ring-[#F97316]"
        />
      </div>

      {/* Register button with hover + scale effect */}
      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full bg-[#F97316] text-white py-2 rounded-md text-sm font-semibold transition hover:bg-orange-500"
      >
        Register
      </motion.button>

      {/* Switch to Login */}
      <p className="text-xs text-gray-500 mt-2">
        Already have an account?{" "}
        <button
          type="button"
          onClick={() => setIsLogin(true)}
          className="text-[#F97316] font-medium hover:underline"
        >
          Login
        </button>
      </p>
    </motion.form>
  );
}

export default Register;
