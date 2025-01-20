import React, { useState } from 'react'
import productContext from './ProductContext.jsx'

const ProductState = ({children}) => {
  const initialProducts =[
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      description:'This is product One'
    },
    {
      id:2,
      name: "Product 2",
      price: 9.99,
      description: 'This is product Two'
    },
    {
      id:3,
      name: "Product 3",
      price: 8.99,
      description: 'This is product Three'
    }
  ]
  const [products,setProducts] = useState(initialProducts)
  return (
    <div>
      <productContext.Provider value={{products}}>
        {children}
      </productContext.Provider>
    </div>
  )
}

export default ProductState