import { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ProductContext } from "../context/ProductContext";

function AddProduct() {
  const { addProduct } = useContext(ProductContext);

  const formik = useFormik({
    initialValues: { name: "", price: "", category: "" },

    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      price: Yup.number().required("Required"),
      category: Yup.string().required("Required")
    }),

    onSubmit: (values, { resetForm }) => {
      fetch("http://localhost:5001/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      })
        .then(res => res.json())
        .then(data => {
          addProduct(data);   
          resetForm();
          alert("Product Added");
        });
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <p>{formik.errors.name}</p>

      <input
        name="price"
        placeholder="Price"
        onChange={formik.handleChange}
        value={formik.values.price}
      />
      <p>{formik.errors.price}</p>

      <input
        name="category"
        placeholder="Category"
        onChange={formik.handleChange}
        value={formik.values.category}
      />
      <p>{formik.errors.category}</p>

      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProduct;
