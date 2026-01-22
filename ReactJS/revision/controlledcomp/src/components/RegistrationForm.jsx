

import { useRef, useState } from "react";

function RegistrationForm() {
  // useRef → for input values (UNCONTROLLED)
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  // useState → for validation & submission status (CONTROLLED)
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault(); // stop page reload

    // Read values ONLY on submit
    const firstName = firstNameRef.current.value.trim(); //current - points to actual DOM input element
    const lastName = lastNameRef.current.value.trim(); // value - gets what the user typed in the input
    const email = emailRef.current.value.trim(); // trim -Removes extra spaces fromt he beginning and end
    const password = passwordRef.current.value;

    let validationErrors = {};

    // First Name Validation
    if (!firstName) {
      validationErrors.firstName = "First name is required";
    } else if (!/^[A-Za-z]+$/.test(firstName)) {
      validationErrors.firstName = "First name must contain only alphabets";
    }

    // Last Name Validation
    if (!lastName) {
      validationErrors.lastName = "Last name is required";
    } else if (!/^[A-Za-z]+$/.test(lastName)) {
      validationErrors.lastName = "Last name must contain only alphabets";
    }

    // Email Validation
    if (!email) {
      validationErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      validationErrors.email = "Invalid email format";
    }

    // Password Validation
    if (!password) {
      validationErrors.password = "Password is required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password)
    ) {
      validationErrors.password =
        "Password must be at least 8 characters and include uppercase, lowercase, number & special character";
    }

    // Update state
    setErrors(validationErrors);

    // If no errors → success
    //If there are NO validation errors in the form 
    if (Object.keys(validationErrors).length === 0) { //Object.keys() is a JavaScript method. Object.keys() gets error fields. It returns an array of all property names (keys) in the object.
      setSubmitted(true);  //.length → number of keys in the object === 0 → means no keys
    } else {
      setSubmitted(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h3 className="text-center mb-3">Registration Form</h3>

        {submitted && (
          <div className="alert alert-success">
            Registration Successful!
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input type="text" className="form-control" ref={firstNameRef} />
            {errors.firstName && (
              <div className="text-danger">{errors.firstName}</div>
            )}
          </div>

          {/* Last Name */}
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input type="text" className="form-control" ref={lastNameRef} />
            {errors.lastName && (
              <div className="text-danger">{errors.lastName}</div>
            )}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" ref={emailRef} />
            {errors.email && (
              <div className="text-danger">{errors.email}</div>
            )}
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" ref={passwordRef} />
            {errors.password && (
              <div className="text-danger">{errors.password}</div>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
