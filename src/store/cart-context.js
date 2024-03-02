import React from "react";

const CartContext = React.createContext({
  cart: [],
  addToCart: function () {}
});

export default CartContext;
