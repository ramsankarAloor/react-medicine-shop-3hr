import { useContext, useState } from "react";
import Card from "../UI/Card";
import styles from './InventoryForm.module.css'
import InventoryContext from "../../store/inventory-context";

const InventoryForm = (props) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')

    const invContext = useContext(InventoryContext)

    function nameChangeHandler(e){
        setName(e.target.value)
    }
    function descChangeHandler(e){
        setDescription(e.target.value)
    }
    function priceChangeHandler(e){
        setPrice(e.target.value)
    }
    function quantityChangeHandler(e){
        setQuantity(e.target.value)
    }

    function addToInvHandler(){
        let item = {
            name,
            description,
            price,
            quantity
        }
        invContext.addToInventory(item)

        setName('')
        setDescription('')
        setPrice('')
        setQuantity('')
    }

  return (
    <Card className={styles['flex-card']}>
      <div className={styles['sub-div']}>
        <input type="text" placeholder="Medicine name" value={name} onChange={nameChangeHandler}></input>
      </div>
      <div className={styles['sub-div']}>
        <input type="text" placeholder="Description" value={description} onChange={descChangeHandler}></input>
      </div>
      <div className={styles['sub-div']}>
        <input type="number" placeholder="Price" min="0" step="0.01" value={price} onChange={priceChangeHandler}></input>
      </div>
      <div className={styles['sub-div']}>
        <input type="text" placeholder="Quantity" min='0' step='1' value={quantity} onChange={quantityChangeHandler}></input>
      </div>
      <div className={styles['sub-div']}>
        <button onClick={addToInvHandler}>Add to inventory</button>
      </div>
    </Card>
  );
};

export default InventoryForm;
