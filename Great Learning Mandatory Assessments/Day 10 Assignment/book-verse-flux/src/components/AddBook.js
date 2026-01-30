



import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { addBook } from "../actions/BookActions";

const AddBook = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      price: ""
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      author: Yup.string().required("Author is required"),
      price: Yup.number().required("Price is required")
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Submitting:", values); // DEBUG
      addBook(values);
      alert("Book Added Successfully!");
      resetForm();
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        name="title"
        placeholder="Title"
        onChange={formik.handleChange}
        value={formik.values.title}
      />
      <p>{formik.errors.title}</p>

      <input
        name="author"
        placeholder="Author"
        onChange={formik.handleChange}
        value={formik.values.author}
      />
      <p>{formik.errors.author}</p>

      <input
        name="price"
        placeholder="Price"
        onChange={formik.handleChange}
        value={formik.values.price}
      />
      <p>{formik.errors.price}</p>

      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
