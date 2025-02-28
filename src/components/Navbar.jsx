import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom';
import { FaCartArrowDown } from "react-icons/fa";
import ProductContext from '../context/ProductContext';
const Navbar = () => {
  const [toggle,setToggle] = useState('Dark Mode');
  const [theme,setTheme] = useState('light');
  
  //useContext to show cart items length when clicked on cart icon
  const {state:{cart}} = useContext(ProductContext);

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
            
              <li className="nav-item">
                <Link className="nav-link active" to="/addproduct">
                  Add Product
                </Link>
              </li>
            </ul>
            <Link to="/cart_items">
              <button
                type="button"
                className="btn btn-primary position-relative mx-5"
              >
                <FaCartArrowDown size={20} />
                <span className="position-absolute top-0 start-100 translate-middle-x badge rounded-pill bg-danger">
                  {cart.length}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>
            </Link>
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