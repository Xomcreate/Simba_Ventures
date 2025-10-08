import React, { useState, useEffect } from "react";
import { FaTachometerAlt, FaShoppingCart, FaEnvelope, FaBars, FaUser } from "react-icons/fa";
import ShopPage from "../DashboardMenuComponets/ShopPage";
import ContactPage from "../DashboardMenuComponets/ContactPage";
import Dash from "../DashboardMenuComponets/Dash";

function User() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, key: "dashboard" },
    { name: "Shop", icon: <FaShoppingCart />, key: "shop" },
    { name: "Contact", icon: <FaEnvelope />, key: "contact" },
    { name: "Profile", icon: <FaUser />, key: "profile" },
  ];

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
        <nav className="flex-1 flex flex-col mt-4">
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
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-y-auto transition-all duration-300">
        {activeTab === "dashboard" && <Dash />}
        {activeTab === "shop" && <ShopPage />}
        {activeTab === "contact" && <ContactPage />}
        {activeTab === "profile" && (
          <div className="p-6 bg-white rounded shadow">
            <h2 className="text-xl font-semibold mb-4 text-[#02081d]">My Profile</h2>
            <p className="text-gray-700">Welcome, this is your user profile section.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default User;
