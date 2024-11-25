import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/App.css"; // Import global styles

// Render the React application
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
