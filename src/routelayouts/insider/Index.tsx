//packages and libs
import React from "react";

//components
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

//styles
import "./style/index.css";

const Index = () => {
  return (
    <div className="appIn">
      <div className="headerIn">
        <Navbar />
      </div>
      <div className="bodyIn">
        <div className="sideIn">
          <Sidebar />
        </div>
        <div className="mainIn">
          <Body />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
