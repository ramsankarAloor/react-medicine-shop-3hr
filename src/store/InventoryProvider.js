import { useState } from "react";
import InventoryContext from "./inventory-context";

const InventoryProvider=props=>{
    const [inventory, setInventory] = useState([])

    const inventoryContext = {
        inventory : [...inventory],
        addToInventory: addToInventory
    }

    function addToInventory(item){
        setInventory((prevInventory)=> {
            return [...prevInventory, item]
        }) 
    }

    return(
        <InventoryContext.Provider value={inventoryContext}>
            {props.children}
        </InventoryContext.Provider>
    )
}

export default InventoryProvider;