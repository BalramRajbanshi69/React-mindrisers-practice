import React from 'react'
import Banner from './Banner'
import About_Us from './About_Us'
import FakeApi from './FakeApi'


const Home = () => {

  return (
    <div>
      <Banner />
      <About_Us /> <hr />
      <FakeApi />
    </div>
  )
}

export default Home