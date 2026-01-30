import AppDispatcher from "../dispatcher/AppDispatcher";

export const addBook = (book) => {
  AppDispatcher.dispatch({
    type: "ADD_BOOK",
    payload: book
  });
};
