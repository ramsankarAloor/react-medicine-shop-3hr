import styles from './MedicineItem.module.css'
import MedicineItemForm from './MedicineItemForm';

const MedicineItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  
  return (
    <li className={styles.meal}>
      <div>
        <div>
          <h3>{props.name}</h3>
        </div>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MedicineItemForm />
      </div>
    </li>
  );
};

export default MedicineItem;
