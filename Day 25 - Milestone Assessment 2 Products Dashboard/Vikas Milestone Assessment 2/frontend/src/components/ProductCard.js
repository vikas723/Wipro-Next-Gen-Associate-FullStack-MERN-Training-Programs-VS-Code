import React from "react";

function ProductCard({ item, onFav }) {
  return (
    <div className="col-md-4 mb-3">
     <div className="card h-100">

    <img
      src={item.image}
      alt="product"
      className="card-img-top"
      style={{
        width: "100%",
        height: "200px",
        objectFit: "cover"
      }}
    />
    <div className="card-body">
      <h5>{item.name}</h5>
      <p>Rs. {item.price}</p>
      <p>{item.category}</p>
    </div>

    <button
      className={`btn m-2 ${item.favorite ? "btn-danger" : "btn-warning"}`}
      onClick={() => onFav(item.id)}
    >
      {item.favorite ? "Unfavorite" : "Favorite"}
    </button>

  </div>
</div>

  );
}

export default ProductCard;
