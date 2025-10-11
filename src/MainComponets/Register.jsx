import React, { useState } from "react";
import { motion } from "framer-motion";

function Register({ setIsLogin }) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" }); 
  // type = "success" | "error"

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      setMessage({ text: "All fields are required", type: "error" });
      return;
    }

    setLoading(true);
    setMessage({ text: "", type: "" });

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage({ text: "✅ Registration successful! You can now log in.", type: "success" });
        setTimeout(() => setIsLogin(true), 2000); // auto-switch after success
      } else {
        setMessage({ text: data.message || "Registration failed", type: "error" });
      }
    } catch (err) {
      console.error(err);
      setMessage({ text: "Something went wrong. Try again later.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleRegister}
      className="space-y-3 text-center"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Title */}
      <h3 className="text-lg font-semibold text-[#02081d]">Create an Account</h3>
      <p className="text-xs text-gray-500 mb-3">
        Join us today — it only takes a minute.
      </p>

      {/* ✅ Feedback message box */}
      {message.text && (
        <div
          className={`text-sm p-2 rounded-md ${
            message.type === "success"
              ? "bg-green-100 text-green-700 border border-green-300"
              : "bg-red-100 text-red-700 border border-red-300"
          }`}
        >
          {message.text}
        </div>
      )}

      {/* Full Name */}
      <div className="text-left">
        <label className="block text-xs font-medium text-gray-600">
          Full Name
        </label>
        <input
          type="text"
          placeholder="Enter your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
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
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
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
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
          className="w-full px-3 py-1.5 border rounded-md text-sm focus:ring-2 focus:ring-[#F97316]"
        />
      </div>

      {/* Register button */}
      <motion.button
        type="submit"
        disabled={loading}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full bg-[#F97316] text-white py-2 rounded-md text-sm font-semibold transition hover:bg-orange-500 disabled:opacity-70"
      >
        {loading ? "Registering..." : "Register"}
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
