import React from "react";
import "./index.css"; // Ensure Tailwind is imported here

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center justify-center">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-2">Equipment Manager</h1>
        <p className="text-gray-600">Manage, monitor, and maintain your medical equipment efficiently.</p>
      </header>

      <main className="grid gap-4 w-full max-w-lg px-4">
        <div className="p-4 bg-white shadow rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Total Equipment</h2>
          <p className="text-2xl font-bold text-green-600">120</p>
        </div>

        <div className="p-4 bg-white shadow rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Under Maintenance</h2>
          <p className="text-2xl font-bold text-yellow-500">8</p>
        </div>

        <div className="p-4 bg-white shadow rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Active Technicians</h2>
          <p className="text-2xl font-bold text-blue-500">5</p>
        </div>
      </main>
    </div>
  );
}

export default App;
