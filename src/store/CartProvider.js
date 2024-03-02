import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const cartContext = {
    cart: [...cart],
    addToCart,
    removeFromCart
  };

  function addToCart(item) {
    setCart((prevCart) => [...prevCart, item]);
  }

  function removeFromCart(id){
    let res = cart.filter((item)=> item.id !== id)
    setCart(res)
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
