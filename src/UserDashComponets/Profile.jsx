import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    password: "********",
    avatar: null,
  });
  const originalRef = useRef(null); // keep original copy for cancel
  const nameInputRef = useRef(null);

  // Load user info from localStorage on mount
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setProfile({
        name: user.name || "",
        email: user.email || "",
        password: user.password ? "********" : "********",
        avatar: user.avatar || null,
      });
      originalRef.current = user;
    }
  }, []);

  // focus the name input when editing starts
  useEffect(() => {
    console.log("isEditing changed:", isEditing);
    if (isEditing) {
      // small timeout to ensure element exists in DOM
      setTimeout(() => {
        nameInputRef.current?.focus();
      }, 50);
    }
  }, [isEditing]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((p) => ({ ...p, [name]: value }));
  };

  // Save changes
  const handleSave = (e) => {
    e.preventDefault();
    // Basic validation (example)
    if (!profile.name.trim() || !profile.email.trim()) {
      alert("Name and email cannot be empty.");
      return;
    }

    // If password is left as "********" assume no change; otherwise save entered.
    const toSave = {
      name: profile.name,
      email: profile.email,
      avatar: profile.avatar || null,
      password: profile.password === "********" ? (originalRef.current?.password || "") : profile.password,
    };

    localStorage.setItem("user", JSON.stringify(toSave));
    originalRef.current = toSave; // update original
    setProfile((p) => ({ ...p, password: "********" })); // hide password after save
    setIsEditing(false);
    console.log("Saved user:", toSave);
  };

  // Cancel edits and restore original
  const handleCancel = () => {
    const orig = originalRef.current || JSON.parse(localStorage.getItem("user")) || {};
    setProfile({
      name: orig.name || "",
      email: orig.email || "",
      password: "********",
      avatar: orig.avatar || null,
    });
    setIsEditing(false);
    console.log("Canceled edits, restored:", orig);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Header Banner */}
      <div className="w-full h-40 bg-gradient-to-r from-orange-500 to-red-600 relative">
        {/* Profile Avatar (non-editable) */}
        <div className="absolute left-1/2 -bottom-14 transform -translate-x-1/2">
          <div className="w-28 h-28">
            {profile.avatar ? (
              <img
                src={profile.avatar}
                alt="Profile"
                className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
              />
            ) : (
              <FaUserCircle className="text-gray-200 text-[110px] border-4 border-white rounded-full bg-white" />
            )}
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
        <h2 className="text-center text-lg font-semibold text-[#02081d] mb-4">My Profile</h2>

        <form onSubmit={handleSave} className="space-y-3 text-left">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-medium text-gray-600">Full Name</label>
            <input
              name="name"
              ref={nameInputRef}
              value={profile.name}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full px-3 py-2 border rounded-md text-sm transition-all duration-200 ${
                isEditing ? "bg-white border-orange-400 focus:ring-2 focus:ring-orange-400" : "bg-gray-100 border-gray-300 cursor-not-allowed"
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
              className={`w-full px-3 py-2 border rounded-md text-sm transition-all duration-200 ${
                isEditing ? "bg-white border-orange-400 focus:ring-2 focus:ring-orange-400" : "bg-gray-100 border-gray-300 cursor-not-allowed"
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
              className={`w-full px-3 py-2 border rounded-md text-sm transition-all duration-200 ${
                isEditing ? "bg-white border-orange-400 focus:ring-2 focus:ring-orange-400" : "bg-gray-100 border-gray-300 cursor-not-allowed"
              }`}
            />
            {isEditing && (
              <p className="text-xs text-gray-500 mt-1">Enter a new password to change it, or leave as is to keep current.</p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center pt-2">
            {!isEditing ? (
              // Use regular button for toggle to eliminate interaction edge-cases
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="bg-[#F97316] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-500"
              >
                Edit Profile
              </button>
            ) : (
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-500"
              >
                Save Changes
              </motion.button>
            )}

            {isEditing && (
              <button type="button" onClick={handleCancel} className="text-gray-500 text-sm hover:underline">
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
