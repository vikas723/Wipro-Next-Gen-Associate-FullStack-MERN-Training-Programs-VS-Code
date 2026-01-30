// const About = () => {
//   return (
//     <main className="bg-white">

//       {/* ================= HERO SECTION ================= */}
//       <section className="bg-linear-to-r from-purple-900 via-purple-700 to-indigo-800 text-white py-24">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <h1 className="text-5xl font-extrabold tracking-wide mb-6">
//             About Aura Perfumes
//           </h1>
//           <p className="text-lg max-w-3xl mx-auto text-purple-100">
//             Where luxury fragrances meet timeless elegance.
//             Crafted to elevate your presence and express your individuality.
//           </p>
//         </div>
//       </section>

//       {/* ================= STORY SECTION ================= */}
//       <section className="py-20 max-w-6xl mx-auto px-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

//           {/* Text */}
//           <div>
//             <h2 className="text-3xl font-bold text-purple-800 mb-4">
//               Our Story
//             </h2>
//             <p className="text-gray-700 leading-relaxed mb-4">
//               Aura Perfumes was born from a passion for fine fragrances
//               and the belief that a scent is more than just a fragrance —
//               it’s a signature, a memory, and a statement.
//             </p>
//             <p className="text-gray-700 leading-relaxed">
//               Every perfume in our collection is carefully curated using
//               premium ingredients, blending modern sophistication with
//               timeless luxury. We craft fragrances that stay with you
//               and leave a lasting impression wherever you go.
//             </p>
//           </div>

//           {/* Image */}
//           <div className="rounded-2xl overflow-hidden shadow-xl">
//             <img
//               src="https://images.unsplash.com/photo-1594035910387-fea47794261f"
//               alt="Luxury Perfume"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </section>

//       {/* ================= WHY CHOOSE US ================= */}
//       <section className="bg-purple-50 py-20">
//         <div className="max-w-6xl mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">
//             Why Choose Aura Perfumes?
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

//             <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
//               <h3 className="text-xl font-semibold text-purple-700 mb-3">
//                 Premium Ingredients
//               </h3>
//               <p className="text-gray-600">
//                 We use only the finest fragrance oils and blends
//                 to ensure long-lasting and luxurious scents.
//               </p>
//             </div>

//             <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
//               <h3 className="text-xl font-semibold text-purple-700 mb-3">
//                 Crafted with Care
//               </h3>
//               <p className="text-gray-600">
//                 Each perfume is thoughtfully designed to balance
//                 elegance, strength, and individuality.
//               </p>
//             </div>

//             <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
//               <h3 className="text-xl font-semibold text-purple-700 mb-3">
//                 For Every Mood
//               </h3>
//               <p className="text-gray-600">
//                 From fresh florals to deep musks, Aura Perfumes
//                 offers scents for every occasion and personality.
//               </p>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* ================= MISSION ================= */}
//       <section className="py-20 max-w-5xl mx-auto px-6 text-center">
//         <h2 className="text-3xl font-bold text-purple-800 mb-6">
//           Our Mission
//         </h2>
//         <p className="text-gray-700 text-lg leading-relaxed">
//           Our mission is to empower confidence through fragrance.
//           We aim to make luxury perfumes accessible while maintaining
//           the highest standards of quality, creativity, and elegance.
//         </p>
//       </section>

//       {/* ================= CTA ================= */}
//       <section className="bg-linear-to-r from-purple-800 to-indigo-800 py-20 text-center text-white">
//         <h2 className="text-4xl font-bold mb-4">
//           Discover Your Signature Scent
//         </h2>
//         <p className="mb-8 text-purple-100">
//           Explore our curated collection and find the fragrance
//           that truly defines you.
//         </p>
//         <a
//           href="/products"
//           className="inline-block bg-white text-purple-800 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-purple-100 transition"
//         >
//           Explore Perfumes
//         </a>
//       </section>

//     </main>
//   );
// };

// export default About;


import { useNavigate } from "react-router-dom";
import AboutCarousel from "../components/AboutCarousel";


const About = () => {
  const navigate = useNavigate();

  return (
    <main className="w-full">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-linear-to-r from-purple-500 via-purple-600 to-indigo-600 text-white py-28 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide mb-6">
          About Aura Perfumes
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-purple-100 leading-relaxed">
          Where luxury fragrances meet timeless elegance.  
          Crafted to elevate your presence, inspire confidence, and express your individuality.
        </p>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="max-w-6xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="text-4xl font-bold text-purple-700 mb-6">
            Our Story
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Aura Perfumes was born from a passion for fine fragrances and a belief
            that scent is more than just an accessory — it is a signature,
            a memory, and a powerful expression of identity.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Every fragrance in our collection is thoughtfully crafted using premium
            ingredients sourced from around the world. We blend modern sophistication
            with timeless luxury to create scents that linger beautifully and leave
            a lasting impression.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Whether you seek elegance, boldness, freshness, or warmth, Aura Perfumes
            is designed to complement every mood, moment, and personality.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-2xl">
            <AboutCarousel/>
          {/* <img
            src="https://images.unsplash.com/photo-1594035910387-fea47794261f"
            alt="Luxury Perfume"
            className="w-full h-full object-cover"
          /> */}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-purple-50 py-20">
        <h2 className="text-4xl font-bold text-center text-purple-700 mb-14">
          Why Choose Aura Perfumes?
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-8">
          {[
            {
              title: "Premium Ingredients",
              desc: "We use only the finest fragrance oils and blends to ensure long-lasting, luxurious scents."
            },
            {
              title: "Crafted with Care",
              desc: "Each perfume is meticulously designed to balance elegance, strength, and individuality."
            },
            {
              title: "For Every Mood",
              desc: "From fresh florals to deep musks, Aura Perfumes offers scents for every occasion."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg text-center
              transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MISSION ================= */}
      <section className="py-20 px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-purple-700 mb-6">
          Our Mission
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Our mission is to empower confidence through fragrance.  
          We aim to make luxury perfumes accessible while maintaining the highest
          standards of quality, creativity, and elegance.
        </p>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-linear-to-r from-indigo-600 via-purple-600 to-purple-700 text-white py-20 text-center px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Discover Your Signature Scent
        </h2>
        <p className="text-lg md:text-xl text-purple-100 mb-8">
          Explore our curated collection and find the fragrance that truly defines you.
        </p>
        <button
          onClick={() => navigate("/products")}
          className="bg-white text-purple-700 font-semibold px-10 py-4 rounded-full
          hover:bg-purple-100 transition text-lg shadow-lg"
        >
          Explore Perfumes
        </button>
      </section>

    </main>
  );
};

export default About;
