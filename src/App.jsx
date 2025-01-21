import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import About_Us from './components/About_Us'
import Contact from './components/Contact'
import Services from './components/Services'
import Sign_Up from './components/Sign_Up'
import Login from './components/Login'
import User from './components/User'
import UserList from './components/UserList'
import ProductState from './context/ProductState'
// import ThemeProvider from './ContextAPI/ThemeProvider'
// import Context from './ContextAPI/context'


const App = () => {
  return (
    <>
      <ProductState>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about_us" element={<About_Us />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/sign_up" element={<Sign_Up />} />
            <Route path="/login" element={<Login />} />
            <Route path="/:user_Id/:userName" element={<User />} />
            <Route path="/user" element={<UserList />} />
          </Routes>
        </Router>
      </ProductState> 
      <br />
      {/* <hr style={{height:'3px',color:'dark'}} />
      <ThemeProvider>
        <Context />
      </ThemeProvider> */}
    </>
  );
}

export default App