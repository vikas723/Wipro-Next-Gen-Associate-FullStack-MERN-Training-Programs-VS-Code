// const Cart = ({ cart }) => {
//   return (
//     <main className="px-10  pt-12 pb-20 max-w-6xl mx-auto">
//       <h2 className="text-3xl font-bold mb-8 text-center">
//         Your Cart
//       </h2>

//       {cart.length === 0 ? (
//         <p className="text-center text-gray-500">
//           Your cart is empty
//         </p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {cart.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white p-4 rounded shadow text-center"
//             >
//               <img
//                 src={item.image}
//                 className="h-40 mx-auto rounded mb-3"
//               />
//               <h3 className="font-semibold">{item.name}</h3>
//               <p className="text-purple-600 font-bold">
//                 ₹ {item.price}
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//     </main>
//   );
// };

// export default Cart;


// const Cart = ({ cart, addToCart, removeFromCart }) => {
//   return (
//     <main className="px-10 pt-12 pb-20 max-w-6xl mx-auto">

//       <h2 className="text-3xl font-bold text-center mb-10">
//         Your Cart
//       </h2>

//       {cart.length === 0 ? (
//         <p className="text-center text-gray-500 text-lg">
//           Your cart is empty
//         </p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {cart.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white rounded-xl shadow-md p-5 text-center"
//             >
//               <div className="h-56 flex items-center justify-center bg-purple-50 rounded mb-4">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="h-full object-cover rounded"
//                 />
//               </div>

//               <h3 className="font-semibold text-slate-700">
//                 {item.name}
//               </h3>

//               <p className="text-purple-600 font-bold mt-1">
//                 ₹ {item.price}
//               </p>

//               {/* Quantity Controls */}
//               <div className="flex justify-center items-center gap-4 mt-4">
//                 <button
//                   onClick={() => addToCart(item)}
//                   className="bg-purple-600 text-white px-3 py-1 rounded-full"
//                 >
//                   +
//                 </button>

//                 <span className="font-semibold">
//                   {item.quantity}
//                 </span>

//                 <button
//                   onClick={() => removeFromCart(item.id)}
//                   className="bg-red-500 text-white px-3 py-1 rounded-full"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//     </main>
//   );
// };

// export default Cart;


const Cart = ({
  cart,
  addToCart,
  decreaseFromCart,
  removeFromCart,
}) => {
  return (
    <main className="px-10 pt-12 pb-20 max-w-6xl mx-auto">

      <h2 className="text-3xl font-bold text-center mb-10">
        Your Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          Your cart is empty
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-5 text-center"
            >
              {/* Image */}
              <div className="h-56 flex items-center justify-center bg-purple-50 rounded mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full object-cover rounded"
                />
              </div>

              {/* Name & Price */}
              <h3 className="font-semibold text-slate-700">
                {item.name}
              </h3>
              <p className="text-purple-600 font-bold mt-1">
                ₹ {item.price}
              </p>

              {/* Quantity Controls */}
              <div className="flex justify-center items-center gap-4 mt-4">

                {/* − Decrease */}
                <button
                  onClick={() => decreaseFromCart(item.id)}
                  className="bg-gray-300 px-3 py-1 rounded-full text-lg font-bold"
                >
                  −
                </button>

                {/* Quantity */}
                <span className="font-semibold text-lg">
                  {item.quantity}
                </span>

                {/* + Increase */}
                <button
                  onClick={() => addToCart(item)}
                  className="bg-purple-600 text-white px-3 py-1 rounded-full text-lg font-bold"
                >
                  +
                </button>

                {/* Delete */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-full"
                >
                  Delete
                </button>

              </div>
            </div>
          ))}
        </div>
      )}

    </main>
  );
};

export default Cart;
