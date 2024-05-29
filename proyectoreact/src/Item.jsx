import { Link } from "react-router-dom"


const Item=({item})=>{
        return(
            <div className="col-md-4 text-center">
                <Link to={"/item/" + item.id}>
            <div className="card border-0" style={{width:"15rem"}}>
            <img src={item.imagen} className="img-fluid" alt={item.nombre}/>
            <div className="card-body">
                <p className="card-text text-uppercase fw-bolder fs-5">{item.nombre}</p>
                <p className="card-text fw-bold fs-3"><b>$ {item.precio}</b></p>
            </div>
          </div>
          </Link>
          </div>
        )
    }

export default Item