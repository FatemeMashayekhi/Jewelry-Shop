import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../utility/authUtils";

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { accessToken } = useAuth();

  if (!accessToken) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;