import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h3>Products</h3>
      {products.map(p => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  );
}
