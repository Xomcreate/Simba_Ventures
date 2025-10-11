import React, { useState, useEffect } from "react";
import { FaUserCircle, FaSearch, FaTrash } from "react-icons/fa";
import axios from "axios";

function Userspage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/auth/users");
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/auth/users/${id}`);
      setUsers(users.filter((u) => u._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p className="text-center mt-4">Loading users...</p>;

  return (
    <div className="p-4 sm:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-3 border-gray-200 text-center sm:text-left">
        <h1 className="text-xl sm:text-2xl font-bold text-[#02081d] mb-3 sm:mb-0">
          Registered Users
        </h1>
        <div className="relative w-full sm:w-72 mx-auto sm:mx-0">
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 rounded-lg py-2 pl-10 pr-3 text-sm focus:ring-2 focus:ring-[#F97316] focus:outline-none"
          />
          <FaSearch className="absolute top-2.5 left-3 text-gray-500" />
        </div>
      </div>

      {/* Summary Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
        <div className="bg-[#02081d] text-white p-4 rounded-xl shadow">
          <p className="text-sm opacity-90">Total Users</p>
          <h2 className="text-2xl font-bold mt-1">{users.length}</h2>
        </div>
        <div className="bg-[#F97316] text-[#02081d] p-4 rounded-xl shadow">
          <p className="text-sm font-semibold">Active Users</p>
          <h2 className="text-2xl font-bold mt-1">
            {users.filter((u) => u.status === "Active").length}
          </h2>
        </div>
        <div className="bg-white border border-gray-200 p-4 rounded-xl shadow">
          <p className="text-sm text-gray-600">Inactive Users</p>
          <h2 className="text-2xl font-bold text-[#02081d] mt-1">
            {users.filter((u) => u.status === "Inactive").length}
          </h2>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-center sm:text-left">
            <thead className="bg-[#02081d] text-white">
              <tr>
                <th className="py-3 px-4 font-semibold">User</th>
                <th className="py-3 px-4 font-semibold">Email</th>
                <th className="py-3 px-4 font-semibold">Role</th>
                <th className="py-3 px-4 font-semibold">Joined</th>
                <th className="py-3 px-4 font-semibold">Status</th>
                <th className="py-3 px-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr
                    key={user._id}
                    className="border-b hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-3 px-4 flex items-center justify-center sm:justify-start gap-2">
                      <FaUserCircle className="text-xl text-[#F97316]" />
                      <span>{user.name}</span>
                    </td>
                    <td className="py-3 px-4">{user.email}</td>
                    <td className="py-3 px-4">{user.role}</td>
                    <td className="py-3 px-4">{new Date(user.createdAt).toLocaleDateString()}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 text-xs rounded-full font-medium ${
                          user.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {user.status || "Active"}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() => deleteUser(user._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="py-4 text-gray-500 text-center">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Userspage;
