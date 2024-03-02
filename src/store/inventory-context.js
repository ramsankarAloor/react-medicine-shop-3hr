import React from "react";

const InventoryContext = React.createContext({
    inventory : [],
    addToInventory: function(item){}
})

export default InventoryContext;