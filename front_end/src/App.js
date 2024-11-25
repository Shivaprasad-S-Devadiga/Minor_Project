import React from "react";
import Navbar from "./components/Navbar";
import LeafDetection from "./components/LeafDetection";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <LeafDetection />
      </div>
    </div>
  );
}

export default App;
