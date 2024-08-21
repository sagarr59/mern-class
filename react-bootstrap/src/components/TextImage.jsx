import React from "react";
import img from "../assets/img.png";

const TextImage = () => {
  return (
    <section className="container my-5 pt-2">
      <div className="row align-items-center">
        {/* Text Column */}
        <div className="col-md-6">
          <h2 className="display-1 fw-bold mb-4">About Us</h2>
          <p className="fs-5 text-justify">
            We are dedicated to providing the latest news and updates from
            around the world, keeping you informed and engaged with insightful
            stories and in-depth analysis.
          </p>
        </div>

        {/* Image Column */}
        <div className="col-md-6">
          <img src={img} className="img-fluid rounded" alt="About Us" />
        </div>
      </div>
    </section>
  );
};

export default TextImage;
