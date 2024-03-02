import styles from './Cart.module.css'
import CartItem from './CartItem';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
  let cartcontext = useContext(CartContext)

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartcontext.cart.map((item) => {
        return (
          <CartItem
            id={item.id}
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={Number(item.price)}
          />
        );
      })}
    </ul>
  );

  let totalBill = cartcontext.cart.reduce((acc, item)=> acc+ item.amount*item.price, 0)
     
  return (
    <Modal onBackdropClick={props.onCloseClick}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>&#8377;{totalBill}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onCloseClick}>
          Close
        </button>
        <button className={styles["button"]} onClick={cartcontext.clearCart}>Get bill</button>
      </div>
    </Modal>
  );
};

export default Cart;
