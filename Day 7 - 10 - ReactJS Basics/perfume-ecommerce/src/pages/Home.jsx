// import Header from "../components/Header";

// const Home = () => {
//   return <Header />;
// };

// export default Home;

import { useEffect, useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import { getPerfumes } from "../services/perfumeService";

const Home = () => {
  const [perfumes, setPerfumes] = useState([]);

  useEffect(() => {
    getPerfumes().then(setPerfumes);
  }, []);
  const loadPerfumes = async () => {
    const data = await getPerfumes();
    setPerfumes(data);
  };

  return (
    <>
      <Header />

      <main className="px-10 pt-8 pb-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-700 mb-12">
          Our Perfume Collections
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {perfumes.map((p) => (
            <Card
              key={p.id}
              name={p.name}
              price={p.price}
              image={p.image}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;


// import { useEffect, useState } from "react";
// import Card from "../components/Card";
// import { getPerfumes } from "../services/perfumeService";

// const Home = () => {
//   const [perfumes, setPerfumes] = useState([]);

//   useEffect(() => {
//     loadPerfumes();
//   }, []);

//   const loadPerfumes = async () => {
//     const data = await getPerfumes();
//     setPerfumes(data);
//   };

//   return (
//     <>
//       {/* Header Section */}
//       <header className="pt-20 pb-10 px-10 bg-linear-to-b from-purple-50 to-white">
//         <div className="max-w-6xl mx-auto text-center">
//           <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
//             <span className="text-purple-700">Luxury Fragrances</span>
//             <br />
//             <span className="text-purple-700">For Every Mood.</span>
//           </h1>

//           <p className="mt-4 text-lg text-slate-600">
//             Experience premium perfumes crafted to leave a lasting impression.
//           </p>
//         </div>
//       </header>

//       {/* Product Section */}
//       <section className="px-10 pt-10 pb-20 max-w-6xl mx-auto">
//         <h2 className="text-2xl font-bold text-center mb-8">
//           Our Perfume Collections
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {perfumes.map((p) => (
//             <Card
//               key={p.id}
//               name={p.name}
//               price={p.price}
//               image={p.image}
//             />
//           ))}
//         </div>
//       </section>
//     </>
//   );
// };

// export default Home;
