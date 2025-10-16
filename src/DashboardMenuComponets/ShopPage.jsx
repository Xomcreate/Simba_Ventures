import React, { useState, useEffect } from "react";
import { FaPlus, FaTrashAlt } from "react-icons/fa";
import axios from "axios";

const API_URL = "http://localhost:5000/api/products"; // backend URL

function ShopPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    description: "",
  });
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  // Fetch all products
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API_URL);
      setProducts(res.data);
      const uniqueCats = ["All", ...new Set(res.data.map((p) => p.category))];
      setCategories(uniqueCats);
    } catch (err) {
      console.error("Error fetching products:", err);
      setMessage("Error fetching products.");
    } finally {
      setLoading(false);
    }
  };

  // Handle form submission (create product)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const data = new FormData();
      Object.entries(form).forEach(([key, value]) => data.append(key, value));
      if (image) data.append("image", image);

      await axios.post(API_URL, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage("✅ Product added successfully!");
      setShowForm(false);
      setForm({
        name: "",
        category: "",
        price: "",
        stock: "",
        description: "",
      });
      setImage(null);
      fetchProducts();
    } catch (err) {
      console.error("Error adding product:", err);
      setMessage("❌ Failed to add product. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      await axios.delete(`${API_URL}/${id}`);
      setMessage("🗑️ Product deleted successfully!");
      fetchProducts();
    } catch (err) {
      console.error("Error deleting product:", err);
      setMessage("❌ Failed to delete product.");
    }
  };

  // Filter by category
  const filtered =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      {/* ===== Header ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-8 flex flex-col sm:flex-row items-center justify-between">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#02081d] mb-4 sm:mb-0">
          Admin Product Management
        </h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-[#F97316] text-white px-5 py-2 rounded-lg font-semibold hover:bg-orange-600 transition flex items-center gap-2"
        >
          <FaPlus />
          {showForm ? "Close Form" : "Add Product"}
        </button>
      </div>

      {/* ===== Status Message ===== */}
      {message && (
        <div className="max-w-4xl mx-auto bg-white shadow p-3 rounded-lg mb-4 text-center text-gray-700 font-medium">
          {message}
        </div>
      )}

      {/* ===== Add Product Form ===== */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto bg-white shadow p-6 rounded-xl grid sm:grid-cols-2 gap-4 mb-8"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Product Name"
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            name="category"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            placeholder="Category"
            className="border p-2 rounded"
            required
          />
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            placeholder="Price"
            className="border p-2 rounded"
            required
          />
          <input
            type="number"
            name="stock"
            value={form.stock}
            onChange={(e) => setForm({ ...form, stock: e.target.value })}
            placeholder="Stock Quantity"
            className="border p-2 rounded"
            required
          />
          <textarea
            name="description"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
            placeholder="Description (optional)"
            className="border p-2 rounded sm:col-span-2"
            rows="3"
          ></textarea>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="sm:col-span-2"
          />

          {image && (
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              className="w-32 h-32 object-cover rounded-lg mx-auto sm:col-span-2"
            />
          )}

          <button
            type="submit"
            disabled={loading}
            className={`sm:col-span-2 bg-[#F97316] text-white py-2 rounded-lg font-semibold transition ${
              loading ? "opacity-60 cursor-not-allowed" : "hover:bg-orange-600"
            }`}
          >
            {loading ? "Uploading..." : "Submit Product"}
          </button>
        </form>
      )}

      {/* ===== Main Layout ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Categories Sidebar */}
        <div className="md:w-1/5 bg-white rounded-2xl shadow-md p-4 sm:p-6 sticky top-20 h-fit">
          <h3 className="text-lg sm:text-xl font-bold text-[#02081d] mb-4">
            Categories
          </h3>
          <ul className="flex flex-row md:flex-col gap-2 md:gap-3 overflow-x-auto md:overflow-visible">
            {categories.map((cat) => (
              <li
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`cursor-pointer px-3 sm:px-4 py-2 rounded-lg font-semibold transition-all flex-shrink-0 md:flex-shrink-auto ${
                  selectedCategory === cat
                    ? "bg-[#F97316] text-white shadow-md"
                    : "hover:bg-[#F97316]/20 hover:text-[#F97316]"
                }`}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* Product Cards */}
        <div className="md:w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filtered.map((p) => (
            <div
              key={p._id}
              className="relative bg-white rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col items-center text-center transition-transform transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <img
                src={p.imgUrl} // Cloudinary image URL
                alt={p.name}
                className="w-32 sm:w-44 md:w-48 h-32 sm:h-44 md:h-48 object-contain mb-3 sm:mb-5 rounded-lg"
              />
              <p className="text-sm text-gray-500 mb-1">{p.category}</p>
              <h4 className="font-bold text-md sm:text-lg text-[#02081d] mb-2">
                {p.name}
              </h4>
              <p className="text-sm text-gray-600 mb-2">
                ₦{Number(p.price).toLocaleString()}
              </p>
              <button
                onClick={() => handleDelete(p._id)}
                className="mt-2 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 flex items-center gap-2 justify-center text-sm sm:text-base"
              >
                <FaTrashAlt />
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Empty State ===== */}
      {!loading && filtered.length === 0 && (
        <p className="text-center text-gray-500 mt-6">No products found.</p>
      )}
    </div>
  );
}

export default ShopPage;
