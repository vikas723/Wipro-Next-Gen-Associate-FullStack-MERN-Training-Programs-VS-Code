import { useEffect, useState } from "react";
import {
  getPerfumes,
  addPerfume,
  updatePerfume,
  deletePerfume,
} from "../services/perfumeService";

const AdminProducts = () => {
  const [perfumes, setPerfumes] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    image: "",
  });

  const loadPerfumes = async () => {
    const data = await getPerfumes();
    setPerfumes(data);
  };

  useEffect(() => {
    loadPerfumes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      await updatePerfume(editingId, {
        ...form,
        price: Number(form.price),
        stock: Number(form.stock),
      });
    } else {
      await addPerfume({
        ...form,
        price: Number(form.price),
        stock: Number(form.stock),
      });
    }

    setForm({ name: "", price: "", stock: "", image: "" });
    setEditingId(null);
    loadPerfumes();
  };

  const handleEdit = (p) => {
    setEditingId(p.id);
    setForm({
      name: p.name,
      price: p.price,
      stock: p.stock,
      image: p.image,
    });
  };

  const handleDelete = async (id) => {
    await deletePerfume(id);
    loadPerfumes();
  };

  return (
    <div className="space-y-10">

      {/* ADD / EDIT FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md"
      >
        <h3 className="text-xl font-bold text-purple-700 mb-4">
          {editingId ? "Edit Perfume" : "Add New Perfume"}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            placeholder="Perfume Name"
            className="border p-2 rounded"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            placeholder="Price"
            type="number"
            className="border p-2 rounded"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            required
          />
          <input
            placeholder="Stock"
            type="number"
            className="border p-2 rounded"
            value={form.stock}
            onChange={(e) => setForm({ ...form, stock: e.target.value })}
            required
          />
          <input
            placeholder="Image URL"
            className="border p-2 rounded"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
          />
        </div>

        <button
          className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg"
        >
          {editingId ? "Update Perfume" : "Add Perfume"}
        </button>
      </form>

      {/* PRODUCT LIST */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold text-purple-700 mb-4">
          Product List
        </h3>

        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {perfumes.map((p) => (
              <tr key={p.id} className="border-b">
                <td>{p.name}</td>
                <td>₹ {p.price}</td>
                <td>{p.stock}</td>
                <td className="space-x-2">
                  <button
                    onClick={() => handleEdit(p)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default AdminProducts;
