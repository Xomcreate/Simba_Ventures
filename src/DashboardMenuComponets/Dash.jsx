import React, { useEffect, useState } from "react";
import { FaBoxes, FaUsers, FaEnvelope } from "react-icons/fa";
import axios from "axios";

function Dash() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "http://localhost:5000/api/contacts";

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get(API_URL);
        setContacts(res.data.data || []);
      } catch (err) {
        console.error("Error fetching contacts:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchContacts();
  }, []);

  const unreadMessages = contacts.filter((msg) => msg.status === "Unread").length;

  const stats = [
    {
      id: 1,
      title: "Total Stock",
      value: "128",
      icon: <FaBoxes />,
      color: "bg-[#F97316]",
      text: "text-[#02081d]",
    },
    {
      id: 2,
      title: "Active Users",
      value: "45",
      icon: <FaUsers />,
      color: "bg-[#02081d]",
      text: "text-white",
    },
    {
      id: 3,
      title: "Buyer Inquiries",
      value: loading ? "..." : unreadMessages,
      icon: <FaEnvelope />,
      color: "bg-white border border-gray-200",
      text: "text-[#02081d]",
    },
  ];

  return (
    <div className="p-4 sm:p-6 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-3 border-gray-200">
        <h1 className="text-2xl font-bold text-[#02081d]">Admin Dashboard</h1>
        <p className="text-gray-500 text-sm mt-2 sm:mt-0">
          Overview • {new Date().toDateString()}
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className={`${stat.color} ${stat.text} p-5 rounded-2xl shadow hover:shadow-lg transition-all duration-300`}
          >
            <div className="text-3xl mb-3">{stat.icon}</div>
            <h2 className="text-lg font-semibold">{stat.title}</h2>
            <p className="text-2xl font-bold mt-1">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dash;
