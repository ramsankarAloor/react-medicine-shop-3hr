import Card from "../UI/Card";
import styles from './InventoryForm.module.css'

const InventoryForm = (props) => {
  return (
    <Card className={styles['flex-card']}>
      <div className={styles['sub-div']}>
        <input type="text" placeholder="Medicine name"></input>
      </div>
      <div className={styles['sub-div']}>
        <input type="text" placeholder="Description"></input>
      </div>
      <div className={styles['sub-div']}>
        <input type="number" placeholder="Price" min="0" step="0.01"></input>
      </div>
      <div className={styles['sub-div']}>
        <input type="text" placeholder="Quantity" min='0' step='1'></input>
      </div>
      <div className={styles['sub-div']}>
        <button>Add to inventory</button>
      </div>
    </Card>
  );
};

export default InventoryForm;
