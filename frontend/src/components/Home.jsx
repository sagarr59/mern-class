import React from "react";
import Carousel from "./Carousel";
import TextImage from "./TextImage";
import Cards from "./Cards";
import ContactUs from "./ContactUs";
import Stats from "./Stats";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Cards />
      <Stats />
      <TextImage />
      <ContactUs />
    </div>
  );
};

export default Home;
