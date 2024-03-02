import { useContext, useState } from "react";
import classes from "./CartItem.module.css";
import CartContext from "../../store/cart-context";

const CartItem = (props) => {
  const cartcontext = useContext(CartContext)

  function removeFromCart(id){
    cartcontext.removeFromCart(id)
  }

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{props.price}</span>
          <span className={classes.amount}>x {props.amount}</span>
          <span className={classes.price}>Total : {props.price * props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={()=>{return removeFromCart(props.id)}}>-</button>
      </div>
    </li>
  );
};

export default CartItem;
