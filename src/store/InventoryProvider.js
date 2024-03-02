import { useState } from "react";
import InventoryContext from "./inventory-context";

const InventoryProvider = (props) => {
  const [inventory, setInventory] = useState([]);

  const inventoryContext = {
    inventory: [...inventory],
    addToInventory: addToInventory,
    minusFromInventory
  };

  function addToInventory(item) {
    setInventory((prevInventory) => {
      return [...prevInventory, item];
    });
  }

  function minusFromInventory(id, amt) {
    let res = inventory.map((item) => {
      if (item.id === id) {
        item.quantity -= amt;
      }
      return item;
    });

    setInventory([...res]);
  }

  return (
    <InventoryContext.Provider value={inventoryContext}>
      {props.children}
    </InventoryContext.Provider>
  );
};

export default InventoryProvider;
