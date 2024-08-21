import React from "react";
import img from "../assets/img.png";

const TextImage = () => {
  return (
    <section className="container my-5">
      <div className="row align-items-center">
        {/* Text Column */}
        <div className="col-md-6">
          <h2 className="display-4 mb-4">Breaking News and Updates</h2>
          <p className="fs-5">
            Stay informed with the latest news and updates from around the world.
          </p>
        </div>

        {/* Image Column */}
        <div className="col-md-6">
          <img src={img} className="img-fluid rounded" alt="Breaking News" />
        </div>
      </div>
    </section>
  );
};

export default TextImage;
