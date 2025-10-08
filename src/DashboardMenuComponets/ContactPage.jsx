import React from "react";
import { FaEnvelopeOpen, FaUserCircle, FaTrashAlt } from "react-icons/fa";

function ContactPage() {
  const messages = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      subject: "Order Delay Inquiry",
      date: "Oct 6, 2025",
      status: "Unread",
    },
    {
      id: 2,
      name: "Mary Smith",
      email: "mary@example.com",
      subject: "Product Feedback",
      date: "Oct 5, 2025",
      status: "Replied",
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "mikej@example.com",
      subject: "Support Request",
      date: "Oct 3, 2025",
      status: "Pending",
    },
  ];

  return (
    <div className="p-4 sm:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-3 border-gray-200 text-center sm:text-left">
        <h1 className="text-xl sm:text-2xl font-bold text-[#02081d] mb-3 sm:mb-0">
          Contact Messages
        </h1>
        <button className="bg-[#F97316] text-white px-4 py-2 rounded-lg hover:bg-orange-500 transition text-sm sm:text-base mx-auto sm:mx-0">
          View All
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center sm:text-left">
        <div className="bg-[#02081d] text-white p-4 rounded-xl shadow">
          <p className="text-sm opacity-90">Total Messages</p>
          <h2 className="text-2xl font-bold mt-1">145</h2>
        </div>
        <div className="bg-[#F97316] text-[#02081d] p-4 rounded-xl shadow">
          <p className="text-sm font-semibold">Unread Messages</p>
          <h2 className="text-2xl font-bold mt-1">27</h2>
        </div>
        <div className="bg-white border border-gray-200 p-4 rounded-xl shadow">
          <p className="text-sm text-gray-600">Replied</p>
          <h2 className="text-2xl font-bold text-[#02081d] mt-1">118</h2>
        </div>
      </div>

      {/* Messages Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-center sm:text-left">
            <thead className="bg-[#02081d] text-white">
              <tr>
                <th className="py-3 px-4 font-semibold whitespace-nowrap">
                  Sender
                </th>
                <th className="py-3 px-4 font-semibold whitespace-nowrap">
                  Email
                </th>
                <th className="py-3 px-4 font-semibold whitespace-nowrap">
                  Subject
                </th>
                <th className="py-3 px-4 font-semibold whitespace-nowrap">
                  Date
                </th>
                <th className="py-3 px-4 font-semibold whitespace-nowrap">
                  Status
                </th>
                <th className="py-3 px-4 font-semibold whitespace-nowrap">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg) => (
                <tr
                  key={msg.id}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 px-4 flex items-center justify-center sm:justify-start gap-2">
                    <FaUserCircle className="text-xl text-[#F97316]" />
                    <span className="truncate max-w-[120px] sm:max-w-none">
                      {msg.name}
                    </span>
                  </td>
                  <td className="py-3 px-4 truncate max-w-[160px] sm:max-w-none">
                    {msg.email}
                  </td>
                  <td className="py-3 px-4 truncate max-w-[180px] sm:max-w-none">
                    {msg.subject}
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap">{msg.date}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 text-xs rounded-full font-medium ${
                        msg.status === "Unread"
                          ? "bg-red-100 text-red-700"
                          : msg.status === "Replied"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {msg.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 flex items-center justify-center sm:justify-start gap-3">
                    <button className="text-[#F97316] hover:text-orange-500">
                      <FaEnvelopeOpen />
                    </button>
                    <button className="text-red-600 hover:text-red-700">
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Hint */}
      <p className="text-xs text-gray-500 sm:hidden text-center">
        Swipe horizontally to view more columns →
      </p>
    </div>
  );
}

export default ContactPage;
