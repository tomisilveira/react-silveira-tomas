import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
  import { useState } from "react";
  import { useEffect } from "react";
import Item from "../Item/Item";
  

const ItemList=({items})=>{
return(
    <div>
            <h2>Listado de Productos</h2>
            <hr></hr>
            {items.map((producto)=> <div>
                <br></br>
                <Item key={producto.id} item={producto}/>
        </div>)}
        
        </div>
)
}


export default ItemList