import React, { Component, createRef } from "react";

class SearchBox extends Component {
  inputRef = createRef();

  focusInput = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div className="mb-3">
        <input
          type="text"
          ref={this.inputRef}
          className="form-control"
          placeholder="Search book..."
        />
        <button className="btn btn-primary mt-2" onClick={this.focusInput}>
          Focus Search
        </button>
      </div>
    );
  }
}

export default SearchBox;
