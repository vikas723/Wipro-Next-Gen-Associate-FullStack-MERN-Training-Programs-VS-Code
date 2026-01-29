
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



import { Link, useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useAuth } from "../context/AuthContext";
const Navbar = ({ searchTerm, setSearchTerm, cartCount=0}) => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("loggedIn");

  
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    navigate("/products"); // 🔥 auto redirect

  
  };
  return (
    <nav className="sticky top-0 z-50 bg-linear-to-r from-purple-950 via-purple-900 to-indigo-900 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between  py-5">

        {/* Logo Section */}
        <div className="flex items-center gap-3 ">
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
        <div className="hidden md:flex space-x-5">

          <Link
            to="/"
            className="px-6 py-3 text-lg font-semibold text-white rounded-full
                       transition-all duration-300
                       hover:bg-white hover:text-purple-800
                       active:bg-white active:text-purple-900"
          >
            Home
          </Link>
          <Link to="/about"
          className="px-6 py-3 text-lg font-semibold text-white rounded-full
                       transition-all duration-300
                       hover:bg-white hover:text-purple-800
                       active:bg-white active:text-purple-900"
          >
            About
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
          {isLoggedIn && (
            <Link
            to="/admin"
            className="px-6 py-3 text-lg font-semibold text-white rounded-full
               transition-all duration-300
               hover:bg-white hover:text-purple-800"
            >
              Admin
            </Link>
            
          )}
           {isAuthenticated && (
        <button
          onClick={handleLogout}
          className="px-6 py-3 text-lg font-semibold text-white rounded-full
               transition-all duration-300
               hover:bg-white hover:text-purple-800"
        >
          Logout
        </button>
           )}


        </div>
        <div className="flex items-center gap-4">
           {/* <div className="flex items-center bg-white rounded-full px-3 py-1 shadow"> */}
          <input
            type="text"
            placeholder="Search perfumes..."
            value={searchTerm}
            onChange={(e) => {handleSearch}}
            className="pl-10 pr-4 py-2 rounded-full bg-white text-black outline-none w-52 shadow"/>
            
            {/* 🔍 ICON BUTTON */}
            <button
              onClick={handleSearch}
              className="text-purple-700 text-4xl hover:scale-110 transition"
              title="Search"
            >
              🔍
            </button>
            
            
        <Link to ="/cart"
          className="relative p-3 rounded-full bg-purple-800
                     hover:bg-purple-700 transition-all duration-300
                     transform hover:scale-110"
        >
          🛒
          <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs
                           w-5 h-5 flex items-center justify-center rounded-full">
            0
             {cartCount}
          </span>
         
        </Link>

      </div>
      </div>
    </nav>
  );
};

export default Navbar;
