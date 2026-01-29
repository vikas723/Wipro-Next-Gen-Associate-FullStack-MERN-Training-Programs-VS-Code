// const CustomerManagement = () => {
//   return (
//     <div className="bg-white p-6 rounded shadow-md max-w-4xl mx-auto">
//       <h2 className="text-xl font-bold mb-4">Customer Management</h2>

//       <ul>
//         <li>Vikas – 3 Orders</li>
//         <li>Ananya – 1 Order</li>
//       </ul>
//     </div>
//   );
// };

// export default CustomerManagement;



// const CustomerManagement = () => {
//   const customers = [
//     { name: "Vikas", orders: 3 },
//     { name: "Ananya", orders: 1 },
//   ];

//   return (
//     <div className="space-y-6">

//       {/* Info */}
//       <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded-lg">
//         <p className="text-purple-800 font-medium">
//           View registered customers and their activity
//         </p>
//       </div>

//       {/* Customers */}
//       <div className="bg-white rounded-xl shadow-md p-6">
//         <h3 className="text-xl font-semibold text-purple-700 mb-4">
//           Customer Overview
//         </h3>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {customers.map((customer, index) => (
//             <div
//               key={index}
//               className="border rounded-lg p-4 hover:shadow-md transition"
//             >
//               <h4 className="text-lg font-semibold text-gray-800">
//                 {customer.name}
//               </h4>
//               <p className="text-sm text-gray-600 mt-1">
//                 Orders Placed:{" "}
//                 <span className="font-bold text-purple-700">
//                   {customer.orders}
//                 </span>
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomerManagement;


import { useEffect, useState } from "react";
import { getOrders } from "../services/orderService";

const CustomerManagement = () => {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {
    const orders = await getOrders();

    const customerMap = {};

    orders.forEach((order) => {
      if (!customerMap[order.customer]) {
        customerMap[order.customer] = {
          name: order.customer,
          orders: [],
          totalSpent: 0,
        };
      }
      customerMap[order.customer].orders.push(order);
      customerMap[order.customer].totalSpent += order.total;
    });

    setCustomers(Object.values(customerMap));
  };

  return (
    <div className="space-y-6">

      {/* Info Banner */}
      <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded-lg">
        <p className="text-purple-800 font-medium">
          View registered customers and their activity
        </p>
      </div>

      {/* Customer Cards */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold text-purple-700 mb-4">
          Customer Overview
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {customers.map((customer) => (
            <div
              key={customer.name}
              onClick={() => setSelectedCustomer(customer)}
              className="cursor-pointer border rounded-lg p-4 hover:shadow-md transition"
            >
              <p className="font-semibold text-gray-800">
                {customer.name}
              </p>
              <p className="text-sm text-gray-600">
                Orders Placed: {customer.orders.length}
              </p>
              <p className="text-sm text-gray-600">
                Total Spent: ₹{customer.totalSpent}
              </p>

              {customer.totalSpent >= 5000 && (
                <span className="inline-block mt-2 text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                  ⭐ VIP Customer
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Customer Modal */}
      {selectedCustomer && (
        <CustomerModal
          customer={selectedCustomer}
          onClose={() => setSelectedCustomer(null)}
        />
      )}
    </div>
  );
};

const CustomerModal = ({ customer, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-lg p-6 shadow-xl">
        <h3 className="text-xl font-semibold text-purple-700 mb-2">
          {customer.name}
        </h3>

        <p className="text-sm text-gray-600 mb-4">
          Total Spent: ₹{customer.totalSpent}
        </p>

        <h4 className="font-semibold text-gray-800 mb-2">
          Order History
        </h4>

        <ul className="space-y-2">
          {customer.orders.map((order) => (
            <li
              key={order.id}
              className="flex justify-between border rounded-lg p-2"
            >
              <span>Order #{order.id}</span>
              <span className="text-sm">{order.status}</span>
              <span className="text-sm font-medium">₹{order.total}</span>
            </li>
          ))}
        </ul>

        <div className="text-right mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-purple-700 text-white rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerManagement;
