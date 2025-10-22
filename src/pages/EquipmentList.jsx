import React, { useEffect, useState } from "react";
import { getEquipment, addEquipment, deleteEquipment } from "../api/equipmentApi";
import EquipmentCard from "../components/EquipmentCard";
import AddEquipmentForm from "./components/AddEquipmentForm";
export default function EquipmentList() {
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    getEquipment().then(setEquipment);
  }, []);

  const handleAdd = async (newItem) => {
    const added = await addEquipment(newItem);
    setEquipment([...equipment, added]);
  };

  const handleDelete = async (id) => {
    await deleteEquipment(id);
    setEquipment(equipment.filter(item => item.id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Equipment List</h2>
      <AddEquipmentForm onAdd={handleAdd} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {equipment.map(item => (
          <EquipmentCard key={item.id} equipment={item} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}
