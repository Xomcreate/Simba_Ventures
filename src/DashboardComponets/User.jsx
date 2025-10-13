import React, { useState, useEffect } from "react";
import { FaTachometerAlt, FaUser, FaBars, FaSignOutAlt } from "react-icons/fa";
import UserDash from "../UserDashComponets/UserDash";
import Profile from "../UserDashComponets/Profile";
import { useNavigate } from "react-router-dom";

function User() {
  const [activeTab, setActiveTab] = useState("userdash");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, key: "userdash" },
    { name: "Profile", icon: <FaUser />, key: "profile" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setSidebarOpen(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ LOGOUT HANDLER
  const handleLogout = async () => {
    try {
      await fetch("http://localhost:5000/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      // ✅ Clear login info
      localStorage.removeItem("isLoggedIn");

      // ✅ Notify Navbar instantly
      window.dispatchEvent(new Event("storage"));

      // ✅ Redirect home
      navigate("/");
    } catch (err) {
      console.error("Logout failed:", err);
      alert("Error logging out");
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`bg-[#02081d] text-white transition-all duration-300 flex flex-col ${
          sidebarOpen ? "w-64" : "w-16"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          {sidebarOpen && <span className="font-bold text-lg">User Panel</span>}
          {!isMobile && (
            <button
              className="text-[#F97316] text-xl hover:text-yellow-400"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <FaBars />
            </button>
          )}
        </div>

        {/* Menu */}
        <nav className="flex flex-col mt-4">
          {menuItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setActiveTab(item.key)}
              className={`flex items-center gap-3 px-4 py-3 transition-all duration-200 rounded-r-lg hover:bg-gray-700 ${
                activeTab === item.key
                  ? "bg-[#F97316] text-[#02081d] font-semibold shadow-lg"
                  : "text-white"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {sidebarOpen && <span>{item.name}</span>}
            </button>
          ))}

          {/* ✅ Logout Button */}
          
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-y-auto transition-all duration-300">
        {activeTab === "userdash" && <UserDash />}
        {activeTab === "profile" && <Profile />}
      </main>
    </div>
  );
}

export default User;
