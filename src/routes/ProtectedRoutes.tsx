import React from "react";
import { Outlet, Navigate } from "react-router-dom";
const ProtectedRouted = () => {
  let token = true;
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRouted;
