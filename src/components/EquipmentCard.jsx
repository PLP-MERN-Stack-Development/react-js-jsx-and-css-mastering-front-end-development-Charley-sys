import React from "react";

export default function EquipmentCard({ equipment, onDelete }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="font-semibold text-lg">{equipment.name}</h3>
      <p className="text-gray-500">{equipment.category}</p>
      <p className={`mt-2 font-medium ${
        equipment.status === "Available" ? "text-green-600" : "text-yellow-600"
      }`}>
        {equipment.status}
      </p>
      <button
        onClick={() => onDelete(equipment.id)}
        className="mt-4 bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
      >
        Delete
      </button>
    </div>
  );
}
