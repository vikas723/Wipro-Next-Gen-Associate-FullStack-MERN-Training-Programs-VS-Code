// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const ADMIN_USERNAME = "admin";
// const ADMIN_PASSWORD = "Admin@123"; 

// const Login = () => {
//   const [username, setUsername] = useState("");  
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const validatePassword = (pwd) => {
//     const strongRegex =
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
//     return strongRegex.test(pwd);
//   };

//   const login = () => {
//     if (username !== ADMIN_USERNAME) {
//       alert("Invalid username");
//       return;
//     }

//     if (!validatePassword(password)) {
//       alert("Password is weak! Use strong password.");
//       return;
//     }
//     if (password !== ADMIN_PASSWORD) {
//       alert("Invalid password");
//       return;
//     }


//     localStorage.setItem("loggedIn", true);
//     localStorage.setItem("role", "admin");
//     alert("Login Successful");
//     navigate("/admin");
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center h-screen">
//       <div className="bg-white p-10 rounded shadow-md">
//         <h2 className="text-xl font-bold mb-4">Admin Login</h2>

//            <input
//           type="text"
//           placeholder="Username"
//           className="border p-2 w-full mb-3"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Enter password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="border p-2 w-full mb-4"
//         />

//         <button
//           onClick={login}
//           className="bg-purple-600 text-white px-4 py-2 rounded w-full"
//         >
//           Login
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;



// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const ADMIN_USERNAME = "admin";
// const ADMIN_PASSWORD = "Admin@123";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const validatePassword = (pwd) => {
//     const strongRegex =
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
//     return strongRegex.test(pwd);
//   };

//   const login = () => {
//     if (username !== ADMIN_USERNAME) {
//       alert("Invalid username");
//       return;
//     }

//     if (!validatePassword(password)) {
//       alert("Password is weak! Use strong password.");
//       return;
//     }

//     if (password !== ADMIN_PASSWORD) {
//       alert("Invalid password");
//       return;
//     }

//     localStorage.setItem("loggedIn", "true");
//     localStorage.setItem("role", "admin");
//     alert("Login Successful");
//     navigate("/admin",);
//   };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center bg-white"
      
//     >
//       {/* Login Card */}
//       <div className="bg-linear-to-br from-purple-100 via-purple-50 to-white w-full max-w-md p-8 rounded-2xl shadow-2xl">
//         <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">
//           Admin Login
//         </h2>

//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           className="w-full border p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
//         />

//         <input
//           type="password"
//           placeholder="Enter password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full border p-3 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-purple-600"
//         />

//         <button
//           onClick={login}
//           className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 rounded-lg transition duration-300"
//         >
//           Login
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;



import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const validationSchema = Yup.object({
    username: Yup.string().required("Username required"),
    password: Yup.string().required("Password required"),
  });

  const handleSubmit = (values) => {
    // Accept ANY username + password
    login({
      username: values.username,
      name: values.username,
      role: "admin",
    });

    navigate("/admin-dashboard");
  };
  const handleLogin = () => {
    login({ role: "admin", name: "Admin" });
    navigate("/admin-dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl">
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">
          Admin Login
        </h2>

        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-4">
            <div>
              <Field
                name="username"
                placeholder="Username"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-600"
              />
              <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-1"/>
            </div>

            <div>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-600"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1"/>
            </div>

            <button
            
              onClick={handleLogin}
              type="submit"
              className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 rounded-lg transition"
            >
              Login
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
