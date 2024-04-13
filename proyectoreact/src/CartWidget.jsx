import cart from "./assets/cart.svg"

const CartWidget=()=>{
    return(
        <>
        <button type="button" class="btn btn-primary position-relative">
            <img src={cart} alt="carrito" width={24}/>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
            
        </button>
        </>
        
    )
}

export default CartWidget