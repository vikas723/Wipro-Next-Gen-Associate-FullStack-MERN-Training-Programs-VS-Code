// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Login() {
//     const[password, setPassword] = useState("");
//     const[error, setError] = useState("");
//     const navigate = useNavigate();

//     const handleLogin = () => {
//         const minlen = password.length>= 8;
//         const hasNumber = /\d/.test(password);
//         const hasSpecialChar = /[!@#$%^&*]/.test(password);

//         if(minlen){
//             setError("Password must be at least 8 characters long");
//             return;
//         }
//         if(!hasNumber)
//         {
//             setError("Password must contain at least one number");
//             return;
//         }
//         if(!hasSpecialChar)
//         {
//             setError("Password must contain at least one special character");
//             return;
//         }
//         setError("");
//         alert("Login Successful");
//         navigate("/about");


// };

//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-5">
//           <div className="card p-4 shadow">
//             <h3 className="text-center mb-3">Login</h3>

//             <form>
//               <div className="mb-3">
//                 <label className="form-label">Email</label>
//                 <input type="email" className="form-control" />
//               </div>

//               <div className="mb-3">
//                 <label className="form-label">Password</label>
//                 <input type="password" className="form-control" />
//               </div>

//               <button className="btn btn-primary w-100">
//                 Login
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
import { useState } from "react";
import { useNavigate } from "react-router-dom"; //Use Navigate to check the password validation in Javascript

function Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Password rules
    const minLength = password.length >= 8;
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);

    if (!minLength) {
      setError("Password must be at least 8 characters long");
      return;
    }

    if (!hasNumber) {
      setError("Password must contain at least one number");
      return;
    }

    if (!hasSpecialChar) {
      setError("Password must contain at least one special character");
      return;
    }

    // If all validations pass
    setError("");
    alert("Login Successful");
    navigate("/about"); // navigate to another page
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card p-4 shadow">
            <h3 className="text-center mb-3">Login</h3>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && (
              <div className="alert alert-danger">
                {error}
              </div>
            )}

            <button
              className="btn btn-primary w-100"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
