import React from "react";
import img from "../assets/img.png";

const TextImage = () => {
  return (
    <section className="container my-5 pt-5">
      <div className="row align-items-center">
        {/* Text Column */}
        <div className="col-md-6">
          <h2 className="display-3 fw-bold mb-4 text-primary">About Us</h2>
          <p className="fs-4 text-muted text-justify">
            At Retro Jerseys, we specialize in offering a selection of iconic
            football shirts that embody the spirit and history of the game.
            Our collection is designed for enthusiasts who appreciate both the
            legacy and the craftsmanship behind these timeless pieces.
          </p>
        </div>

        {/* Image Column */}
        <div className="col-md-6">
          <img
            src={img}
            className="img-fluid rounded shadow-lg"
            alt="About Us"
          />
        </div>
      </div>
    </section>
  );
};

export default TextImage;
