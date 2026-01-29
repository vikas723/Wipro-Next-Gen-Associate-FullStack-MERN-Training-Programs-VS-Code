// import { useState } from "react";
// import withAuth from "../hoc/withAuth";
// import ProductManagement from "../admin/ProductManagement";
// import OrderManagement from "../admin/OrderManagement";
// import CustomerManagement from "../admin/CustomerManagement";

// const AdminDashboard = () => {
//   const [activeTab, setActiveTab] = useState("products");

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-3xl font-bold text-purple-700 text-center mb-8">
//         Admin Panel
//       </h1>

//       {/* Tabs */}
//       <div className="flex justify-center gap-6 mb-10">
//         <button onClick={() => setActiveTab("products")} className="admin-btn">
//           Products
//         </button>
//         <button onClick={() => setActiveTab("orders")} className="admin-btn">
//           Orders
//         </button>
//         <button onClick={() => setActiveTab("customers")} className="admin-btn">
//           Customers
//         </button>
//       </div>

//       {/* Content */}
//       {activeTab === "products" && <ProductManagement />}
//       {activeTab === "orders" && <OrderManagement />}
//       {activeTab === "customers" && <CustomerManagement />}
//     </div>
//   );
// };

// export default withAuth(AdminDashboard);


// import { useState } from "react";
// import withAuth from "../hoc/withAuth";
// import ProductManagement from "../admin/ProductManagement";
// import OrderManagement from "../admin/OrderManagement";
// import CustomerManagement from "../admin/CustomerManagement";

// const AdminDashboard = () => {
//   const [activeTab, setActiveTab] = useState("products");

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-3xl font-bold text-purple-700 text-center mb-8">
//         Admin Dashboard
//       </h1>

//       <div className="flex justify-center gap-6 mb-10">
//         {["products", "orders", "customers"].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className="px-6 py-2 rounded-lg bg-purple-700 text-white hover:bg-purple-800"
//           >
//             {tab.toUpperCase()}
//           </button>
//         ))}
//       </div>

//       {activeTab === "products" && <ProductManagement />}
//       {activeTab === "orders" && <OrderManagement />}
//       {activeTab === "customers" && <CustomerManagement />}
//     </div>
//   );
// };

// export default withAuth(AdminDashboard);



import { useState } from "react";
import withAuth from "../hoc/withAuth";
import ProductManagement from "../admin/ProductManagement";
import OrderManagement from "../admin/OrderManagement";
import CustomerManagement from "../admin/CustomerManagement";
import AdminProducts from "./AdminProducts";



const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("products");

  const tabStyle = (tab) =>
    `px-6 py-2 rounded-full font-semibold transition-all duration-300
     ${
       activeTab === tab
         ? "bg-gradient-to-r from-purple-700 to-indigo-700 text-white shadow-lg scale-105"
         : "bg-white text-purple-700 border border-purple-300 hover:bg-purple-50"
     }`;

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-white to-purple-100 py-10 px-4">
      
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-purple-800 tracking-wide">
          Admin Dashboard
        </h1>
        <p className="text-gray-600 mt-2">
          Manage products, orders, and customers
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        <button
          className={tabStyle("products")}
          onClick={() => setActiveTab("products")}
        >
          PRODUCTS
        </button>
        <button
          className={tabStyle("orders")}
          onClick={() => setActiveTab("orders")}
        >
          ORDERS
        </button>
        <button
          className={tabStyle("customers")}
          onClick={() => setActiveTab("customers")}
        >
          CUSTOMERS
        </button>
      </div>

      {/* Content Card */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8 transition-all duration-300">
        {activeTab === "products" && (
          <>
            <SectionTitle title="Perfume Management" />
            {/* <ProductManagement /> */}
             <AdminProducts />
          </>
        )}

        {activeTab === "orders" && (
          <>
            <SectionTitle title="Order Management" />
            <OrderManagement />
          </>
        )}

        {activeTab === "customers" && (
          <>
            <SectionTitle title="Customer Management" />
            <CustomerManagement />
          </>
        )}
      </div>
    </div>
  );
};


/* Reusable Section Title */
const SectionTitle = ({ title }) => (
  <h2 className="text-2xl font-bold text-purple-700 mb-6 border-b pb-3">
    {title}
  </h2>
);

export default withAuth(AdminDashboard);
