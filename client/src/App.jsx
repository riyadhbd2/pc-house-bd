import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar stays at the top */}
      <Navbar />
      {/* Main Content Area */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      {/* Footer stays at the bottom */}
      <Footer />
    </div>
  );
};

export default App;
