import React from "react";
import { FaBoxOpen, FaPlus, FaEdit, FaTrashAlt, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

function ShopPage() {
  const products = [
    { id: 1, name: "Toyota Corolla Engine", category: "Spare Parts", price: 350000, stock: 10, status: "In Stock" },
    { id: 2, name: "Mountain Bike", category: "Bicycles", price: 90000, stock: 3, status: "Low Stock" },
    { id: 3, name: "Car Tire 18inch", category: "Cars", price: 50000, stock: 0, status: "Out of Stock" },
    { id: 4, name: "Motorbike Helmet", category: "Accessories", price: 25000, stock: 12, status: "In Stock" },
  ];

  return (
    <div className="p-4 sm:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-3 border-gray-200 text-center sm:text-left">
        <h1 className="text-xl sm:text-2xl font-bold text-[#02081d] mb-3 sm:mb-0">
          Shop Management
        </h1>
        <button className="bg-[#F97316] text-white px-4 py-2 rounded-lg hover:bg-orange-500 transition text-sm sm:text-base mx-auto sm:mx-0 flex items-center gap-2 justify-center">
          <FaPlus />
          Add Product
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center sm:text-left">
        <div className="bg-[#02081d] text-white p-4 rounded-xl shadow">
          <p className="text-sm opacity-90">Total Products</p>
          <h2 className="text-2xl font-bold mt-1">{products.length}</h2>
        </div>
        <div className="bg-[#F97316] text-[#02081d] p-4 rounded-xl shadow">
          <p className="text-sm font-semibold">In Stock</p>
          <h2 className="text-2xl font-bold mt-1">
            {products.filter((p) => p.status === "In Stock").length}
          </h2>
        </div>
        <div className="bg-white border border-gray-200 p-4 rounded-xl shadow">
          <p className="text-sm text-gray-600">Out of Stock</p>
          <h2 className="text-2xl font-bold text-[#02081d] mt-1">
            {products.filter((p) => p.status === "Out of Stock").length}
          </h2>
        </div>
        <div className="bg-white border border-gray-200 p-4 rounded-xl shadow">
          <p className="text-sm text-gray-600">Categories</p>
          <h2 className="text-2xl font-bold text-[#02081d] mt-1">4</h2>
        </div>
      </div>

      {/* Product Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-center sm:text-left">
            <thead className="bg-[#02081d] text-white">
              <tr>
                <th className="py-3 px-4 font-semibold">Product</th>
                <th className="py-3 px-4 font-semibold">Category</th>
                <th className="py-3 px-4 font-semibold">Price (₦)</th>
                <th className="py-3 px-4 font-semibold">Stock</th>
                <th className="py-3 px-4 font-semibold">Status</th>
                <th className="py-3 px-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 flex items-center justify-center sm:justify-start gap-2">
                    <FaBoxOpen className="text-[#F97316]" />
                    <span>{item.name}</span>
                  </td>
                  <td className="py-3 px-4">{item.category}</td>
                  <td className="py-3 px-4 font-semibold text-[#02081d]">
                    ₦{item.price.toLocaleString()}
                  </td>
                  <td className="py-3 px-4">{item.stock}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 text-xs rounded-full font-medium flex items-center justify-center sm:justify-start gap-1 ${
                        item.status === "In Stock"
                          ? "bg-green-100 text-green-700"
                          : item.status === "Low Stock"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.status === "In Stock" && <FaCheckCircle />}
                      {item.status === "Low Stock" && <FaCheckCircle />}
                      {item.status === "Out of Stock" && <FaTimesCircle />}
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 flex items-center justify-center sm:justify-start gap-3">
                    <button className="text-[#F97316] hover:text-orange-500">
                      <FaEdit />
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

export default ShopPage;
