import React, { useState } from "react";
import "./App.css";
import Insider from "./routelayouts/insider/Index";
import Outsider from "./routelayouts/outsider/Index";

function App() {
  const token: Boolean = true;

  return <div className="App">{token ? <Insider /> : <Outsider />}</div>;
}

export default App;
