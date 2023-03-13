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

  
   
  const ItemListContainer = (  ) => {
    


    const [productos, setProductos] = useState([])
    console.log(productos)

    useEffect(()=>{
        pedirDatos()
        .then((response) => {
            setProductos(response)
        })
        .catch((error) => {
            console.log("error")
        })
    },[])
    

    return (
    
        <div>
            <h2>Listado de Productos</h2>
            <hr></hr>
            {productos.map((el)=> <div>
                <br></br>
        <div className="card">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 card">
            <a href="#">
                <img className="p-8 rounded-t-lg" src={el.img} alt={el.name} />
            </a>
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{el.name}</h5>
                </a>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">{el.precio}</span>
                    <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Agregar al carrito</a>
                </div>
            </div>
        </div>
        
        </div>
        </div>)}
        
        </div>
    );
  }

  export default ItemListContainer