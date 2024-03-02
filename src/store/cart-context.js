import React from "react";

const CartContext = React.createContext({
  cart: [],
  addToCart: function (item) {},
  removeFromCart: function (id) {},
  clearCart: function () {},
});

export default CartContext;
