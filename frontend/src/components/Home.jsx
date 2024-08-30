import React from "react";
import Carousel from "./Carousel";
import TextImage from "./TextImage";
import Cards from "./Cards";
import ContactUs from "./ContactUs";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Cards />
      <TextImage />
      <ContactUs />
    </div>
  );
};

export default Home;
