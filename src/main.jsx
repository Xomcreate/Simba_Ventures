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


// You can add more page components like Shop, Contact, etc.

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
           <Route path="/shop" element={<Shopper/>} />
            <Route path="/admin" element={<Admin/>} />
             <Route path="/user" element={<User/>} />
          
        {/* Add more routes as needed */}
      </Routes>
     
      <Footer/>
    </Router>
  </StrictMode>
);
