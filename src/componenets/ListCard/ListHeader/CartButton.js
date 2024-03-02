import styles from "./CartButton.module.css";
import CartIcon from "../../Cart/CartIcon";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const CartButton = (props) => {
  const cartcontext = useContext(CartContext);

  const badgeNum = cartcontext.cart.reduce((acc, item)=> acc + Number(item.amount), 0)
  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{badgeNum}</span>
    </button>
  );
};

export default CartButton;
