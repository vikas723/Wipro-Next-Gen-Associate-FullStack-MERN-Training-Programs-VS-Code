import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
function ProductDetail() {
  const {id} = useParams();
  const [product, setProduct] = useState(null);
  const[loading, setLoading] = useState(null);

  useEffect(()=>{
    fetch(`http://localhost:3001/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);
  if(loading) return <h2>  Loading</h2>;
  if(!product) return <h2> No Products Found</h2>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p> Price: Rs{product.price}</p>
      <p> Category: {product.Category}</p>
    </div>
  )
}

export default ProductDetail
