import React, { useContext, useEffect } from "react";
import s1 from "../assets/picTwo.jpg";
import ProductContext from "../context/ProductContext";

const About_Us = () => {
  const { products,fetchArticle,article } = useContext(ProductContext);
  console.log(products);
  console.log(article);

  const handleAddCart=()=>{
    console.log('products are added to cart');
    
  }
  


useEffect(() => {
  fetchArticle();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);


  return (
    <>
      <div className="container mt-4">
        <div className="row">
          {products.map(({ id, title, description, price, quantity }) => (
            <div key={id} className="col-md-3 mb-4">
              <div className="card">
                <img src={s1} className="card-img-top" alt="card image" />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                  <p className="card-text">
                    {" "}
                    <strong>Price:</strong> ${price}
                  </p>
                  <p className="card-text">
                    {" "}
                    <strong>Quantity:</strong> {quantity}
                  </p>
                  <button className="btn btn-primary" onClick={handleAddCart}>View Details</button>
                </div>
              </div>
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
                      <a  href={url} className="btn btn-primary w-100" target="_blank" rel="noreferrer">
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

