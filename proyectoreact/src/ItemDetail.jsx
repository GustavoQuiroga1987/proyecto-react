import ItemCount from "./ItemCount"

const ItemDetail=({item})=>{
    return(
        <div className="container">
            <div className="row">
            <div className="col md-4 offset-md-1">
            <img src={item.thumbnail} className="img-fluid" style={{width:"35%"}} alt={item.title}/>
            </div>
            <div className="col-md-4">
                <h1>{item.title}</h1>
                <p> <b>${item.price}</b></p>
                <p><b>Avaible {item.available_quantity}</b></p>
                <ItemCount stock={item.available_quantity}/>
            </div>
            </div>
        </div>

    )
}

export default ItemDetail;