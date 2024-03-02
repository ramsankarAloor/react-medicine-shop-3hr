import styles from './MedicineItem.module.css'
import MedicineItemForm from './MedicineItemForm';

const MedicineItem = (props) => {  
  return (
    <li className={styles.medicine}>
      <div>
        <div>
          <h3>{props.name}</h3>
        </div>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>&#8377;{props.price}</div>
      </div>
      <div>
        <MedicineItemForm />
      </div>
    </li>
  );
};

export default MedicineItem;
