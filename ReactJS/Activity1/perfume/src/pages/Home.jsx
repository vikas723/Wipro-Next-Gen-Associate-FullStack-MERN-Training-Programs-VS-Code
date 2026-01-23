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
