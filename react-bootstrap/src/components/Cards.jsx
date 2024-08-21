import React, { useContext, useEffect, useState } from "react";
import house from "../assets/houses/h2.jpg";
import blogContext from "../context/blogs/BlogContext";

const Cards = () => {
  const context = useContext(blogContext);
  const { article, fetchData } = context;

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <h4 className="service-heading p-4 mt-5">Our News</h4>
      <div className="row">
        {article &&
          article.map((e) => {
            console.log(e.title);

            return (
              // You need to add a return statement here
              <div className="col-md-3" key={e.source.id}>
                <div className="card">
                  <img
                    src={e.urlToImage === null ? house : e.urlToImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{e.title}</h5>
                    <p className="card-text">{e.source.id}</p>
                    <a href={e.url} target="blank" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Cards;
