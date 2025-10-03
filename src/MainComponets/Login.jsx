import React, { useState } from "react";
import { motion } from "framer-motion";

function Login({ setIsLogin }) {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Logged in successfully!");
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-4 text-center" // 🔹 Centered text
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Title */}
      <h3 className="text-lg font-semibold text-[#02081d]">Welcome Back</h3>
      <p className="text-xs text-gray-500">Login to continue</p>

      {/* Email */}
      <div className="text-left">
        <label className="block text-xs font-medium text-gray-600">Email</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm focus:ring-[#1E558E] focus:border-[#1E558E]"
        />
      </div>

      {/* Password */}
      <div className="text-left">
        <label className="block text-xs font-medium text-gray-600">Password</label>
        <input
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm focus:ring-[#1E558E] focus:border-[#1E558E]"
        />
      </div>

      {/* Button with hover + scale effect */}
      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }} // 🔹 Smooth hover scale
        whileTap={{ scale: 0.95 }}
        className="w-full bg-[#F97316] text-white py-2 rounded-md text-sm font-semibold transition hover:bg-orange-500"
      >
        Login
      </motion.button>

      {/* Switch to Register */}
      <p className="text-xs text-gray-500 mt-2">
        Don’t have an account?{" "}
        <button
          type="button"
          onClick={() => setIsLogin(false)}
          className="text-[#1E558E] font-medium hover:underline"
        >
          Register
        </button>
      </p>
    </motion.form>
  );
}

export default Login;
