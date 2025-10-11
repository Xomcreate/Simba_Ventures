import React, { useState } from "react";
import axios from "axios";

function ContactC() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await axios.post("http://localhost:5000/api/contacts", form, {
        headers: { "Content-Type": "application/json" },
      });

      setStatus(res.data.message || "Message sent successfully!");
      setForm({ fullName: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus("❌ Failed to send message. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Contact Section */}
      <div
        className="min-h-screen w-full bg-cover bg-center flex items-center justify-center relative px-4 sm:px-6 lg:px-10 py-10 sm:py-16"
        style={{
          backgroundImage: "url('/compressed/side.webp')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-3xl bg-black/30 backdrop-blur-sm rounded-2xl p-6 sm:p-10 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold mb-4 text-center text-white drop-shadow-md">
            Drive Your Dream with Us 🚗
          </h2>
          <p className="text-gray-200 mb-8 text-sm sm:text-base lg:text-lg text-center leading-relaxed">
            Whether you’re buying, upgrading, or just curious — we’ll guide you
            every step of the way. Drop us a message and our car experts will
            reach out shortly.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full bg-white/10 border border-white/30 text-white placeholder-gray-300 rounded-lg px-4 py-3 sm:py-4 focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-[#F97316] transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full bg-white/10 border border-white/30 text-white placeholder-gray-300 rounded-lg px-4 py-3 sm:py-4 focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-[#F97316] transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                placeholder="Tell us about the car you’re looking for..."
                required
                className="w-full bg-white/10 border border-white/30 text-white placeholder-gray-300 rounded-lg px-4 py-3 sm:py-4 focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-[#F97316] transition-all resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="relative overflow-hidden bg-gradient-to-r from-[#F97316] to-[#fb923c] 
                         text-white w-full py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg 
                         shadow-md transition-all duration-500 
                         hover:scale-[1.03] hover:shadow-xl group disabled:opacity-60"
            >
              <span className="relative z-10">
                {loading ? "Sending..." : "Send Message"}
              </span>
              <span
                className="absolute inset-0 bg-gradient-to-r from-[#02081d] to-[#02081d] 
                           transform scale-0 group-hover:scale-150 
                           rotate-0 group-hover:rotate-180 
                           transition-all duration-700 ease-in-out rounded-lg"
              ></span>
            </button>

            {status && (
              <p className="text-center text-white mt-3 text-sm sm:text-base">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactC;
