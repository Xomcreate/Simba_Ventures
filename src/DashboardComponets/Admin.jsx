import React, { useState, useEffect } from "react";
import {
  FaTachometerAlt,
  FaShoppingCart,
  FaUsers,
  FaEnvelope,
  FaBars,
} from "react-icons/fa";
import ContactPage from "../DashboardMenuComponets/ContactPage";
import Userspage from "../DashboardMenuComponets/Userspage";
import ShopPage from "../DashboardMenuComponets/ShopPage";
import Dash from "../DashboardMenuComponets/Dash";
// 👈 import your ContactPage

// Dummy components for other pages (still inline)



function Admin() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, key: "dashboard" },
    { name: "Shop", icon: <FaShoppingCart />, key: "shop" },
    { name: "Users", icon: <FaUsers />, key: "users" },
    { name: "Contacts", icon: <FaEnvelope />, key: "contacts" },
  ];

  // Detect mobile screen
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
        {/* Sidebar Header */}
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

        {/* Menu Items */}
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

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto transition-all duration-300">
        {activeTab === "dashboard" && <Dash />}
        {activeTab === "shop" && <ShopPage/>}
        {activeTab === "users" && <Userspage />}
        {activeTab === "contacts" && <ContactPage />} {/* imported here */}
      </main>
    </div>
  );
}

export default Admin;
