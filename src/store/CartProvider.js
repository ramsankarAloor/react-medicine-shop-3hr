import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const cartContext = {
    cart: [...cart],
    addToCart: addToCart,
  };

  console.log(cartContext);

  function addToCart(item) {
    setCart((prevCart) => [...prevCart, item]);
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
