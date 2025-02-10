// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
// import f1 from '../assets/form-logo.png';
// import '../App.css';

// const Login = () => {
//   const [credentials,setCredentials] = useState({
//     email:'',
//     password:'',
//   })
//   const [showPassword,setShowPassword] = useState(false);
//   const [errors,setErrors] = useState({});
//   const handleChange=(e)=>{
//     setCredentials({...credentials,[e.target.name]: e.target.value})
//   }

//    const handleSubmit = async (e) => {
//      e.preventDefault();
//      if (validateForm()) {
//        // Only proceed if validation passes
//        const { email, password } = credentials;
//        try {
//          const response = await fetch("", {
//            method: "POST",
//            headers: {
//              "Content-Type": "application/json",
//            },
//            body: JSON.stringify({ email, password }),
//          });

//          const data = await response.json();
//          console.log("form submitted", data);
//        } catch (error) {
//          console.error("Error submitting form:", error);
//        }
//      }
//    };


//   return (
//     <>
//       <div className="container main-containers">
//         <div className="row ">
//           <div className="col-md-6 mt-5 ">
//             <div className="image-side">
//               <img src={f1} alt="form Image" />
//             </div>
//           </div>
//           <div className="col-md-6 mt-5">
//             <h2>Login To Continue</h2>
//             <hr />
//             <form onSubmit={handleSubmit}>
//               <div className="mb-3">
//                 <label className="form-label">Email</label>
//                 <input
//                   name="email"
//                   value={credentials.email}
//                   type="email"
//                   className="form-control"
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">Password</label>
//                 <div className="position-relative">
//                   <input
//                     name="password"
//                     value={credentials.password}
//                     onChange={handleChange}
//                     type={showPassword ? "text" : "password"}
//                     className="form-control"
//                   />
//                   <i
//                     className={`fa-solid ${
//                       showPassword ? "fa-eye" : "fa-eye-slash"
//                     } position-absolute`}
//                     onClick={() => setShowPassword(!showPassword)}
//                     style={{
//                       top: "50%",
//                       right: "10px",
//                       transform: "translateY(-50%)",
//                       cursor: "pointer",
//                     }}
//                   ></i>
//                 </div>
//               </div>

//               <button type="submit" className="btn btn-primary">
//                 Submit
//               </button>
//               <p>
//                 Not Registered Yet? <Link to="/sign_up">Sign Up</Link>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>

//       <div className="row  footer-body">
//         <div className="footer-logo-design">
//           <span>
//             <a href="https://www.facebook.com" target="_blank">
//               <i className="fa-brands fa-facebook-f"></i>
//             </a>
//           </span>
//           <span>
//             <a href="https://www.instagram.com" target="_blank">
//               <i className="fa-brands fa-instagram"></i>
//             </a>
//           </span>
//           <span>
//             <a href="https://www.twitter.com" target="_blank">
//               <i className="fa-brands fa-twitter"></i>
//             </a>
//           </span>
//           <span>
//             <a href="https://www.google.com" target="_blank">
//               <i className="fa-brands fa-google"></i>
//             </a>
//           </span>
//           <span>
//             <a href="https://www.linkedin.com" target="_blank">
//               <i className="fa-brands fa-linkedin-in"></i>
//             </a>
//           </span>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login




import { useState } from "react";
import { Link } from "react-router-dom";
import f1 from "../assets/form-logo.png";
import "../App.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });

    // Validate password on change
    if (name === "password") {
      if (!value.trim()) {
        setErrors({ ...errors, password: "Password is required" });
      } else if (value.length < 6) {
        setErrors({
          ...errors,
          password: "Password must be at least 6 characters",
        });
      } else {
        setErrors({ ...errors, password: "" });
      }
    } else {
      // Clear error when user starts typing for other fields
      if (errors[name]) {
        setErrors({ ...errors, [name]: "" });
      }
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Email validation
    if (!credentials.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(credentials.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    // Password validation
    if (!credentials.password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (credentials.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Only proceed if validation passes
      const { email, password } = credentials;
      try {
        const response = await fetch("", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        console.log("form submitted", data);
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <>
      <div className="container main-containers">
        <div className="row ">
          <div className="col-md-6 mt-5 ">
            <div className="image-side">
              <img src={f1 || "/placeholder.svg"} alt="form Image" />
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <h2>Login To Continue</h2>
            <hr />
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  value={credentials.email}
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="position-relative">
                  <input
                    id="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    type={showPassword ? "text" : "password"}
                    className={`form-control ${
                      errors.password ? "is-invalid" : ""
                    }`}
                  />
                  <i
                    className={`fa-solid ${
                      showPassword ? "fa-eye" : "fa-eye-slash"
                    } position-absolute`}
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      top: "50%",
                      right: "10px",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                    }}
                  ></i>
                </div>
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <p className="mt-3">
                Not Registered Yet? <Link to="/sign_up">Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>

      <div className="row footer-body">
        <div className="footer-logo-design">
          <span>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </span>
          <span>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </span>
          <span>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
          </span>
          <span>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-google"></i>
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Login;

