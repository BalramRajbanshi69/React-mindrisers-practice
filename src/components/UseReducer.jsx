import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="text-center mt-5">
      <p className="bg-danger text-white px-3 py-2 rounded d-inline-block ">
        Count: {state}
      </p>
      <br />
      <button
        className="btn btn-primary mx-2"
        onClick={() => dispatch("increment")}
      >
        Increment
      </button>
      <button
        className="btn btn-primary mx-2"
        onClick={() => dispatch("decrement")}
      >
        Decrement
      </button>
      <button
        className="btn btn-primary mx-2"
        onClick={() => dispatch("reset")}
      >
        Reset
      </button>
    </div>
  );
};

export default UseReducer;
