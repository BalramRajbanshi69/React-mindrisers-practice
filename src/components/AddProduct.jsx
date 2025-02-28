import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddProduct = () => {
 
  // const baseURL = import.meta.env.VITE_API_URL;
  // const authToken = import.meta.env.VITE_AUTH_TOKEN;

  const [addProduct, setAddProduct] = useState({
    title: "",
    description: "",
    price: "",
    inStock: "",
    image: "",
  });

  const handleSubmit = async (e) => {
    console.log("added product");
    e.preventDefault();



    const loadingToastId = toast.loading("Adding products.....");

    const formData = new FormData();
    formData.append("title", addProduct.title);
    formData.append("description", addProduct.description);
    formData.append("price", addProduct.price);
    formData.append("inStock", addProduct.inStock);
    if (addProduct.image) {
      formData.append("myfile", addProduct.image);
    }

    try {
      const response = await axios.post(
        // `${baseURL}/product/addproduct`,
        "http://localhost:5000/api/product/addproduct",
        formData,
        {
          headers: {
            // "Content-Type": "multipart/form-data",
            "auth-token": localStorage.getItem("token"),
          },
        }
      );

      toast.update(loadingToastId, {
        render: "Added product successfully",
        type: "success",
        isLoading: false,
        autoClose: 4000,
      });

      console.log(response.data);
      setAddProduct({
        title: "",
        description: "",
        price: "",
        inStock: "",
        image: "",
      });
    } catch (error) {
      toast.update(loadingToastId, {
        render: "Failed to add products",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
      

      console.error(error);
    }
  };

  const handleChange = (e) => {
    if (e.target.type === "file") {
      setAddProduct({ ...addProduct, [e.target.name]: e.target.files[0] });
      console.log(e.target.files[0]);
    } else {
      setAddProduct({ ...addProduct, [e.target.name]: e.target.value });
    }
    console.log("handle change");
  };
  return (
    <div className="container mt-4">
      <h3 className="text-center">Add Products</h3> <hr />
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <div className="form-group mb-4 row">
          <div className=" col-1 ">
            <label htmlFor="title" className="form-label ">
              Title:
            </label>
          </div>
          <div className="col-11">
            <input
              type="text"
              name="title"
              value={addProduct.title}
              id="title"
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group mb-4 row">
          <div className=" col-1 ">
            <label htmlFor="description" className="form-label">
              Description:
            </label>
          </div>
          <div className="col-11">
            <textarea
              type="text"
              name="description"
              value={addProduct.description}
              id="description"
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group mb-4 row">
          <div className="col-1">
            <label htmlFor="price" className="form-label">
              Price:
            </label>
          </div>
          <div className="col-11">
            <input
              type="number"
              name="price"
              value={addProduct.price}
              id="price"
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group mb-4 row">
          <div className="col-1">
            <label htmlFor="inStock" className="form-label">
              In Stock:
            </label>
          </div>
          <div className="col-11">
            <input
              type="number"
              name="inStock"
              value={addProduct.inStock}
              id="inStock"
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group  mb-4 row">
          <div className="col-1">
            <label htmlFor="image" className="form-label">
              Image:
            </label>
          </div>
          <div className="col-11">
            <input
              type="file"
              multiple
              name="image"
              id="image"
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-outline-primary w-50">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
