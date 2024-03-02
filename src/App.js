import InventoryForm from "./componenets/InventoryForm/InventoryForm";
import ListCard from "./componenets/ListCard/ListCard";
import InventoryProvider from "./store/InventoryProvider";

function App() {
  return (
    <InventoryProvider>
      <InventoryForm />
      <ListCard />
    </InventoryProvider>
  );
}

export default App;
