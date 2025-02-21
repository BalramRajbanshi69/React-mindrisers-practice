import React, { useContext, useEffect } from "react";
import UserContext from "../ContextUser/UserCreate";
import s1 from "../assets/picThree.jpg";

const FakeApi = () => {
  const { fakeUser, fetchFakeUser, fakeProducts, fetchFakeProducts } =
    useContext(UserContext);
  // console.log(fakeUser);
  console.log(fakeProducts);

  useEffect(() => {
    fetchFakeUser();
  });

  useEffect(() => {
    fetchFakeProducts();
  });

  return (
    <>
    {/* fake user apis */}
      <div className="container">
        <div className="row">
          <div className="container mt-4 ">
            <div className="row">
              <div className="text-center  mb-4 border-bottom pb-2">
                <h1>Some Important Fake User APIs</h1>
              </div>
              {fakeUser &&
                fakeUser.map(
                  ({
                    id,
                    name,
                    phone,
                    email,
                    username,
                    website,
                    address: { city },
                  }) => (
                    <div key={id} className="col-md-4 mb-4">
                      <div className="card h-100 border-0 shadow">
                        <img
                          src={s1}
                          className="card-img-top w-100 h-100 "
                          alt="card image"
                          style={{ objectFit: "cover" }}
                        />
                        <div className="card-body ">
                          <h5
                            className="card-title"
                            style={{ height: "30px", overflow: "hidden" }}
                          >
                            {name || <strong> KATHMANDU POST</strong>}
                          </h5>
                          <p
                            className="card-title"
                            style={{ height: "30px", overflow: "hidden" }}
                          >
                            Username:{" "}
                            <strong>
                              {" "}
                              {username || <strong> BALED</strong>}
                            </strong>
                          </p>
                          <div className="w-100 pb-2 mb-2">
                            <p className="card-text m-0">
                              Phone: <strong>{phone}</strong>
                            </p>
                          </div>
                          <p
                            className="card-text"
                            style={{
                              textAlign: "justify",
                            }}
                          >
                            Email:{" "}
                            <strong>
                              {" "}
                              {email || "No Email Address Provided"}
                            </strong>
                          </p>
                          <p
                            className="card-text"
                            style={{
                              textAlign: "justify",
                            }}
                          >
                            Address:{" "}
                            <strong>
                              {" "}
                              {city || "No Email Address Provided"}
                            </strong>
                          </p>
                          <div className="mt-auto">
                            <a
                              href={`https://${website}`}
                              target="_blank"
                              rel="noreferrer"
                              className="btn btn-danger w-100"
                            >
                              View <strong>{username}</strong> Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
            </div>
          </div>
        </div>
      </div>

      <hr />
      {/* fake store products */}
      <div className="container">
        <div className="row">
          <div className="container mt-4 ">
            <div className="row">
              <div className="text-center  mb-4 border-bottom pb-2">
                <h1>Some Important Fake Store Products</h1>
              </div>
              {fakeProducts &&
                fakeProducts.map(
                  ({
                    id,
                    title,
                    rating: { rate, count },
                    price,
                    image,
                    category,
                  }) => (
                    <div key={id} className="col-md-4 mb-4">
                      <div className="card h-100 border-2 shadow ">
                        <img
                          src={image}
                          className="card-img-top w-100 h-100 "
                          alt="card image"
                          style={{ objectFit: "cover" }}
                        />
                        <div className="card-body ">
                          <h5
                            className="card-title"
                            style={{ height: "30px", overflow: "hidden" }}
                          >
                            {title || <strong> KATHMANDU POST</strong>}
                          </h5>
                          <p
                            className="card-title"
                            style={{ height: "30px", overflow: "hidden" }}
                          >
                            Category:
                            <strong>
                              {" "}
                              {category || <strong> BALED</strong>}
                            </strong>
                          </p>
                          <div className="w-100 pb-2 mb-2">
                            <p className="card-text m-0">
                              Price: <strong>{price}</strong>
                            </p>
                          </div>
                          <p
                            className="card-text"
                            style={{
                              textAlign: "justify",
                            }}
                          >
                            Rate: <strong> {rate || "No rate Provided"}</strong>
                          </p>
                          <p
                            className="card-text"
                            style={{
                              textAlign: "justify",
                            }}
                          >
                            Count:{" "}
                            <strong> {count || "No count Provided"}</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FakeApi;
