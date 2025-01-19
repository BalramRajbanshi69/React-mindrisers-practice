import React, { useState } from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  const [toggle,setToggle] = useState('Dark Mode');
  const [theme,setTheme] = useState('light');
  const handleClick = ()=>{
    if(toggle === 'Dark Mode'){
      setToggle('Light Mode');
      setTheme('dark')
    }else{
      setToggle("Dark Mode");
      setTheme('light')
    }
  }
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${theme} bg-${theme}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about_us">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/sign_up">
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/user">
                  User
                </Link>
              </li>
            </ul>
            <button className="btn btn-success" onClick={handleClick}>
              {toggle}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar