import Card from "../UI/Card";
import ListHeader from "./ListHeader/ListHeader";
import styles from "./ListCard.module.css";
import MedicineList from "./MedicineList/MedicineList";

const ListCard = (props) => {
  return (
    <Card className={styles["list-card"]}>
      <ListHeader />
      <MedicineList />
    </Card>
  );
};

export default ListCard;
