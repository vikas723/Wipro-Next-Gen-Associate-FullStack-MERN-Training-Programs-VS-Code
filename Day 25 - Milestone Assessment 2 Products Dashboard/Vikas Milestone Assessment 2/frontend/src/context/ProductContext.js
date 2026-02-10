import { createContext, useState } from "react";

export const ProductContext = createContext();

function ProductProvider({ children }) {
  const [items, setItems] = useState([]);

  return (
    <ProductContext.Provider value={{ items, setItems }}>
      {children}
    </ProductContext.Provider>
  );
}
export default ProductProvider
