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






// import { useNavigate } from "react-router-dom";

// const Cart = ({
//   cart,
//   addToCart,
//   decreaseFromCart,
//   removeFromCart,
// }) => {
//   const navigate = useNavigate();

//   // 🔢 Calculate Total Price
//   const totalPrice = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   return (
//     <main className="px-10 pt-12 pb-20 max-w-7xl mx-auto">

//       <h2 className="text-3xl font-bold text-center mb-10">
//         Your Cart
//       </h2>

//       {cart.length === 0 ? (
//         <p className="text-center text-gray-500 text-lg">
//           Your cart is empty
//         </p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

//           {/* ================= LEFT SIDE: CART ITEMS ================= */}
//           <div className="md:col-span-3">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {cart.map((item) => (
//                 <div
//                   key={item.id}
//                   className="bg-white rounded-xl shadow-md p-5 text-center"
//                 >
//                   {/* Image */}
//                   <div className="h-56 flex items-center justify-center bg-purple-50 rounded mb-4">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="h-full object-cover rounded"
//                     />
//                   </div>

//                   {/* Name & Price */}
//                   <h3 className="font-semibold text-slate-700">
//                     {item.name}
//                   </h3>
//                   <p className="text-purple-600 font-bold mt-1">
//                     ₹ {item.price}
//                   </p>

//                   {/* Quantity Controls */}
//                   <div className="flex justify-center items-center gap-3 mt-4">
//                     <button
//                       onClick={() => decreaseFromCart(item.id)}
//                       className="bg-gray-300 px-3 py-1 rounded-full text-lg font-bold"
//                     >
//                       −
//                     </button>

//                     <span className="font-semibold text-lg">
//                       {item.quantity}
//                     </span>

//                     <button
//                       onClick={() => addToCart(item)}
//                       className="bg-purple-600 text-white px-3 py-1 rounded-full text-lg font-bold"
//                     >
//                       +
//                     </button>

//                     <button
//                       onClick={() => removeFromCart(item.id)}
//                       className="bg-red-500 text-white px-3 py-1 rounded-full"
//                     >
//                       Delete
//                     </button>
//                   </div>

//                   {/* Item Total */}
//                   <p className="mt-3 font-semibold text-gray-700">
//                     Item Total: ₹ {item.price * item.quantity}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* ================= RIGHT SIDE: ORDER SUMMARY ================= */}
//           <div className="md:col-span-1">
//             <div className="sticky top-27.5 overflow-y-auto">
//               <div className="bg-purple-50 p-8 rounded-2xl shadow-lg">

//                 <h3 className="text-2xl font-bold mb-4">
//                   Order Summary
//                 </h3>

//                 {/* Product Breakdown */}
//                 {cart.map((item) => (
//                   <div
//                     key={item.id}
//                     className="flex justify-between text-sm mb-2 text-gray-700"
//                   >
//                     <span>
//                       {item.name} × {item.quantity}
//                     </span>
//                     <span>
//                       ₹ {item.price * item.quantity}
//                     </span>
//                   </div>
//                 ))}

//                 <hr className="my-3" />

//                 {/* Total */}
//                 <div className="flex justify-between text-lg font-bold text-purple-700">
//                   <span>Total Amount</span>
//                   <span>₹ {totalPrice}</span>
//                 </div>

//                 {/* Checkout Button */}
//                 <button
//                   onClick={() => navigate("/checkout")}
//                   className="w-full mt-5 bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-lg font-semibold transition"
//                 >
//                   Proceed to Checkout
//                 </button>

//               </div>
//             </div>
//           </div>

//         </div>
//       )}
//     </main>
//   );
// };

// export default Cart;



// import { useNavigate } from "react-router-dom";

// const Cart = ({
//   cart,
//   addToCart,
//   decreaseFromCart,
//   removeFromCart,
// }) => {
//   const navigate = useNavigate();

//   // 🔢 Calculate Total Price
//   const totalPrice = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   return (
//     <main className="px-10 pt-12 pb-20 max-w-7xl mx-auto">

//       <h2 className="text-3xl font-bold text-center mb-10">
//         Your Cart
//       </h2>

//       {cart.length === 0 ? (
//         <p className="text-center text-gray-500 text-lg">
//           Your cart is empty
//         </p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

//           {/* ================= LEFT SIDE: CART ITEMS ================= */}
//           <div className="md:col-span-3">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {cart.map((item) => (
//                 <div
//                   key={item.id}
//                   className="bg-white rounded-xl shadow-md p-5 text-center"
//                 >
//                   {/* Image */}
//                   <div className="h-56 flex items-center justify-center bg-purple-50 rounded mb-4">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="h-full object-cover rounded"
//                     />
//                   </div>

//                   {/* Name & Price */}
//                   <h3 className="font-semibold text-slate-700">
//                     {item.name}
//                   </h3>
//                   <p className="text-purple-600 font-bold mt-1">
//                     ₹ {item.price}
//                   </p>

//                   {/* Quantity Controls */}
//                   <div className="flex justify-center items-center gap-3 mt-4">
//                     <button
//                       onClick={() => decreaseFromCart(item.id)}
//                       className="bg-gray-300 px-3 py-1 rounded-full text-lg font-bold"
//                     >
//                       −
//                     </button>

//                     <span className="font-semibold text-lg">
//                       {item.quantity}
//                     </span>

//                     <button
//                       onClick={() => addToCart(item)}
//                       className="bg-purple-600 text-white px-3 py-1 rounded-full text-lg font-bold"
//                     >
//                       +
//                     </button>

