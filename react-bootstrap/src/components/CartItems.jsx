import React, { useContext } from "react";
import blogContext from "../context/blogs/BlogContext";
import house from "../assets/houses/h2.jpg";
const CartItems = () => {
  const context = useContext(blogContext);
  const {
    state: { cart },dispatch
  } = context;
  console.log("cart", cart);
  return (
    <div className="container home">
      <div className="productContainer-cart">
        <ul className="list-group">

          {cart.map((prod)=>(
            <li className="list-group-item" key={prod.id}>

              <div className="row">
                <div className="col-md-2">
                  <img src={house} alt={prod.name} className="img-fluid rounded"/>
                </div>
                <div className="col-md-2">
                 <h4>Name:{prod.title}</h4> 
                </div>
                <div className="col-md-2">
                  <h4>Price:{prod.price}</h4>
                </div>
                <div className="col-md-2">
                  <select value={prod.qty}>
                    onChange={(e)=>
                    dispatch({
                      type:"CHANGE_CART_QTY",
                      payload:{
                        id:prod.id,
                        qty:e.target.value
                      }
                    })}
                    className='form-control'>

                  </select>
                </div>

               
              </div>
            </li>
            
          ))}
        </ul>
      </div>
    </div>
  );
};
export default CartItems;
