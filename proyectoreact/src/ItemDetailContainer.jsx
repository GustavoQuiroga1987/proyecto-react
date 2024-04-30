import { useState , useEffect} from "react";
import {useParams} from "react-router-dom";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer=()=>{
        const [item ,setitem]=useState([]);
        const {id}=useParams();
    
        useState(()=>{
            fetch("https://api.mercadolibre.com/sites/MLA/search?q=celulares&limit=15#json")
            .then(respuesta =>respuesta.json())
            .then(resultado =>{
                const producto = resultado.results.find(item=>item.id==id);
                setitem(producto);
            })
        },[id])



    return(
        <div className="container">
            <div className="row my-5"> 
                    <ItemDetail item={item}/>
                    
            </div>
        </div>
    )
}


export default ItemDetailContainer