import React from 'react'
import  ThemeContext  from '../ContextAPI/index'

const Context = () => {
  return (
    <div>
      <ThemeContext.Consumer>
        {({theme})=>{
          return (
            <h1>The color of theme is: {theme}</h1>
          )
        }}
      </ThemeContext.Consumer>
    </div>
  )
}

export default Context