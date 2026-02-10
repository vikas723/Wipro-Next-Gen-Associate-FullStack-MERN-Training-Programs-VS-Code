import React, { Component } from "react";
import ProductCard from "./ProductCard";

class ProductList extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "Laptop",
        price: 50000,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        favorite: false
      },
      {
        id: 2,
        name: "Shoes",
        price: 2000,
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hvZXN8ZW58MHx8MHx8fDA%3D",
        favorite: false
      }
    ]
  };

  toggleFav = (id) => {
    const arr = this.state.products.map(p => {
      if (p.id === id) {
        return { ...p, favorite: !p.favorite };
      }
      return p;
    });

    this.setState({ products: arr });
  };

  render() {
    return (
      <div className="row">
        {this.state.products.map(p => (
          <ProductCard key={p.id} item={p} onFav={this.toggleFav} />
        ))}
      </div>
    );
  }
}

export default ProductList;
