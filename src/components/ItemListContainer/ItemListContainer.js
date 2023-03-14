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
  import {useParams} from 'react-router-dom'

  
   
  const ItemListContainer = (  ) => {
    


    const [productos, setProductos] = useState([])
    const [loading,setLoading]=useState(true)
    const params = useParams()


    const {categoryId}=useParams()


    useEffect(()=>{

        pedirDatos()
        .then((response) => {
            if(!categoryId){
            setProductos(response)
            setLoading(false)}
            else{
                setProductos(response.filter((prod)=>prod.category===categoryId))
            }
        })
        .catch((error) => {
            console.log("error")
            setLoading(false)
        })
        .finally (( ) => {
            setLoading(false)
        })
    },[categoryId])
    

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