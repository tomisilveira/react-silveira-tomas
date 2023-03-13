import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
  import './ItemListContainer.scss'
  import { useState } from "react";
  import { useEffect } from "react";
  
  import {pedirDatos} from '../helpers/pedirDatos';
  import ItemList from "../ItemList/ItemList";

  
   
  const ItemListContainer = (  ) => {
    


    const [productos, setProductos] = useState([])
    const [loading,setLoading]=useState(true)

    useEffect(()=>{


        pedirDatos()
        .then((response) => {
            setProductos(response)
            setLoading(false)
        })
        .catch((error) => {
            console.log("error")
            setLoading(false)
        })
        .finally (( ) => {
            setLoading(false)
        })
    },[])
    

    return (

        <div className="contenedor">
            {
                loading
                ?<h2>Cargando...</h2>
                :<ItemList items={productos}/>
            }
            
        </div>
    );
  }

  export default ItemListContainer