import React from "react";
import BookList from "../components/BookList";

const Home = ({ store }) => {
  return (
    <div>
      <h1>BookVerse</h1>
      <BookList store={store} />
    </div>
  );
};

export default Home;
