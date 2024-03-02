import InventoryContext from "./inventory-context";

const InventoryProvider=props=>{

    const inventoryContext = {
        inventory : []
    }

    return(
        <InventoryContext.Provider value={inventoryContext}>
            {props.children}
        </InventoryContext.Provider>
    )
}

export default InventoryProvider;