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



// import Navbar from "./components/Navbar";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Card from "./components/Card";

// const App = () => {

  
//   const perfumes = [
//   {
//     id: 1,
//     name: "Rose Essence",
//     price: 2499,
//     image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=400&q=80",
//   },
//   {
//     id: 2,
//     name: "Ocean Breeze",
//     price: 1999,
//     image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=400&q=80",
//   },
//   {
//     id: 3,
//     name: "Mystic Oud",
//     price: 3499,
//     image: "https://images.unsplash.com/photo-1608528577891-eb055944f2e7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 4,
//     name: "Vanilla Bloom",
//     price: 1799,
//     image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=400&q=80",
//   },
//   {
//     id: 5,
//     name: "Amber Nights",
//     price: 2899,
//     image: "https://images.unsplash.com/photo-1535683577427-740aaac4ec25?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 6,
//     name: "Citrus Bliss",
//     price: 1599,
//     image: "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 7,
//     name: "Royal Musk",
//     price: 3799,
//     image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 8,
//     name: "Lavender Dream",
//     price: 1899,
//     image: "https://images.unsplash.com/photo-1595425959632-34f2822322ce?q=80&w=1098&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
// ];

  

//   return (
//     <div className="min-h-screen flex flex-col">

//       <Navbar />
//       <Header />

//       <main
//         id="products"
//         className="px-10 pt-8 pb-20 max-w-6xl mx-auto"
//       >
//         <h2 className="text-3xl font-bold text-center text-slate-700 mb-12">
//           Our Perfume Collections
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {perfumes.map((perfume) => (
//             <Card
//               key={perfume.id}
//               name={perfume.name}
//               price={perfume.price}
//               image={perfume.image}
//             />
//           ))}
//         </div>
//       </main>

//       <Footer />

//     </div>
//   );
// };

// export default App;

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
        <main className="grow"></main> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
