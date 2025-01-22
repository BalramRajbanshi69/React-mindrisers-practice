import React, { useState } from "react";
import PropTypes from "prop-types";
import UserContext from "./UserCreate";

const UserProvider = ({ children }) => {
  const [fakeUser, setFakeUser] = useState([]);

  const fetchFakeUser = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      setFakeUser(data);
    } catch (error) {
      console.log(error);

      throw new Error("Something went wrong");
    }
  };
  return (
    <div>
      <UserContext.Provider value={{ fakeUser, setFakeUser, fetchFakeUser }}>
        {children}
      </UserContext.Provider>
    </div>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default UserProvider;
