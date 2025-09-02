import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeWork from "./components/HomeWork";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeWork />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
