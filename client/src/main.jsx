import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./components/Navbar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar/>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
