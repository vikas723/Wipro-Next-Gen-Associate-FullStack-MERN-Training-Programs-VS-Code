import React, { useState } from "react";

function Inventory() {

  const [stock, setStock] = useState(10);

  return (
    <div className="bg-amber-400 p-6 rounded shadow w-72 text-center">
      <h1 className="text-2xl font-bold mb-4">Inventory Manager</h1>

        {/*Inventory count*/}
      <p className="text-3xl font-semibold mb-6">
        Stock Available: {stock}
      </p>

    {/*Action Buttons*/}
      <div className="flex justify-between gap-4">
    {/*Add the stock*/}
        <button
        
          className="bg-green-700 text-white px-4 py-2 rounded"
          onClick={() => setStock(stock + 1)}
        >
          Add Stock
        </button>

        {/*Remove stock disabled when stock is 0*/}
        <button
          className={`px-4 py-2 rounded ${
            stock === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-700 text-white"
          }`}
          onClick={() => setStock(stock - 1)}
          disabled={stock === 0}
        >
          Remove Stock
        </button>
      </div>
    </div>
  );
}

export default Inventory;
