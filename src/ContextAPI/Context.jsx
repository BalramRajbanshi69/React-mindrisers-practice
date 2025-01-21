import React, { useContext } from 'react'
import  ThemeContext  from '../ContextAPI/index'

const Context = () => {
  const { theme, theme1 } = useContext(ThemeContext);
  return (
    <div>
      <p>
        The color of theme is: <strong>{theme}</strong> and color of darkColor
        is : <strong>{theme1}</strong>
      </p>
    </div>
  );
}

export default Context