import { Navbar } from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


function App() {

  return (
    <div>
      <Navbar/>
     <ItemListContainer greeting={"Combo de productos"}/>
      

    </div>
    

  );
}

export default App;
