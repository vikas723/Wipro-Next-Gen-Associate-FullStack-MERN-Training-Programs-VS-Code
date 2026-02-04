import React, { useState } from "react";

function InventoryCard({ product }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="col-md-4 mb-3">
      <div className="card p-3">
        <h5>{product.name}</h5>
        <p>Price: ₹{product.price}</p>
        <p>Category: {product.category}</p>

        <button
          className={`btn ${favorite ? "btn-danger" : "btn-outline-primary"}`}
          onClick={() => setFavorite(!favorite)}
        >
          {favorite ? "Unfavorite" : "Favorite"}
        </button>
      </div>
    </div>
  );
}

export default InventoryCard;
