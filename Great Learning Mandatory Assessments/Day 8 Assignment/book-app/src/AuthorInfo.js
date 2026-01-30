import React, { Component } from "react";

class AuthorInfo extends Component {
  componentDidMount() {
    console.log("AuthorInfo loaded", this.props.author);
  }

  render() {
    const { author } = this.props;

    if (!author) {
      return <p>Select a book to see author details</p>;
    }

    return (
      <div className="card p-3 mt-3">
        <h3>{author.name}</h3>
        <p>{author.bio}</p>

        <h5>Top Books:</h5>
        <ul>
          {author.topBooks.map((book, index) => (
            <li key={index}>{book}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AuthorInfo;
