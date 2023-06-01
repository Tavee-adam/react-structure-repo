import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRouted from "../../../routes/ProtectedRoutes";
import Dashboard from "../../../pages/dashboard/Index";
import Homepage from "../../../pages/home/Index";
import Login from "../../../pages/login/Index";

const Body = () => {
  return (
    <Routes>
      <Route element={<ProtectedRouted />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Body;
