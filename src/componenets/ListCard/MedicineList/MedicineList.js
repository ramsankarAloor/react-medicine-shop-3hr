import MedicineItem from "./MedicineItem/MedicineItem";
import { useContext } from "react";
import InventoryContext from "../../../store/inventory-context";

const MedicineList = (props) => {
  const invContext = useContext(InventoryContext);

  const mealsList = invContext.inventory.map((item) => {
    if(item.quantity < 1){
        return <div key={item.id}></div>
    }
    return (
      <MedicineItem
        id={item.id}
        key={item.id}
        name={item.name}
        description={item.description}
        price={item.price}
        quantity={item.quantity}
      />
    );
  });

  return (
    <section>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default MedicineList;
