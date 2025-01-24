import React, { useContext, useEffect } from "react";
import UserContext from "../ContextUser/UserCreate";

const Escuelajs = () => {
  const { fakeEscuelajs, fetchFakeEscuelajs } = useContext(UserContext);
  console.log("The result of fakeEscuelajs is:", fakeEscuelajs);

  useEffect(() => {
    fetchFakeEscuelajs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="text-center mb-4 border-bottom pb-2">
            <h1>EscuelaJS Fake API</h1>
          </div>
          {fakeEscuelajs &&
            fakeEscuelajs.map(
              ({
                id,
                title,
                price,
                category: { name, image, creationAt, updatedAt },
              }) => {
                return (
                  <div key={id} className="col-md-4 mb-4">
                    <div className="card" style="width: 18rem;">
                      <img src={image} className="card-img-top" alt="Images" />
                      <div className="card-body">
                        <h5 className="card-title">
                          <strong>
                            {title.toUpperCase() || (
                              <strong> KATHMANDU POST</strong>
                            )}
                          </strong>
                        </h5>
                        <h6 className="card-title">
                          <strong>
                            {name.toUpperCase() || (
                              <strong> KATHMANDU POST</strong>
                            )}
                          </strong>
                        </h6>
                        <p className="card-text">
                          Price: <strong>{price}</strong>
                        </p>
                        <p className="card-text">
                          Creation At: <strong>{creationAt}</strong>
                        </p>
                        <p className="card-text">
                          Updated At: <strong>{updatedAt}</strong>
                        </p>
                        <a href="#" className="btn btn-primary">
                          Go {title}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
        </div>
      </div>
    </>
  );
};

export default Escuelajs;
