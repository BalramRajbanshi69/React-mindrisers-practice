import React, { useReducer, useState } from "react";
import PropTypes from "prop-types";
import ProductContext from "../context/ProductContext";
import cartReducer from "./Reducer";

const ProductState = (props) => {
  const initialProducts = [
    {
      _id: 1,
      title: "Sweater",
      description: "This is a woolen sweater",
      price: 1300,
      inStock: 35,
    },
    {
      _id: 2,
      title: "Jeans",
      description: "Blue jeans",
      price: 5200,
      inStock: 25,
    },
    {
      _id: 3,
      title: "Tshirt ",
      description: "Summer Shirt",
      price: 400,
      inStock: 15,
    },
    {
      _id: 4,
      title: "Cap ",
      description: "Summer Cap",
      price: 500,
      inStock: 5,
    },
  ];
  const [products, setProducts] = useState(initialProducts);
  const [article, setArticle] = useState([]);

  // useReducer
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
    initialProducts: products,
  });

  // fetching article api
  const fetchArticle = async () => {
    const response = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=d125d26fbc6d49728775e0b977bddc5a"
    );
    const data = await response.json();
    setArticle(data.articles);
    console.log(data);
  };

  return (
    <>
      <ProductContext.Provider
        value={{
          products,
          setProducts,
          fetchArticle,
          article,
          state,
          dispatch,
        }}
      >
        {props.children}
      </ProductContext.Provider>
    </>
  );
};

ProductState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductState;
