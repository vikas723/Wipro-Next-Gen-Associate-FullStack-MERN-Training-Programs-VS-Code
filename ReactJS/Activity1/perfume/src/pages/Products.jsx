// import { useEffect, useState } from "react";
// import Card from "../components/Card";
// import { getPerfumes, deletePerfume } from "../services/perfumeService";

// const Products = () => {
//   const [perfumes, setPerfumes] = useState([]);

//   const loadPerfumes = async () => {
//     const data = await getPerfumes();
//     setPerfumes(data);
//   };

//   useEffect(() => {
//     loadPerfumes();
//   }, []);

//   const handleDelete = async (id) => {
//     await deletePerfume(id);
//     loadPerfumes();
//   };

//   return (
//     <main className="px-10 pt-8 pb-20 max-w-6xl mx-auto">
//       <h2 className="text-3xl font-bold text-center mb-12">
//         Our Perfume Collections
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//         {perfumes.map((p) => (
//           <div key={p.id}>
//             <Card name={p.name} price={p.price} image={p.image} />
//             <button
//               className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
//               onClick={() => handleDelete(p.id)}
//             >
//               Delete
//             </button>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// };

// export default Products;

import { useEffect, useState } from "react";
import Card from "../components/Card";
import { getPerfumes, deletePerfume, addPerfume } from "../services/perfumeService";

const Products = () => {
  const [perfumes, setPerfumes] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", image: "" });

  const loadPerfumes = async () => {
    const data = await getPerfumes();
    setPerfumes(data);
  };

  useEffect(() => {
    loadPerfumes();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    await addPerfume({ ...form, price: Number(form.price) });
    setForm({ name: "", price: "", image: "" });
    loadPerfumes();
  };

  const handleDelete = async (id) => {
    await deletePerfume(id);
    loadPerfumes();
  };

  return (
    <main className="px-10 pt-8 pb-20 max-w-6xl mx-auto">

      <h2 className="text-3xl font-bold text-center mb-8">
        Manage Products
      </h2>

      {/* ADD PRODUCT FORM */}
      <form onSubmit={handleAdd} className="mb-10 flex gap-3">
        <input
          placeholder="Name"
          className="border p-2 rounded w-full"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Price"
          className="border p-2 rounded w-full"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <input
          placeholder="Image URL"
          className="border p-2 rounded w-full"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />
        <button className="bg-purple-600 text-white px-4 rounded">
          Add
        </button>
      </form>

      {/* PRODUCT LIST */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {perfumes.map((p) => (
          <div key={p.id}>
            <Card name={p.name} price={p.price} image={p.image} />
            <button
              onClick={() => handleDelete(p.id)}
              className="mt-2 w-full bg-red-500 text-white py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

    </main>
  );
};

export default Products;
