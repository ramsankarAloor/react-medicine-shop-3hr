import MedicineItem from "./MedicineItem/MedicineItem";
import Card from "../../UI/Card";
import { useContext } from "react";
import InventoryContext from "../../../store/inventory-context";

const MedicineList = (props) => {
  const invContext = useContext(InventoryContext);

  const mealsList = invContext.inventory.map((item) => (
    <MedicineItem
      key={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
    />
  ));

  return (
    <section>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default MedicineList;
