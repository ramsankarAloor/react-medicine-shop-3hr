import Card from "../UI/Card";
import ListHeader from "./ListHeader/ListHeader";
import styles from "./ListCard.module.css";

const ListCard = (props) => {
  return (
    <Card className={styles["list-card"]}>
      <ListHeader />
    </Card>
  );
};

export default ListCard;
