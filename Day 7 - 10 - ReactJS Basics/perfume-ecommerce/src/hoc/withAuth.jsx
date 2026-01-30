// import React from "react";
// import { Navigate } from "react-router-dom";

// function withAuth(Component) {
//   return function WrappedComponent(props) {
//     const isLoggedIn = localStorage.getItem("loggedIn")==="true";

//     if (isLoggedIn) {
//       return <Navigate to="/login" replace/>;
//     }

//     return <Component {...props} />;
//   };
// }

// export default withAuth;


// import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const withAuth = (Component) => {
//   return function ProtectedComponent(props) {
//     const { user } = useAuth();

//     if (!user || user.role !== "admin") {
//       return <Navigate to="/login" replace />;
//     }

//     return <Component {...props} />;
//   };
// };

// export default withAuth;
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const withAuth = (Component) => {
  return function ProtectedComponent() {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }

    return <Component />;
  };
};

export default withAuth;
