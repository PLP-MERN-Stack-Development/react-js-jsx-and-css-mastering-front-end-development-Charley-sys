import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import EquipmentList from "./pages/EquipmentList";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <Navbar />
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/equipment" element={<EquipmentList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
