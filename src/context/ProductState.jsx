import React, { useState } from "react";
import PropTypes from 'prop-types'
import productContext from "../context/ProductContext";

const ProductState = (props) => {
  const initialProducts = [
    {
      id: 1,
      title: "Sweater",
      description: "This is a woolen sweater",
      price: 1300,
      quantity: 35,
    },
    {
      id: 2,
      title: "Jeans",
      description: "Blue jeans",
      price: 5200,
      quantity: 25,
    },
    {
      id: 3,
      title: "Tshirt ",
      description: "Summer Shirt",
      price: 400,
      quantity: 15,
    },
    {
      id: 4,
      title: "Cap ",
      description: "Summer Cap",
      price: 500,
      quantity: 5,
    },
  ];
  const [products, setProducts] = useState(initialProducts);

  // useEffect(()=>{
  //   setTimeout(() => {
  //     setProducts({
  //       name:'Cap',
  //       price:665,
  //       quantity:0,
  //       description:'All sold out'
  //     })
  //   }, 8000);
  // },[products])

  return (
    <productContext.Provider value={{ products,setProducts}}>
      {props.children}
    </productContext.Provider>
  );
};

ProductState.propTypes={
  children:PropTypes.node.isRequired
}

export default ProductState;
