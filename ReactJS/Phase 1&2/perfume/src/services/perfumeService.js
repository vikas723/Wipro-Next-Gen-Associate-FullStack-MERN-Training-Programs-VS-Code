const BASE_URL = "http://localhost:3001/perfumes";

export const getPerfumes = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const addPerfume = async (perfume) => {
  await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(perfume),
  });
};

export const deletePerfume = async (id) => {
  await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
};

export const updatePerfume = async (id, perfume) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(perfume),
  });
};
