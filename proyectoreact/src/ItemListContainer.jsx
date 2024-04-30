import { useEffect,useState } from "react";
import ItemList from "./ItemList"
import {useParams} from "react-router-dom";






const ItemListContainer=()=>{
        const[items ,setitems]=useState([]);
        const{id}=useParams();
    
        useState(()=>{
            fetch("https://api.mercadolibre.com/sites/MLA/search?q=celulares&limit=15#json")
            .then(respuesta =>respuesta.json())
            .then(resultado =>{
                setitems(id ? resultado.results.filter(item=>item.attributes.values.name==id):resultado.results);
            })
        },[id])




    return(
        <div className="container">
            <div className="row my-5"> 
                    <ItemList items={items}/>
                    
            </div>
        </div>
    )
}


export default ItemListContainer