import { useContext } from "react";
import ItemCount from "./ItemCount"
import { CartContext } from "./context/CartContext";

const ItemDetail=({item})=>{
    const {addItem}=useContext(CartContext)

    const onAdd = (quantity)=>{
        addItem(item ,quantity)
        console.log("Agregaste" + quantity + "productos");
    }

    return(
        <div className="container">
            <div className="row">
            <div className="col md-4 offset-md-1">
            <img src={item.imagen} className="img-fluid" style={{width:"35%"}} alt={item.nombre}/>
            </div>
            <div className="col-md-4">
                <h1 className="fs-3 text-uppercase fw-semibold">{item.nombre}</h1>
                <p className="fs-4 fw-bold"> <b>$ {item.precio}</b></p>
                <p className="fw-bolder">{item.descripcion}</p>
                <p className="fs-3"><b>Avaible {item.stock}</b></p>
                <ItemCount stock={item.stock} onAdd={onAdd}/>
            </div>
            </div>
        </div>

    )
}

export default ItemDetail;