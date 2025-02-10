import React, { useReducer, useState } from "react";
import PropTypes from "prop-types";
import ProductContext from "../context/ProductContext";
import cartReducer from "./Reducer";

const ProductState = (props) => {
  const baseURL = import.meta.env.VITE_API_URL ;
  const authToken = import.meta.env.VITE_AUTH_TOKEN ;

  const initialProducts = [
    {
      _id: 1,
      title: "Sweater",
      description: "This is a woolen sweater",
      price: 300,
      inStock: 10,
    },
    {
      _id: 2,
      title: "Jeans",
      description: "Blue jeans",
      price: 200,
      inStock: 15,
    },
    {
      _id: 3,
      title: "Tshirt ",
      description: "Summer Shirt",
      price: 400,
      inStock: 6,
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

  //all product
 const allProduct = async () => {
   const response = await fetch(
     `${baseURL}/product/getallproduct`, //dummy api
     {
       method: "GET",
       headers: {
         "Content-Type": "application/json",
         [authToken]: localStorage.getItem("token"),
       },
     }
   );
   let data = await response.json();
   console.log(data);
   setProducts(data);
 };

// edit product
 const editProduct = async(selectedProduct,updatedData)=>{
  console.log('Selected product',selectedProduct);
  const {title,description,price,inStock} = updatedData;
  try {
    const response = await fetch(
      `${baseURL}/product/updateproduct/${selectedProduct}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          [authToken]: localStorage.getItem("token"),
        },
        body: JSON.stringify({ title, description, price, inStock }),
      }
    );
    if(!response.ok){
      throw new Error(response.statusText);
    }
    const data = await response.json();
    console.log(data);

  } catch (error) {
    console.error(error);
    throw new Error('Failed to update products')
 
  }
 }

 // delete product
const deleteProduct = async (id) => {
  try {
    const response = await fetch(`${baseURL}/product/deleteproduct/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        [authToken]: localStorage.getItem("token"),
      },
    });
    if (response.ok) {
      console.log("product deleted succesfully!");
    } else {
      console.log("failed to delete the product");
    }
    allProduct();
  } catch (error) {
    console.error("internal server error");
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
          state,
          dispatch,
          allProduct,
          editProduct,
          deleteProduct,
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
