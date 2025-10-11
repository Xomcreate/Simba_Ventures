import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Login({ setIsLogin, onLoginSuccess }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password)
      return setMessage({ text: "Please fill in all fields", type: "error" });

    setLoading(true);
    setMessage({ text: "", type: "" });

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        const role = data.user?.role || "user"; // Ensure role exists

        setMessage({
          text: `✅ Welcome back, ${data.user?.name || "User"}!`,
          type: "success",
        });

        // ✅ Pass role to Navbar
        if (onLoginSuccess) onLoginSuccess(role);

        // Redirect after short delay
        setTimeout(() => {
          navigate(role === "admin" ? "/admin" : "/user");
        }, 1000);
      } else {
        setMessage({
          text: data.message || "Invalid email or password",
          type: "error",
        });
      }
    } catch (err) {
      setMessage({
        text: "Something went wrong. Please try again.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-4 text-center"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-lg font-semibold text-[#02081d]">Welcome Back</h3>
      <p className="text-xs text-gray-500">Login to continue</p>

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

      <div className="text-left">
        <label className="block text-xs font-medium text-gray-600">Email</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="mt-1 block w-full rounded-md border px-3 py-1.5 text-sm focus:ring-[#F97316] focus:border-[#F97316]"
        />
      </div>

      <div className="text-left">
        <label className="block text-xs font-medium text-gray-600">Password</label>
        <input
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="mt-1 block w-full rounded-md border px-3 py-1.5 text-sm focus:ring-[#F97316] focus:border-[#F97316]"
        />
      </div>

      <motion.button
        type="submit"
        disabled={loading}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full bg-[#F97316] text-white py-2 rounded-md text-sm font-semibold transition hover:bg-orange-500 disabled:opacity-70"
      >
        {loading ? "Logging in..." : "Login"}
      </motion.button>

      <p className="text-xs text-gray-500 mt-2">
        Don’t have an account?{" "}
        <button
          type="button"
          onClick={() => setIsLogin(false)}
          className="text-[#F97316] font-medium hover:underline"
        >
          Register
        </button>
      </p>
    </motion.form>
  );
}

export default Login;
