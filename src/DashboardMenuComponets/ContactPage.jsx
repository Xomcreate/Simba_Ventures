import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEnvelopeOpen, FaUserCircle, FaTrashAlt } from "react-icons/fa";

function ContactPage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ✅ Updated Backend API URL
  const API_URL = "https://simba-back.onrender.com/api/contacts";

  // ✅ Fetch contacts
  const fetchContacts = async () => {
    try {
      const res = await axios.get(API_URL);
      setMessages(res.data.data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch contact messages.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // ✅ Delete message
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;
    try {
      await axios.delete(`${API_URL}/${id}`);
      setMessages(messages.filter((msg) => msg._id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete message");
    }
  };

  // ✅ Mark as read
  const handleMarkAsRead = async (id) => {
    try {
      const res = await axios.patch(`${API_URL}/${id}/read`);
      setMessages(
        messages.map((msg) =>
          msg._id === id ? { ...msg, status: "Read" } : msg
        )
      );
    } catch (err) {
      console.error(err);
      alert("Failed to mark as read");
    }
  };

  if (loading)
    return (
      <div className="text-center py-10 text-gray-500 text-lg">
        Loading messages...
      </div>
    );

  if (error)
    return (
      <div className="text-center py-10 text-red-500 text-lg">{error}</div>
    );

  return (
    <div className="p-4 sm:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-3 border-gray-200 text-center sm:text-left">
        <h1 className="text-xl sm:text-2xl font-bold text-[#02081d] mb-3 sm:mb-0">
          Contact Messages
        </h1>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center sm:text-left">
        <div className="bg-[#02081d] text-white p-4 rounded-xl shadow">
          <p className="text-sm opacity-90">Total Messages</p>
          <h2 className="text-2xl font-bold mt-1">{messages.length}</h2>
        </div>
        <div className="bg-[#F97316] text-[#02081d] p-4 rounded-xl shadow">
          <p className="text-sm font-semibold">Unread Messages</p>
          <h2 className="text-2xl font-bold mt-1">
            {messages.filter((msg) => msg.status === "Unread").length}
          </h2>
        </div>
        <div className="bg-white border border-gray-200 p-4 rounded-xl shadow">
          <p className="text-sm text-gray-600">Read</p>
          <h2 className="text-2xl font-bold text-[#02081d] mt-1">
            {messages.filter((msg) => msg.status === "Read").length}
          </h2>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-center sm:text-left">
            <thead className="bg-[#02081d] text-white">
              <tr>
                <th className="py-3 px-4">Sender</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Message</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg) => (
                <tr key={msg._id} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 flex items-center justify-center sm:justify-start gap-2">
                    <FaUserCircle className="text-xl text-[#F97316]" />
                    <span>{msg.fullName}</span>
                  </td>
                  <td className="py-3 px-4">{msg.email}</td>
                  <td className="py-3 px-4 truncate max-w-[200px]">{msg.message}</td>
                  <td className="py-3 px-4 whitespace-nowrap">
                    {new Date(msg.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 text-xs rounded-full font-medium ${
                        msg.status === "Read"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {msg.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 flex items-center justify-center sm:justify-start gap-3">
                    <button
                      className="text-[#F97316] hover:text-orange-500"
                      onClick={() => handleMarkAsRead(msg._id)}
                      title="Mark as Read"
                    >
                      <FaEnvelopeOpen />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-700"
                      onClick={() => handleDelete(msg._id)}
                      title="Delete Message"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
