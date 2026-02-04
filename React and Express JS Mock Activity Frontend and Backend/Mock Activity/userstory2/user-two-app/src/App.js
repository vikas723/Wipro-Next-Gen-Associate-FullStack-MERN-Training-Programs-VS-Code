
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./pages/productList";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
   
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    
  );
}

export default App;
