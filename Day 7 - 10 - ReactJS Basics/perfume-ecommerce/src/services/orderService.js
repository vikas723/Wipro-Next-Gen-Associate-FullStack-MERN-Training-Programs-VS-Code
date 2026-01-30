const BASE_URL = "http://localhost:3001/perfumes";

export const getOrders = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const updateOrderStatus = async (id, status) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });
  return res.json();
};
