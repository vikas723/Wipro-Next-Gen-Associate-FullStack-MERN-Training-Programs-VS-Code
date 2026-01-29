// const ProductManagement = () => {
//   return (
//     <div className="bg-white p-6 rounded shadow-md max-w-4xl mx-auto">
//       <h2 className="text-xl font-bold mb-4">Perfume Management</h2>

//       <input className="admin-input" placeholder="Perfume Name" />
//       <input className="admin-input" placeholder="Price" />
//       <input className="admin-input" placeholder="Stock Quantity" />
//       <input className="admin-input" placeholder="Image URL" />

//       <button className="admin-primary-btn">Add Perfume</button>
//     </div>
//   );
// };

// export default ProductManagement;


// import { useState } from "react";
// import { addPerfume } from "../services/perfumeService";
// const ProductManagement = () => {
//    const [form, setForm] = useState({
//     name: "",
//     price: "",
//     stock: "",
//     image: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleAddPerfume = async () => {
//     if (!form.name || !form.price || !form.stock || !form.image) {
//       alert("Please fill all fields");
//       return;
//     }

//     await addPerfume({
//       name: form.name,
//       price: Number(form.price),
//       stock: Number(form.stock),
//       image: form.image,
//     });

//     alert("Perfume added successfully");

//     setForm({ name: "", price: "", stock: "", image: "" });
//   };
//   return (
//     <div className="space-y-6">

//       {/* Info Banner */}
//       <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded-lg">
//         <p className="text-purple-800 font-medium">
//           Add and manage perfumes available in the store
//         </p>
//       </div>

//       {/* Form Card */}
//       <div className="bg-white rounded-xl shadow-md p-6">
//         <h3 className="text-xl font-semibold text-purple-700 mb-6">
//           Add New Perfume
//         </h3>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//           <Input label="Perfume Name" placeholder="Enter perfume name" />
//           <Input label="Price (₹)" placeholder="Enter price" />
//           <Input label="Stock Quantity" placeholder="Enter quantity" />
//           <Input label="Image URL" placeholder="Paste image URL" />
//         </div>

//         <div className="mt-6 text-right">
//           <button className="px-6 py-2 bg-linear-to-r from-purple-700 to-indigo-700 text-white rounded-lg shadow hover:opacity-90 transition">
//             Add Perfume
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Input = ({ label, name, value, onChange }) => (
//   <div>
//     <label className="block text-sm font-medium text-gray-700 mb-1">
//       {label}
//     </label>
//     <input
//       name={name}
//       value={value}
//       onChange={onChange}
//       className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
//     />
//   </div>
// );

// export default ProductManagement;
import { useState } from "react";
import { addPerfume } from "../services/perfumeService";

const ProductManagement = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    image: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Add perfume to backend
  const handleAddPerfume = async () => {
    if (!form.name || !form.price || !form.stock || !form.image) {
      alert("Please fill all fields");
      return;
    }

    await addPerfume({
      name: form.name,
      price: Number(form.price),
      stock: Number(form.stock),
      image: form.image,
    });

    alert("Perfume added successfully");

    // Reset form
    setForm({ name: "", price: "", stock: "", image: "" });
  };

  return (
    <div className="space-y-6">

      {/* Info Banner */}
      <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded-lg">
        <p className="text-purple-800 font-medium">
          Add and manage perfumes available in the store
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold text-purple-700 mb-6">
          Add New Perfume
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Input
            label="Perfume Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter perfume name"
          />

          <Input
            label="Price (₹)"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Enter price"
          />

          <Input
            label="Stock Quantity"
            name="stock"
            value={form.stock}
            onChange={handleChange}
            placeholder="Enter quantity"
          />

          <Input
            label="Image URL"
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="Paste image URL"
          />
        </div>

        <div className="mt-6 text-right">
          <button
            onClick={handleAddPerfume}
            className="px-6 py-2 bg-linear-to-r from-purple-700 to-indigo-700 text-white rounded-lg shadow hover:opacity-90 transition"
          >
            Add Perfume
          </button>
        </div>
      </div>
    </div>
  );
};

// Reusable Input Component
const Input = ({ label, name, value, onChange, placeholder }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
    />
  </div>
);

export default ProductManagement;
