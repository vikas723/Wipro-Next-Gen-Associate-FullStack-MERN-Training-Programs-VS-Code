// import { createContext, useContext, useState } from "react";

// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const login = (userData) => {
//     setUser(userData);
//   };

//   const logout = () => {
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);


import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // Admin authentication flag
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAdmin") === "true"
  );

  // Optional user data (admin info)
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("adminUser")) || null
  );

  // LOGIN (Admin)
  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);

    localStorage.setItem("isAdmin", "true");
    localStorage.setItem("adminUser", JSON.stringify(userData));
  };

  // LOGOUT (Admin only)
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);

    localStorage.removeItem("isAdmin");
    localStorage.removeItem("adminUser");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

