
// const Navbar = () => {
//   return (
//     <nav className="sticky top-0 z-50 bg-linear-to-r from-purple-950 via-purple-900 to-indigo-900 shadow-md">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-5">
//         <div className="flex items-center gap-3">
//           <img
//             src="https://ai-previews.123rf.com/ai-txt2img/600nwm/ebeb2ecb-974d-47ae-9df5-164a79010851.jpg"
//             alt="Aura Perfumes Logo"
//             className="w-25 h-20 rounded-full object-cover"
//           />
//           <span className="text-2xl font-bold text-white tracking-wide">
//             Aura Perfumes
//           </span>
//         </div>


//         <div className="hidden md:flex space-x-10 font-medium text-slate-200">
          

//           <a href="#home"className="px-6 py-3 text-lg font-semibold text-white rounded-full
//              transition-all duration-300
//              hover:bg-white hover:text-purple-800
//              active:bg-white active:text-purple-900">Home</a>
             
//           <a href="#products"className="px-6 py-3 text-lg font-semibold text-white rounded-full
//              transition-all duration-300
//              hover:bg-white hover:text-purple-800
//              active:bg-white active:text-purple-900">Products</a>

//           <a href="#contact"className="px-6 py-3 text-lg font-semibold text-white rounded-full
//              transition-all duration-300
//              hover:bg-white hover:text-purple-800
//              active:bg-white active:text-purple-900">Contact</a>

          
//         </div>

//         <button className="relative p-3 rounded-full bg-purple-800 hover:bg-purple-700 transition transform hover:scale-110">
//           🛒
//           <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//             0
//           </span>
//         </button>

//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-linear-to-r from-purple-950 via-purple-900 to-indigo-900 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-5">

        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img
            src="https://ai-previews.123rf.com/ai-txt2img/600nwm/ebeb2ecb-974d-47ae-9df5-164a79010851.jpg"
            alt="Aura Perfumes Logo"
            className="w-20 h-20 rounded-full object-cover"
          />
          <span className="text-2xl font-bold text-white tracking-wide">
            Aura Perfumes
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">

          <Link
            to="/"
            className="px-6 py-3 text-lg font-semibold text-white rounded-full
                       transition-all duration-300
                       hover:bg-white hover:text-purple-800
                       active:bg-white active:text-purple-900"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="px-6 py-3 text-lg font-semibold text-white rounded-full
                       transition-all duration-300
                       hover:bg-white hover:text-purple-800
                       active:bg-white active:text-purple-900"
          >
            Products
          </Link>

          <Link
            to="/contact"
            className="px-6 py-3 text-lg font-semibold text-white rounded-full
                       transition-all duration-300
                       hover:bg-white hover:text-purple-800
                       active:bg-white active:text-purple-900"
          >
            Contact
          </Link>

        </div>

        {/* Cart Button */}
        <button
          className="relative p-3 rounded-full bg-purple-800
                     hover:bg-purple-700 transition-all duration-300
                     transform hover:scale-110"
        >
          🛒
          <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs
                           w-5 h-5 flex items-center justify-center rounded-full">
            0
          </span>
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
