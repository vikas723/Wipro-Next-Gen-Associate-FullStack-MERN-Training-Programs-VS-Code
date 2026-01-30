// const OrderManagement = () => {
//   return (
//     <div className="bg-white p-6 rounded shadow-md max-w-4xl mx-auto">
//       <h2 className="text-xl font-bold mb-4">Order Management</h2>

//       <ul>
//         <li>Order #101 – Pending</li>
//         <li>Order #102 – Shipped</li>
//         <li>Order #103 – Delivered</li>
//       </ul>
//     </div>
//   );
// };

// export default OrderManagement;



// import { useEffect, useState } from "react";
// import { getOrders, updateOrderStatus } from "../services/orderService";

// const OrderManagement = () => {
  
//     const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     loadOrders();
//   }, []);

//   const loadOrders = async () => {
//     const data = await getOrders();
//     setOrders(data);
//   };

//   const handleStatusChange = async (id, newStatus) => {
//     await updateOrderStatus(id, newStatus);

//     setOrders((prev) =>
//       prev.map((order) =>
//         order.id === id ? { ...order, status: newStatus } : order
//       )
//     );
//   };

//   return (
//     <div className="space-y-6">

//       {/* Info */}
//       <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded-lg">
//         <p className="text-purple-800 font-medium">
//           Track and manage customer orders
//         </p>
//       </div>

//       {/* Orders */}
//       <div className="bg-white rounded-xl shadow-md p-6">
//         <h3 className="text-xl font-semibold text-purple-700 mb-4">
//           Order List
//         </h3>

//         <ul className="space-y-4">
//           {orders.map((order) => (
//             <li
//               key={order.id}
//               className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50 transition"
//             >
//               <span className="font-medium text-gray-800">
//                 Order #{order.id}
//               </span>

//               <span
//                 className={`px-4 py-1 rounded-full text-sm font-semibold ${order.color}`}
//               >
//                 {order.status}
//               </span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default OrderManagement;


import { useEffect, useState } from "react";
import { getOrders, updateOrderStatus } from "../services/orderService";

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    const data = await getOrders();
    setOrders(data);
  };

  const handleStatusChange = async (id, newStatus) => {
    await updateOrderStatus(id, newStatus);

    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  const statusStyle = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Shipped":
        return "bg-blue-100 text-blue-800";
      case "Delivered":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">

      {/* Info */}
      <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded-lg">
        <p className="text-purple-800 font-medium">
          Track and manage customer orders
        </p>
      </div>

      {/* Orders */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold text-purple-700 mb-4">
          Order List
        </h3>

        <ul className="space-y-4">
          {orders.map((order) => (
            <li
              key={order.id}
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 border rounded-lg hover:bg-gray-50 transition"
            >
              {/* Order Info */}
              <div>
                <p className="font-medium text-gray-800">
                  Order #{order.id}
                </p>
                <p className="text-sm text-gray-600">
                  Customer: {order.customer}
                </p>
                <p className="text-sm text-gray-600">
                  Total: ₹{order.total}
                </p>
              </div>

              {/* Status + Control */}
              <div className="flex items-center gap-3">
                <span
                  className={`px-4 py-1 rounded-full text-sm font-semibold ${statusStyle(
                    order.status
                  )}`}
                >
                  {order.status}
                </span>

                <select
                  value={order.status}
                  onChange={(e) =>
                    handleStatusChange(order.id, e.target.value)
                  }
                  className="px-3 py-1 border rounded-lg focus:ring-2 focus:ring-purple-500"
                >
                  <option value="Pending">Pending</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrderManagement;
