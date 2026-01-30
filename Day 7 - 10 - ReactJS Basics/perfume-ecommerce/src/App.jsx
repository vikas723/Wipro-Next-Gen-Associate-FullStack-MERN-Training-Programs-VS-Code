// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import withAuth from "./hoc/withAuth";
import AdminDashboard from "./pages/AdminDashboard";
// import { NotificationProvider } from "./context/NotificationContext";
// import NotificationBar from "./components/NotificationBar";

const ProtectedAdmin2 = withAuth(AdminDashboard);

const App = () => {
  const [cart, setCart] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");


  // ADD or INCREASE quantity
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // DECREASE quantity
  const decreaseFromCart = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // DELETE product completely
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  
  };

  // TOTAL cart count
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <AuthProvider>
       <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="colored"
        bodyClassName="text-lg font-semibold" 
    />
      {/* <NotificationProvider>
        <NotificationBar/>
       </NotificationProvider> */}

    <div className="min-h-screen flex flex-col">
      <Navbar cartCount={cartCount}  setSearchTerm={setSearchTerm}/>
          <main className="grow"></main>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route
          path="/products"
          element={<Products addToCart={addToCart} searchTerm={searchTerm} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              addToCart={addToCart}
              decreaseFromCart={decreaseFromCart}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<ProtectedAdmin2/>}/> 
        <Route path="/admin-dashboard" element={<ProtectedAdmin2 />} /> 

      </Routes>
      
      <Footer />
    </div>
    </AuthProvider>
  );
};

export default App;

