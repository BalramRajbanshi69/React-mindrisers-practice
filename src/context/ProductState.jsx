
import React, { useState } from "react";
import PropTypes from "prop-types";
import ProductContext from "../context/ProductContext";

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
  const [article, setArticle] = useState([]);


  // fetching article api
  const fetchArticle = async () => {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=d125d26fbc6d49728775e0b977bddc5a"
      );
      if (!response.ok) {
        throw new Error("Api not working");
      }
      const data = await response.json();
      setArticle(data.articles);
      console.log(data);
    } catch (error) {
      console.log(error);
      throw new Error("Something went wrong");
    }
  };

  return (
    <>
      <ProductContext.Provider
        value={{
          products,
          setProducts,
          fetchArticle,
          article,
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
