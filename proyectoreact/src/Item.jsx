import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"

const Item=({item})=>{
        return(
            <div className="col-md-4 text-center">
                <Link to={"/item/" + item.id}>
            <div className="card border-0" style={{width:"15rem"}}>
            <img src={item.thumbnail} className="img-fluid" alt={item.title}/>
            <div class="card-body">
                <p className="card-text text-uppercase">{item.title}</p>
                <p className="card-text"><b>${item.price}</b></p>
            </div>
          </div>
          </Link>
          </div>
        )
    }

export default Item