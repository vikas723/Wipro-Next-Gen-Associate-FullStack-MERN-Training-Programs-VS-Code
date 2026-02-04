import React from "react";
import InventoryList from "./components/InventoryList";

function App() {
  const products = [
    { id: 1, name: "Laptop", price: 50000, category: "Electronics" },
    { id: 2, name: "Shoes", price: 2000, category: "Fashion" },
    { id: 3, name: "Phone", price: 30000, category: "Electronics" }
  ];

  return (
    <div className="container mt-4">
      <h2>Inventory Catalog</h2>
      <InventoryList products={products} />
    </div>
  );
}

export default App;

