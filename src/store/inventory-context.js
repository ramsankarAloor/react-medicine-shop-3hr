import React from "react";

const InventoryContext = React.createContext({
  inventory: [],
  addToInventory: function (item) {},
  minusFromInventory: function (id, amt) {},
});

export default InventoryContext;
