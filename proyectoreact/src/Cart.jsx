import { useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext"
import trash from "./assets/trash.svg"

const Cart = () =>{
    const{ cart, removeItem , clear, getCountProducts, getSumProducts}=useContext(CartContext);

    if(getCountProducts()== 0){
    return(
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    
                        <h3>No se encontraron Productos en el Carrito!!</h3>
                        <Link to={"/"} className="btn text-white bg-primary my-5">Volver a la Pagina Principal</Link>
                    
                </div>
            </div>
        </div>
    )
}

return(
    <dir className="container my-5">
        <div className="row">
            <div className="col">
            <table className="table">
                <tbody>
                    <tr>
                        <td colSpan={6} className="text-end"><button className="btn text-white bg-dark rounded-0" onClick={()=>(clear())}>Vaciar el Carrito</button></td>
                    </tr>
                    {cart.map(item => (
                        <tr key={item.id}>
                            <td><img src={item.imagen} alt={item.nombre} width={100} /></td>
                            <td className="align-middle text-center fs-5 fw-bold">{item.nombre}</td>
                            <td className="align-middle text-center fs-5 fw-bold">$ {item.precio}</td>
                            <td className="align-middle text-center fs-4">x {item.quantity}</td>
                            <td className="align-middle text-center"><img src={trash} width={32} alt="Eliminar Producto" title="Eliminar producto" onClick={()=>{removeItem(item.id)}}/></td>
                            </tr>
                            ))}
                            <tr>
                                <td colSpan={2} className="text-center fs-4 fw-bold"><b>Total</b></td>
                                <td className="text-center fs-4 fw-bold"><b>$ {getSumProducts()}</b></td>
                                <td>&nbsp;</td>
                                <td className="text-end"><Link to={"/checkout"} className="btn text-white bg-primary">Checkout</Link></td>
                            </tr>
                </tbody>
            </table>
        </div>
    </div>
</dir>
)

}
export default Cart