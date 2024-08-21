import React from "react";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";

const Carousel = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="2000">
          <img className="d-block w-100" src={hero1} alt="First slide" />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img className="d-block w-100" src={hero2} alt="Second slide" />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img className="d-block w-100" src={hero3} alt="Third slide" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
