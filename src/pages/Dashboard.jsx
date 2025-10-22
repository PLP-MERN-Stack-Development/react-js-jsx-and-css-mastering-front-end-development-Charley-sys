import React, { useEffect, useState } from "react";
import { getEquipment } from "../api/equipmentApi";

export default function Dashboard() {
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    getEquipment().then(setEquipment);
  }, []);

  const total = equipment.length;
  const available = equipment.filter(e => e.status === "Available").length;
  const inUse = equipment.filter(e => e.status === "In Use").length;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-gray-600">Total Equipment</h3>
          <p className="text-3xl font-bold">{total}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-gray-600">Available</h3>
          <p className="text-3xl font-bold text-green-600">{available}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-gray-600">In Use</h3>
          <p className="text-3xl font-bold text-yellow-600">{inUse}</p>
        </div>
      </div>
    </div>
  );
}
