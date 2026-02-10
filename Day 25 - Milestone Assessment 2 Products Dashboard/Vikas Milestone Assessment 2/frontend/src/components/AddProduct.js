import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ProductContext } from "../context/ProductContext";

function AddProduct() {
  const { setItems } = useContext(ProductContext);

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      category: "",
      description: ""
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      price: Yup.number().required("Price is required"),
      category: Yup.string().required("Category is required")
    }),
    onSubmit: async (values) => {
      await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });

      setItems(prev => [...prev, values]);
      alert("Added");
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className="p-3">
      <input
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Name"
      />
      {formik.touched.name && formik.errors.name && (
        <p style={{ color: "red" }}>{formik.errors.name}</p>
      )}

      <br/>

      <input
        name="price"
        value={formik.values.price}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Price"
      />
      {formik.touched.price && formik.errors.price && (
        <p style={{ color: "red" }}>{formik.errors.price}</p>
      )}

      <br/>

      <input
        name="category"
        value={formik.values.category}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Category"
      />
      {formik.touched.category && formik.errors.category && (
        <p style={{ color: "red" }}>{formik.errors.category}</p>
      )}

      <br/>

      <textarea
        name="description"
        value={formik.values.description}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <br/>

      <button type="submit">Add</button>
    </form>
  );
}

export default AddProduct;