//                     <button
//                       onClick={() => removeFromCart(item.id)}
//                       className="bg-red-500 text-white px-3 py-1 rounded-full"
//                     >
//                       Delete
//                     </button>
//                   </div>

//                   {/* Item Total */}
//                   <p className="mt-3 font-semibold text-gray-700">
//                     Item Total: ₹ {item.price * item.quantity}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* ================= RIGHT SIDE: ORDER SUMMARY ================= */}
//           <div className="md:col-span-2">
//             <div className="sticky top-27.5">

//               <div className="bg-purple-50 p-2 rounded-2xl shadow-xl w-full max-w-md">

//                 {/* Title */}
//                 <h3 className="text-2xl font-bold text-purple-800 mb-6">
//                   Order Summary
//                 </h3>

//                 {/* Product List */}
//                 <div className="space-y-4 text-lg max-h-[55vh] overflow-y-auto pr-1">
//                   {cart.map((item) => (
//                     <div
//                       key={item.id}
//                       className="flex justify-between items-start border-b pb-3"
//                     >
//                       <div>
//                         <p className="font-semibold text-gray-800">
//                           {item.name}
//                         </p>
//                         <p className="text-gray-600">
//                           Quantity:{" "}
//                           <span className="font-semibold">
//                             {item.quantity}
//                           </span>
//                         </p>
//                       </div>

//                       <p className="font-bold text-purple-700">
//                         ₹ {item.price * item.quantity}
//                       </p>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Total */}
//                 <div className="flex justify-between items-center mt-8 text-xl font-bold border-t pt-5">
//                   <span>Total Amount</span>
//                   <span className="text-purple-700 text-2xl">
//                     ₹ {totalPrice}
//                   </span>
//                 </div>

//                 {/* Checkout Button */}
//                 <button
//                   onClick={() => navigate("/checkout")}
//                   className="mt-6 w-full bg-purple-700 hover:bg-purple-800 text-white text-lg font-semibold py-3 rounded-xl transition"
//                 >
//                   Proceed to Checkout
//                 </button>

//               </div>
//             </div>
//           </div>

//         </div>
//       )}
//     </main>
//   );
// };

// export default Cart;




import { useNavigate } from "react-router-dom";
// import { useToast } from "../context/ToastContext";
import {infoToast, errorToast } from "../utils/toast";
// const { showToast } = useToast();

// // import { useNotification } from "../context/NotificationContext";

// const { showNotification } = useNotification();


const Cart = ({
  cart,
  addToCart,
  decreaseFromCart,
  removeFromCart,
}) => {
  const navigate = useNavigate();

  // 🔢 Calculate Total Price
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="px-10 pt-12 pb-20 max-w-7xl mx-auto">

      <h2 className="text-3xl font-bold text-center mb-10">
        Your Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          Your cart is empty
        </p>
      ) : (
        /* 🔥 FLEX LAYOUT (KEY FIX) */
        <div className="flex flex-col md:flex-row gap-8 items-start">

          {/* ================= LEFT SIDE: CART ITEMS ================= */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {cart.map((item) => (
                <div
                  key={item.id}
                  classNamebg="linear-to-br from-purple-100 via-purple-50 to-white "
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
                  <div className="flex justify-center items-center gap-3 mt-4">
                    <button
                      onClick={() => {decreaseFromCart(item.id)
                      infoToast("Quantity decreased 📉");
                      // showNotification("Quantity updated 📦", "info");
                      }}
                      className="bg-gray-300 px-3 py-1 rounded-full text-lg font-bold"
                    >
                      −
                    </button>

                    <span className="font-semibold text-lg">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => addToCart(item)}
                      className="bg-purple-600 text-white px-3 py-1 rounded-full text-lg font-bold"
                    >
                      +
                    </button>

                  <button
                  onClick={() => {
                    removeFromCart(item.id);
                    errorToast("Product removed from cart ❌");
                    // showNotification("Product removed from cart ❌", "error");
                  }}
                  className="bg-red-500 text-white px-3 py-1 rounded-full"
                  >
                    Delete
                  </button>
                  </div>

                  {/* Item Total */}
                  <p className="mt-3 font-semibold text-gray-700">
                    Item Total: ₹ {item.price * item.quantity}
                  </p>
                </div>
              ))}

            </div>
          </div>

          {/* ================= RIGHT SIDE: ORDER SUMMARY ================= */}
          <div className="w-full md:w-105 shrink-0">
            <div className="sticky top-30">
              <div className="bg-purple-50 p-8 rounded-2xl shadow-xl">

                {/* Title */}
                <h3 className="text-2xl font-bold text-purple-800 mb-6">
                  Order Summary
                </h3>

                {/* Product List (Scrollable) */}
                <div className="space-y-4 text-lg max-h-105 overflow-y-auto pr-2">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between border-b pb-3"
                    >
                      <div>
                        <p className="font-semibold text-gray-800">
                          {item.name}
                        </p>
                        <p className="text-gray-600">
                          Quantity: {item.quantity}
                        </p>
                      </div>

                      <p className="font-bold text-purple-700">
                        ₹ {item.price * item.quantity}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Total */}
                <div className="flex justify-between items-center mt-6 text-xl font-bold border-t pt-4">
                  <span>Total Amount</span>
                  <span className="text-purple-700 text-2xl">
                    ₹ {totalPrice}
                  </span>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={() => navigate("/checkout")}
                  className="mt-6 w-full bg-purple-700 hover:bg-purple-800 text-white text-lg font-semibold py-3 rounded-xl transition"
                >
                  Proceed to Checkout
                </button>

              </div>
            </div>
          </div>

        </div>
      )}

    </main>
  );
};

export default Cart;
