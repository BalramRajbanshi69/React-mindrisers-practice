import React, { useState } from "react";
import PropTypes from "prop-types";
import UserContext from "../ContextUser/UserCreate.jsx";

const UserProvider = ({ children }) => {
  const [fakeUser, setFakeUser] = useState([]);
  const [fakeProducts, setFakeProducts] = useState([]);
  const [fakeEscuelajs, setFakeEscuelajs] = useState([]);

  // fetching fake user api
  const fetchFakeUser = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data1 = await response.json();
      setFakeUser(data1);
    } catch (error) {
      console.log(error);

      throw new Error("Something went wrong");
    }
  };

  // fetching fake products api
  const fetchFakeProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Api not working");
      }
      const data2 = await response.json();
      setFakeProducts(data2);
      console.log(data2);
      
    } catch (error) {
      console.log(error);
      throw new Error("Something went wrong");
    }
  };

  // fetching fake escuelajs api
  const fetchFakeEscuelajs = async () => {
    try{
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      if(!response.ok){
        throw new Error("Api not working");
      }
      const data3 = await response.json();
      setFakeEscuelajs(data3.products);
      console.log(data3);
    }catch(error){
      console.log(error);
      throw new Error("Something went wrong");
    }
      
  };
    
      
  return (
    <div>
      <UserContext.Provider
        value={{
          fakeUser,
          setFakeUser,
          fetchFakeUser,
          fakeProducts,
          fetchFakeProducts,
          fakeEscuelajs,
          fetchFakeEscuelajs,
        }}
      >
        {children}
      </UserContext.Provider>
    </div>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default UserProvider;
