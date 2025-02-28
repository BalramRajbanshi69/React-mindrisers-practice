import React, { useContext, useEffect, useState } from "react";
import s1 from "../assets/picTwo.jpg";
import ProductContext from "../context/ProductContext";
import { BsThreeDots } from "react-icons/bs";
import EditModal from "./EditModal";
import { toast } from "react-toastify";

const About_Us = () => {
  const {
    product,
    state: { cart },
    dispatch,
    allProduct,
    editProduct,
    deleteProduct,
  } = useContext(ProductContext);
  console.log("Product items:", product);
  console.log("Carts items:", cart);

  const [menuVisible, setMenuVisible] = useState(false);
  const [modelVisible, setModelVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const showAddNotification = () => toast.success("Added Cart Successfully");
  const showRemoveNotification = () => toast.error("Removed Cart Successfully");

  const handleMenu = (id) => {
    setMenuVisible((prevMenu) => ({
      ...prevMenu,
      [id]: !prevMenu[id],
    }));
  };

  const OpenEditModal = (prod) => {
    setModelVisible(true);
    setSelectedProduct(prod);
  };

  const EditCloseModal = () => {
    setModelVisible(false);
    setSelectedProduct(null);
  };

  const EditSave = (updatedData) => {
    console.log("save changing or changed");
    editProduct(selectedProduct._id, updatedData);
  };

  const handleDeleteMenu = async (id) => {
    console.log("deleting products");
    await deleteProduct(id);
  };

  useEffect(() => {
    allProduct();
  }, []);

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="title">
            <h4>My products</h4>
          </div>
          {product ||
            product.map((item) => {
              return (
                <div key={item._id} className="col-md-3 mb-4">
                  <div className="card">
                    <img src={s1} className="card-img-top" alt="card image" />
                    <div className="card-body">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <h5 className="card-title">{item.title}</h5>
                        <BsThreeDots onClick={() => handleMenu(item._id)} />
                        {menuVisible[item._id] && (
                          <div className="menu">
                            <button onClick={() => OpenEditModal(item)}>
                              Edit
                            </button>

                            <button onClick={() => handleDeleteMenu(item._id)}>
                              Delete
                            </button>
                          </div>
                        )}
                      </div>
                      <p className="card-text">{item.description}</p>
                      <p className="card-text">
                        {" "}
                        <strong>Price:</strong> ${item.price}
                      </p>
                      <p className="card-text">
                        {" "}
                        <strong>InStock:</strong> {item.inStock}
                      </p>
                      {cart && cart.some((p) => p._id === item._id) ? (
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            showRemoveNotification(),
                              dispatch({
                                type: "REMOVE_FROM_CART",
                                payload: item,
                              });
                          }}
                        >
                          Remove From Cart
                        </button>
                      ) : (
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            showAddNotification(),
                              dispatch({
                                type: "ADD_TO_CART",
                                payload: item,
                              });
                          }}
                        >
                          Add To Cart
                        </button>
                      )}
                    </div>
                  </div>

                  {modelVisible &&
                    selectedProduct &&
                    selectedProduct._id === item._id && (
                      <EditModal
                        isOpen={modelVisible}
                        onClose={EditCloseModal}
                        prod={selectedProduct}
                        onSave={EditSave}
                      />
                    )}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default About_Us;
