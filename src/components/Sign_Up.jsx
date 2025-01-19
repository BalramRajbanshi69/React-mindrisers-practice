import React, { useState } from "react";
import f1 from "../assets/form-logo.png";
import { Link } from "react-router-dom";
import '../App.css';

const Signup = () => {
  
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [showPassword,setShowPassword] = useState(false);
  const [showConfirmPassword,setShowConfirmPassword] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();

    console.log("form submitted", data);
  };
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6 mt-5">
            <div className="image-side">
              <img src={f1} alt="Signup image" />
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <h2>Register to continue</h2>
            <hr />
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Your Full Name</label>
                <input
                  name="name"
                  value={credentials.name}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  name="email"
                  value={credentials.email}
                  onChange={handleChange}
                  type="email"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <div className="position-relative">
                  <input
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    type={showPassword ? "text" : "password"}
                    className="form-control"
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
              </div>

              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <div className="position-relative">
                  <input
                    name="cpassword"
                    value={credentials.cpassword}
                    onChange={handleChange}
                    type={showConfirmPassword ? "text" : "password"}
                    className="form-control"
                  />
                  <i
                    className={`fa-solid ${
                      showConfirmPassword ? "fa-eye" : "fa-eye-slash"
                    } position-absolute`}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    style={{
                      top: "50%",
                      right: "10px",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                    }}
                  ></i>
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
            <p>
              Already registered? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>

      <div className="row  footer-body">
        <div className="footer-logo-design">
          <span>
            <a href="https://www.facebook.com" target="_blank">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </span>
          <span>
            <a href="https://www.instagram.com" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </span>
          <span>
            <a href="https://www.twitter.com" target="_blank">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </span>
          <span>
            <a href="https://www.google.com" target="_blank">
              <i className="fa-brands fa-google"></i>
            </a>
          </span>
          <span>
            <a href="https://www.linkedin.com" target="_blank">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Signup;