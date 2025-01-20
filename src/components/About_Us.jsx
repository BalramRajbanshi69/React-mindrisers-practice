import React, { useContext } from "react";
import s1 from "../assets/form.jpg";
import productContext from "../context/ProductContext";

const About_Us = () => {
  const { products } = useContext(productContext);
  // console.log(products);

  const productList =  products.map(({id,title,description,price,quantity}) => (
          <div key={id} className="col-md-3 mb-4">
            <div className="card">
              <img src={s1} className="card-img-top" alt="card image" />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"> <strong>Price:</strong> ${price}</p>
                <p className="card-text"> <strong>Quantity:</strong> {quantity}</p>
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
        ))


  return (
    <div className="container mt-4">
      <div className="row">
       {productList}
      </div>
    </div>
  );
};

export default About_Us;