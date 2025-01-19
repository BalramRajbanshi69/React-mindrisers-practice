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

const App = () => {
  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_us" element={<About_Us />} />
          <Route path='/contact' element={< Contact/>}/>
          <Route path='/services' element={<Services />}/>
          <Route path='/sign_up' element={<Sign_Up />}/>
          <Route path='/login' element={<Login />}/>
          <Route path="/:user_Id/:userName" element={<User />} />
          <Route path="/user" element={<UserList />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App