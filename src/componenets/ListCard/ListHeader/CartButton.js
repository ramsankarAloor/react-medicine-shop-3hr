import styles from "./CartButton.module.css";
import CartIcon from "../../Cart/CartIcon";
import { useContext, useState } from "react";
import CartContext from "../../../store/cart-context";
import Cart from "../../Cart/Cart";

const CartButton = (props) => {
  const [cartVisible, setCartVisible] = useState(false);

  const cartcontext = useContext(CartContext);

  const badgeNum = cartcontext.cart.reduce(
    (acc, item) => acc + Number(item.amount),
    0
  );

  function cartButtonHandler() {
    setCartVisible(true);
  }

  function closeCartModal() {
    setCartVisible(false);
  }
  return (
    <>
      {cartVisible && <Cart onCloseClick={closeCartModal} />}
      <button className={styles.button} onClick={cartButtonHandler}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>{badgeNum}</span>
      </button>
    </>
  );
};

export default CartButton;
