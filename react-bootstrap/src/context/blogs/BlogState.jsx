import React, { useReducer, useState } from "react";
import blogContext from "./BlogContext";
import { cartReducer } from "../Reducers";
import j1 from "../../assets/jerseys/j1.png";
import j2 from "../../assets/jerseys/j2.png";

const BlogState = (props) => {
  const products = [
    {
      id: "111as",
      title: "Real Madrid:Teka",
      description: "A classic retro football shirt featuring the iconic Real Madrid Teka sponsor",
      price: 2500,
      instock: 5,
      image: j1, // Use imported image
    },
    {
      id: "112as",
      title: "Arsenal: O2",
      description: "Vintage Arsenal O2- jersey ",
      price: 1800,
      instock: 4,
      image: j2, // Use imported image
    },
  ];

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return (
    <blogContext.Provider value={{ state, dispatch }}>
      {props.children}
    </blogContext.Provider>
  );
};

export default BlogState;
