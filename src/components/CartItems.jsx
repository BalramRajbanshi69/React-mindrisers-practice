import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";

const CartItems = () => {
  const {state: { cart }} = useContext(ProductContext);

  const calculateTotal = () => {
    return cart.reduce((total, curr) => total + curr.price, 0);
  };

  if (!cart || cart.length === 0) {
    return (
      <div className="container mt-5">
        <div className="alert alert-info">Your cart is empty</div>
      </div>
    );
  }

  return (
    <>
      <div className="container mt-5">
        <h2 className="mb-4">Shopping Cart</h2>
        <div className="table-responsive">
          <table className="table table-hover text-center ">
            <thead className=" table-dark">
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item._id}>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td className="fw-bold">${item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3" className="text-end">
                  <strong>Grand Total:</strong>
                </td>
                <td>
                  <strong>${calculateTotal()}</strong>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
};

export default CartItems;
