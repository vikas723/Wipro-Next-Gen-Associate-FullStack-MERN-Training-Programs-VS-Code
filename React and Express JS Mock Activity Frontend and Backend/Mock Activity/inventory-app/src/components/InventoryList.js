import React from "react";
import InventoryCard from "./InventoryCard";

function InventoryList({ products }) {
  return (
    <div className="row">
      {products.map((item) => (
        <InventoryCard key={item.id} product={item} />
      ))}
    </div>
  );
}

export default InventoryList;
