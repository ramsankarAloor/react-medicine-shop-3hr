import InventoryForm from "./componenets/InventoryForm/InventoryForm";
import ListCard from "./componenets/ListCard/ListCard";
import CartProvider from "./store/CartProvider";
import InventoryProvider from "./store/InventoryProvider";

function App() {
  return (
    <InventoryProvider>
      <CartProvider>
        <InventoryForm />
        <ListCard />
      </CartProvider>
    </InventoryProvider>
  );
}

export default App;
