import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import Navbar from "./MainComponets/Navbar.jsx";
import Home from "./MainComponets/Home.jsx";
import About from "./MainComponets/About.jsx";
import Contact from "./MainComponets/Contact.jsx";
import Footer from "./MainComponets/Footer.jsx";
import Shopper from "./MainComponets/Shopper.jsx";
import Admin from "./DashboardComponets/Admin.jsx";
import User from "./DashboardComponets/User.jsx";
import ProtectedRoute from "./utils/ProtectedRoute.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shopper />} />

        {/* Protected Routes */}
        <Route
          path="/admin"
          element={<ProtectedRoute element={Admin} allowedRoles={["admin"]} />}
        />
        <Route
          path="/user"
          element={<ProtectedRoute element={User} allowedRoles={["user"]} />}
        />

        {/* Optional catch-all */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);
