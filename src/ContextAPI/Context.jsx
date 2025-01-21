import React, { useContext } from 'react'
import  ThemeContext  from '../ContextAPI/index'

const Context = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div>
      <h1>The color of theme is: {theme}</h1>
    </div>
  )
}

export default Context