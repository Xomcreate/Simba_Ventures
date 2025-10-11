import React, { useState, useEffect } from "react";
import {
  FaTachometerAlt,
  FaShoppingCart,
  FaUsers,
  FaEnvelope,
  FaBars,
  FaSignOutAlt,
} from "react-icons/fa";
import ContactPage from "../DashboardMenuComponets/ContactPage";
import Userspage from "../DashboardMenuComponets/Userspage";
import ShopPage from "../DashboardMenuComponets/ShopPage";
import Dash from "../DashboardMenuComponets/Dash";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, key: "dashboard" },
    { name: "Shop", icon: <FaShoppingCart />, key: "shop" },
    { name: "Users", icon: <FaUsers />, key: "users" },
    { name: "Contacts", icon: <FaEnvelope />, key: "contacts" },
  ];

  // ✅ Responsive sidebar
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) setSidebarOpen(false);
      else setSidebarOpen(true);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Logout Function (Full version)
  const handleLogout = async () => {
    try {
      await fetch("http://localhost:5000/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      // ✅ Clear login state
      localStorage.removeItem("isLoggedIn");

      // ✅ Notify Navbar and other components instantly
      window.dispatchEvent(new Event("storage"));

      // ✅ Redirect to homepage
      navigate("/");
    } catch (err) {
      console.error("Logout failed:", err);
      alert("Logout failed. Try again.");
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
          {sidebarOpen && <span className="font-bold text-lg">Admin Panel</span>}
          {!isMobile && (
            <button
              className="text-[#F97316] text-xl hover:text-yellow-400"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <FaBars />
            </button>
          )}
        </div>

        {/* Menu Items + Logout */}
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
          <div className="mt-2 border-t border-gray-700 pt-2">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-3 bg-[#F97316] hover:bg-gray-700 font-bold text-[#02081d] w-full rounded-r-lg transition-all duration-200"
            >
              <FaSignOutAlt />
              {sidebarOpen && <span>Logout</span>}
            </button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto transition-all duration-300">
        {activeTab === "dashboard" && <Dash />}
        {activeTab === "shop" && <ShopPage />}
        {activeTab === "users" && <Userspage />}
        {activeTab === "contacts" && <ContactPage />}
      </main>
    </div>
  );
}

export default Admin;
