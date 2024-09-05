import React, { useContext } from "react";
import blogContext from "../context/blogs/BlogContext";

const Cards = () => {
  const context = useContext(blogContext);
  const {
    state: { cart, products },
    dispatch,
  } = context;

  return (
    <div className="container">
      <h4 className="fs-3 fw-bold bg-dark text-white text-center p-3 my-3">
        FEATURED PRODUCTS
      </h4>

      <div className="row">
        {products &&
          products.map((e) => (
            <div className="col-md-4 mb-4" key={e.id}>
              <div className="card">
                <img src={e.image} className="card-img-top" alt={e.title} />
                <div className="card-body">
                  <h5 className="card-title">{e.title}</h5>
                  <p className="card-text">Rs. {e.price}</p>
                  {cart && cart.some((p) => p.id === e.id) ? (
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: e,
                        });
                      }}
                    >
                      Remove from cart
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        dispatch({
                          type: "ADD_TO_CART",
                          payload: e,
                        });
                      }}
                    >
                      Add to cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Cards;
