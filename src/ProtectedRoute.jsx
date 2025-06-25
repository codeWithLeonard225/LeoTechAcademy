import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import Unauthorized from "./Unauthorized";

export default function ProtectedRoute({ children, allowedRoles }) {
  const { user } = useAuth();

  if (!user) {
    // not logged in
    return <Navigate to="/" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // logged in but no access
      return <Unauthorized />;
  }

  return children;
}
