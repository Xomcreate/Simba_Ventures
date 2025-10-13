import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, allowedRoles }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const userRole = localStorage.getItem("userRole");

  // If not logged in, redirect to home
  if (!isLoggedIn) return <Navigate to="/" replace />;

  // If user role not allowed, redirect to home
  if (allowedRoles && !allowedRoles.includes(userRole)) return <Navigate to="/" replace />;

  // If allowed, render the component
  return <Component />;
};

export default ProtectedRoute;
