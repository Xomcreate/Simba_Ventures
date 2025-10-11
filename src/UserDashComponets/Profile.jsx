import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaUserCircle, FaCamera } from "react-icons/fa";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    password: "********",
    avatar: null,
  });

  // Load user info from localStorage on mount
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setProfile((prev) => ({
        ...prev,
        name: user.name || "",
        email: user.email || "",
        avatar: user.avatar || null,
      }));
    }
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // Handle profile image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfile({ ...profile, avatar: imageUrl });
    }
  };

  // Save changes
  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(profile)); // Persist changes
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Header Banner */}
      <div className="w-full h-40 bg-gradient-to-r from-orange-500 to-red-600 relative">
        {/* Profile Avatar */}
        <div className="absolute left-1/2 -bottom-14 transform -translate-x-1/2 group">
          <div className="relative w-28 h-28">
            <label htmlFor="avatar-upload" className="cursor-pointer">
              {profile.avatar ? (
                <img
                  src={profile.avatar}
                  alt="Profile"
                  className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
                />
              ) : (
                <FaUserCircle className="text-gray-200 text-[110px] border-4 border-white rounded-full bg-white" />
              )}
              <div className="absolute bottom-2 right-2 bg-orange-500 text-white p-2 rounded-full shadow-md hover:bg-orange-600 transition">
                <FaCamera size={14} />
              </div>
            </label>
            <input
              id="avatar-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </div>
        </div>
      </div>

      {/* Profile Card */}
      <motion.div
        className="bg-white mt-20 p-6 rounded-xl shadow-md w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-center text-lg font-semibold text-[#02081d] mb-4">
          My Profile
        </h2>

        <form onSubmit={handleSave} className="space-y-3 text-left">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-medium text-gray-600">Full Name</label>
            <input
              name="name"
              value={profile.name}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full px-3 py-2 border rounded-md text-sm focus:ring-2 ${
                isEditing ? "focus:ring-[#F97316]" : "bg-gray-100 cursor-not-allowed"
              }`}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-medium text-gray-600">Email</label>
            <input
              name="email"
              value={profile.email}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full px-3 py-2 border rounded-md text-sm focus:ring-2 ${
                isEditing ? "focus:ring-[#F97316]" : "bg-gray-100 cursor-not-allowed"
              }`}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-medium text-gray-600">Password</label>
            <input
              name="password"
              type="password"
              value={profile.password}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full px-3 py-2 border rounded-md text-sm focus:ring-2 ${
                isEditing ? "focus:ring-[#F97316]" : "bg-gray-100 cursor-not-allowed"
              }`}
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center pt-2">
            {!isEditing ? (
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                onClick={() => setIsEditing(true)}
                className="bg-[#F97316] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-500"
              >
                Edit Profile
              </motion.button>
            ) : (
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-500"
              >
                Save Changes
              </motion.button>
            )}

            {isEditing && (
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="text-gray-500 text-sm hover:underline"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default Profile;
