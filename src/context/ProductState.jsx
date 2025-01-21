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
  const [article,setArticle]=useState([]);

  const fetchArticle = async ()=>{
    try {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=3a2a43f36b144868a5a07cc85011d94d"
      );
      if(!response.ok){
        throw new Error('api not working')
      }
      const data = await response.json();
      setArticle(data.articles)
    } catch (error) {
      console.log(error);
      throw new Error('internal server error') 
    }
 
  }

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
    <>
      <productContext.Provider value={{ products, setProducts,article,fetchArticle }}>
        {props.children}
      </productContext.Provider>
    </>
  );
};

ProductState.propTypes={
  children:PropTypes.node.isRequired
}

export default ProductState;
