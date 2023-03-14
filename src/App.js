import { Navbar } from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrouserRouter, BrouserRouter, Route} from "react-router-dom"
import Nosotros from "./components/Nosotros/Nosotros";
import Contacto from "./components/Contacto/Contacto";
import ItemDetails from "./components/ItemDetails/ItemDetails";



function App() {

  return (
    
      <BrouserRouter>
              <Navbar/>
        
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/productos/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/detail/:itemId" element={<ItemDetails/>}/>
          <Route path="/nosotros" element={<Nosotros/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
        <div>
        </div>
     </BrouserRouter>
  );
}

export default App;
