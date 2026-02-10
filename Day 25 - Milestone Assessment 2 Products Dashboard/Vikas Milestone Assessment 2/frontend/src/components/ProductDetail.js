import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

function ProductDetail() {
  
    const {id} = useParams();
    const[ data, setData] = useState(null);
    const[loading, setLoading] = useState(true);
    const[err, setErr] = useState("")

    useEffect(() => {
    async function load() {
      try {
        const res = await fetch("http://localhost:5000/products/" + id);
        const d = await res.json();
        setData(d);
      } catch {
        setErr("Error loading product");
      }
      setLoading(false);
    }
    load();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (err) return <p>{err}</p>;

  return (
    <div>
      <h3>{data.name}</h3>
      <img src={data.image} width="200" alt="img"/>
      <p>{data.description}</p>
      <p>Rs. {data.price}</p>
    </div>
  );
}

export default ProductDetail;
