import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-3 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl">Equipment Manager</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-200">Dashboard</Link>
          <Link to="/equipment" className="hover:text-gray-200">Equipment</Link>
        </div>
      </div>
    </nav>
  );
}
