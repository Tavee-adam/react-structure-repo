import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

import Homepage from "../../pages/home/Index";
const Outsider = () => {
  return (
    <div className="app">
      <div className="header">
        <Header />
        <Navbar />
      </div>
      <div className="body">
        <Body />
        <Footer />
      </div>
    </div>
  );
};

export default Outsider;
