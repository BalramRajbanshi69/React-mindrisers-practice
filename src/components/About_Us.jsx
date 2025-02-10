import React, { useContext, useEffect, useState } from "react";
import s1 from "../assets/picTwo.jpg";
import ProductContext from "../context/ProductContext";
import { BsThreeDots } from "react-icons/bs";
import EditModal from "./EditModal";
import {toast } from "react-toastify";

const About_Us = () => {
  const {
    products,
    fetchArticle,
    article,
    state: { cart },
    dispatch,
    allProduct,
    editProduct,
    deleteProduct
  } = useContext(ProductContext);
  console.log("Product itemss:", products);
  console.log("Article itemss:", article);
  console.log("Carts itemss:", cart);

  const [menuVisible, setMenuVisible] = useState(false);
  const [modelVisible, setModelVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const showAddNotification =()=> toast.success('Added Cart Successfully');
  const showRemoveNotification =()=> toast.error('Removed Cart Successfully');

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

  const handleDeleteMenu = async(id) => {
    console.log("deleting products");
    await deleteProduct(id);
  };

  useEffect(() => {
    fetchArticle();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(()=>{
    allProduct();
  },[])

  

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          {products.map((items) => (
            <div key={items._id} className="col-md-3 mb-4">
              <div className="card">
                <img src={s1} className="card-img-top" alt="card image" />
                <div className="card-body">
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h5 className="card-title">{items.title}</h5>
                    <BsThreeDots onClick={() => handleMenu(items._id)} />
                    {menuVisible[items._id] && (
                      <div className="menu">
                        <button onClick={() => OpenEditModal(items)}>
                          Edit
                        </button>

                        <button onClick={() => handleDeleteMenu(items._id)}>
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                  <p className="card-text">{items.description}</p>
                  <p className="card-text">
                    {" "}
                    <strong>Price:</strong> ${items.price}
                  </p>
                  <p className="card-text">
                    {" "}
                    <strong>InStock:</strong> {items.inStock}
                  </p>
                  {cart && cart.some((p) => p._id === items._id) ? (
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        showRemoveNotification(),
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: items,
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
                            payload: items,
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
                selectedProduct._id === items._id && (
                  <EditModal
                    isOpen={modelVisible}
                    onClose={EditCloseModal}
                    prod={selectedProduct}
                    onSave={EditSave}
                  />
                )}
            </div>
          ))}
        </div>
      </div>
 
      <hr />

      <div className="container mt-4 ">
        <div className="row">
          <div className="text-center  mb-4 border-bottom pb-2 ">
            <h1>Some Important Articles</h1>
          </div>
          {article &&
            article.map(
              ({
                id,
                author,
                publishedAt,
                description,
                source: { name },
                url,
                urlToImage,
              }) => (
                <div key={id} className="col-md-4 mb-4 ">
                  <div className="card h-100 border-0 shadow">
                    <img
                      src={urlToImage || s1}
                      className="card-img-top w-100 h-100 "
                      alt="card image"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="card-body ">
                      <h5
                        className="card-title"
                        style={{ height: "30px", overflow: "hidden" }}
                      >
                        {author || <strong> KATHMANDU POST</strong>}
                      </h5>
                      <p>
                        Name: <strong>{name}</strong>
                      </p>
                      <p>
                        PublishedAt: <strong>{publishedAt}</strong>
                      </p>

                      <p
                        className="card-text flex-grow-1"
                        style={{
                          height: "150px",
                          overflow: "hidden",
                          wordBreak: "break-word",
                          whiteSpace: "normal",
                          textAlign: "justify",
                        }}
                      >
                        {description ||
                          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ducimus velit, beatae nisi cum saepe facilis ipsa cupiditate sunt animi neque omnis accusantium pariatur et commodi quos exercitationem, dolorum inventore at ratione ut nobis."}
                      </p>
                      <a
                        href={url}
                        className="btn btn-primary w-100"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View <strong>{name}</strong> Details
                      </a>
                    </div>
                  </div>
                </div>
              )
            )}
        </div>
      </div>
    </>
  );
};

export default About_Us;
