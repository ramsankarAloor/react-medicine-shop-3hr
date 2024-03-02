import { useContext, useState } from "react";
import Input from "../../../UI/Input";
import styles from "./MedicineItemForm.module.css";
import CartProvider from "../../../../store/CartProvider";
import CartContext from "../../../../store/cart-context";
import InventoryContext from "../../../../store/inventory-context";

const MedicineItemForm = (props) => {
  const cartcontext = useContext(CartContext);
  const inventorycontext = useContext(InventoryContext)

  const [amount, setAmount] = useState(1);
  function setAmountHandler(e) {
    setAmount(e.target.value);
  }

  function addToCartHandler(e) {
    e.preventDefault();
    const item = {
      id: props.id,
      amount,
    };
    cartcontext.addToCart(item);
    inventorycontext.minusFromInventory(props.id, amount);
    setAmount(1);
  }

  return (
    <form className={styles.form} onSubmit={addToCartHandler}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          value: amount,
          onChange: setAmountHandler,
        }}
      />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MedicineItemForm;
