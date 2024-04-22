import { useEffect , useState } from "react"
import ItemCount from "./ItemCount";

const ItemList=()=>{
    const[productos ,setproductos]=useState([]);

    useState(()=>{
        fetch("https://api.mercadolibre.com/sites/MLA/search?q=celulares&limit=10")
        .then(respuesta =>respuesta.json())
        .then(resultado =>{
            setproductos(resultado.results);
        })
    },[])



    return(
    <div className="container ">
        <div className="row m-5 ">
            <div className="row ">
                {
                    productos.map(producto=>(
                        <div key={producto.id} className="col-md-4 p-3 " >
                            <div class="row g-3">
                                <div class="col-md-8">  
                                    <img src={producto.thumbnail} class="img-fluid rounded-start" alt={producto.title} />
                                </div>
                                <div class="col-md-9"> 
                                    <div className="card-body">
                                        <h5 className="card-title">{producto.title}</h5>
                                        <p className="card-text fw-bold">${producto.price}.</p>
                                        <p>Stock {producto.available_quantity}</p>
                                        <ItemCount/>
                                    </div>
                                </div>
                            </div>
            </div>
                    ))
                }
            </div>
        </div>
    </div>



    )
}

export default ItemList