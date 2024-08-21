import React, { useContext, useEffect } from "react";
import blogContext from "../context/blogs/BlogContext";
import TextImage from "./TextImage";

const About = () => {
  const context = useContext(blogContext);
  const { state, updateValue } = context;
  // console.log("Value of a:", a);
  useEffect(() => {
    updateValue();
  }, []);

  return (
    <div>
      <h2 className=" p-5 mt-5">
        Hello, I'm {state.name} and I am {state.age} years old!!
      </h2>
      <TextImage />
    </div>
  );
};

export default About;
