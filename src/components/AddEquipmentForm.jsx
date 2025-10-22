import React, { useState } from "react";

export default function AddEquipmentForm({ onAdd }) {
  const [form, setForm] = useState({ name: "", category: "", status: "Available" });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    setForm({ name: "", category: "", status: "Available" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl shadow flex flex-col md:flex-row gap-4">
      <input
        type="text"
        placeholder="Equipment name"
        className="border p-2 rounded w-full"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Category"
        className="border p-2 rounded w-full"
        value={form.category}
        onChange={e => setForm({ ...form, category: e.target.value })}
        required
      />
      <select
        className="border p-2 rounded"
        value={form.status}
        onChange={e => setForm({ ...form, status: e.target.value })}
      >
        <option>Available</option>
        <option>In Use</option>
      </select>
      <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
        Add
      </button>
    </form>
  );
}
