import React from "react";
import CountUp from "react-countup";
import { FaSmile, FaTshirt, FaTruck, FaClock } from "react-icons/fa";

const Stats = () => {
  return (
    <section className="container my-5">
      <div className="row text-center">
        {/* Happy Customers */}
        <div className="col-md-3 mb-4">
          <FaSmile size={50} className="text-primary mb-2" />
          <h2>
            <CountUp start={0} end={50} duration={5} suffix="+" />
          </h2>
          <p>Happy Customers</p>
        </div>
        {/* Jerseys Listed */}
        <div className="col-md-3 mb-4">
          <FaTshirt size={50} className="text-success mb-2" />
          <h2>
            <CountUp start={0} end={50} duration={5} suffix="+" />
          </h2>
          <p>Jerseys Listed</p>
        </div>
        {/* 24/7 Availability */}
        <div className="col-md-3 mb-4">
          <FaClock size={50} className="text-warning mb-2" />
          <h2>
            <CountUp start={0} end={24} duration={5} />
            <span>/</span>
            <CountUp start={0} end={7} duration={5} />
          </h2>
          <p>Availability</p>
        </div>
        {/* Free Home Delivery */}
        <div className="col-md-3 mb-4">
          <FaTruck size={50} className="text-danger mb-2" />
          <h2>Free</h2>
          <p>Home Delivery</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
