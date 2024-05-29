import { Link } from "react-router-dom"
import { CartContext } from "./context/CartContext";
import { useContext } from "react";
import cart from "./assets/cart.svg"

const CartWidget=()=>{
    const {getCountProducts} = useContext(CartContext);
    

    if (getCountProducts()>0){ 
        return (
            <Link to={"/cart"} className="btn btn-primary position-relative">
            <img src={cart} alt="carrito" width={24}/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{getCountProducts()}</span>   
            </Link>
        )
    }     
}


export default CartWidget