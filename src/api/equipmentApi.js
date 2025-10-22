export async function getEquipment() {
  const data = JSON.parse(localStorage.getItem("equipment")) || [];
  return data;
}

export async function addEquipment(item) {
  const data = JSON.parse(localStorage.getItem("equipment")) || [];
  const newItem = { id: Date.now(), ...item };
  data.push(newItem);
  localStorage.setItem("equipment", JSON.stringify(data));
  return newItem;
}

export async function deleteEquipment(id) {
  const data = JSON.parse(localStorage.getItem("equipment")) || [];
  const updated = data.filter(item => item.id !== id);
  localStorage.setItem("equipment", JSON.stringify(updated));
  return true;
}
