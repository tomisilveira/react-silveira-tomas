import { useEffect, useState } from "react"
import { pedirDatosPorID } from "../helpers/pedirDatos"

const ItemDetails = ()=>{
const [item, setItem]=useState(null)
const[loading,setLoading]=useState(null)

const {itemId} = useParams()
useEffect(()=>{
    setLoading(true)

    pedirDatosPorID(Number(itemId))
    .then((resp)=>{
        setItem(resp)
    })
    .catch((error) => {
        console.log("error")
        setLoading(false)
    })
    .finally (( ) => {
        setLoading(false)
    })
}
)
    return(
        <div  className="card">
                <div  className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 card">
                    <a href="#">
                        <img className="p-8 rounded-t-lg" src={item.img} alt={item.name} />
                    </a>
                <div className="px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                    </a>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">{item.precio}</span>
                    </div>
                </div>
                </div>
        
        </div>
    )
    
    }
    
    export default ItemDetails