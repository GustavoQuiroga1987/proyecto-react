import { useEffect,useState } from "react";
import ItemList from "./ItemList"
import arrayProductos from "./productos.json"
import {useParams} from "react-router-dom";
import Loading from "./Loading";
import {doc ,collection,getDocs,getFirestore,query,where} from "firebase/firestore"






const ItemListContainer=()=>{
        const[items ,setItems]=useState([]);
        const [visible, setVisible] = useState(true);
        const{id}=useParams();
    
     //acceso via json   
        useEffect(() => {
                const promesa = new Promise(resolve => {
                    setTimeout(() => {
                        resolve(id ? arrayProductos.filter(item => item.categoria == id) : arrayProductos);
                    }, 2000)
                });
                
                promesa.then(respuesta => {
                    setItems(respuesta);
                })
            }, [id])

    //acceso via firebase   

   /* useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const queryCollection = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(queryCollection).then(snapShot => {
            if (snapShot.size > 0) {
                setItems(snapShot.docs.map(item => ({id:item.id, ...item.data()})));
                setVisible(false);
            }
        });
    }, [id]);*/



    return(
        <div className="container">
            <div className="row my-5"> 
            <ItemList items={items} />
                    
            </div>
        </div>
    )
}


export default ItemListContainer