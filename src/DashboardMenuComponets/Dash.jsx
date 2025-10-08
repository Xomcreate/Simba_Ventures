import React from "react";
import {
  FaShoppingCart,
  FaUsers,
  FaEnvelope,
  FaPhoneAlt,
  FaStore,
} from "react-icons/fa";

function Dash() {
  const stats = [
    {
      id: 1,
      title: "Listed Products",
      value: "1,245",
      icon: <FaShoppingCart />,
      color: "bg-[#F97316]",
      text: "text-[#02081d]",
    },
    {
      id: 2,
      title: "Active Sellers",
      value: "342",
      icon: <FaStore />,
      color: "bg-[#02081d]",
      text: "text-white",
    },
    {
      id: 3,
      title: "New Messages",
      value: "87",
      icon: <FaEnvelope />,
      color: "bg-white border border-gray-200",
      text: "text-[#02081d]",
    },
  ];

  const activities = [
    { id: 1, title: "New product added — Toyota Corolla 2018", time: "1 hr ago" },
    { id: 2, title: "Seller ‘AutoLink Ltd’ verified", time: "4 hrs ago" },
    { id: 3, title: "Customer inquiry from Janet O.", time: "Yesterday" },
  ];

  return (
    <div className="p-4 sm:p-6 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-3 border-gray-200">
        <h1 className="text-xl sm:text-2xl font-bold text-[#02081d]">
          Admin Dashboard
        </h1>
        <p className="text-gray-500 text-sm mt-2 sm:mt-0">
          Platform Overview • Oct 7, 2025
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className={`${stat.color} ${stat.text} p-5 rounded-2xl shadow hover:shadow-lg transition-all duration-300`}
          >
            <div className="flex items-center justify-between">
              <div className="text-3xl">{stat.icon}</div>
            </div>
            <h2 className="text-lg font-semibold mt-3">{stat.title}</h2>
            <p className="text-2xl font-bold mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Management Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Product Management */}
        <div className="bg-white border border-gray-200 rounded-xl shadow p-5">
          <h2 className="text-lg font-bold text-[#02081d] mb-3 flex items-center gap-2">
            <FaShoppingCart className="text-[#F97316]" /> Product Management
          </h2>
          <p className="text-gray-600 text-sm">
            Approve or remove product listings, update categories, and verify
            item details before they appear on the shop.
          </p>
          <button className="mt-4 bg-[#F97316] text-white px-4 py-2 rounded-lg hover:bg-orange-500 transition text-sm">
            Manage Products
          </button>
        </div>

        {/* Seller Management */}
        <div className="bg-white border border-gray-200 rounded-xl shadow p-5">
          <h2 className="text-lg font-bold text-[#02081d] mb-3 flex items-center gap-2">
            <FaUsers className="text-[#F97316]" /> Seller Management
          </h2>
          <p className="text-gray-600 text-sm">
            View registered sellers, verify accounts, and monitor active
            listings or reported issues.
          </p>
          <button className="mt-4 bg-[#02081d] text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition text-sm">
            View Sellers
          </button>
        </div>

        {/* Contact/Inquiry Section */}
        <div className="bg-white border border-gray-200 rounded-xl shadow p-5">
          <h2 className="text-lg font-bold text-[#02081d] mb-3 flex items-center gap-2">
            <FaPhoneAlt className="text-[#F97316]" /> Buyer Inquiries
          </h2>
          <p className="text-gray-600 text-sm">
            Review messages from customers trying to reach sellers and ensure
            prompt follow-ups.
          </p>
          <button className="mt-4 bg-[#F97316] text-white px-4 py-2 rounded-lg hover:bg-orange-500 transition text-sm">
            View Inquiries
          </button>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white border border-gray-200 rounded-xl shadow p-5">
        <h2 className="text-lg font-bold text-[#02081d] mb-4">
          Recent Activities
        </h2>
        <ul className="space-y-3">
          {activities.map((act) => (
            <li
              key={act.id}
              className="flex items-center justify-between border-b pb-2 last:border-none"
            >
              <p className="text-gray-700 text-sm">{act.title}</p>
              <span className="text-gray-400 text-xs">{act.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dash;
