

import AppDispatcher from "../dispatcher/AppDispatcher";

class BookStore {
  constructor() {
    this.books = [];
    this.listeners = [];

    AppDispatcher.register(this.handleActions.bind(this));
  }

  handleActions(action) {
    switch (action.type) {
      case "ADD_BOOK":
        this.books.push(action.payload);
        this.emitChange();
        break;
      default:
        break;
    }
  }

  getBooks() {
    return this.books;
  }

  addListener(listener) {
    this.listeners.push(listener);
  }

  emitChange() {
    this.listeners.forEach(listener => listener());
  }
}

export default BookStore;
