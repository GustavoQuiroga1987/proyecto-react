import { useEffect, useState } from 'react';
import {Link} from "react-router-dom";

const ItemCount=({stock , onAdd}) =>{
    const [contador, setContador] = useState(1);
    const [itemStock ,setItemStock] = useState(stock);
    const [visible , setVisible]=useState(true);

        //increase counter
        const increase = () => {
        if(contador < itemStock){
        setContador(contador + 1);
        }
    };
    
        //decrease counter
        const decrease = () => {
        if (contador > 1) {
        setContador(contador - 1);
        }
    };
    
        const addToCart =()=>{
        if(contador <= itemStock){
            setItemStock(itemStock - contador);
            onAdd(contador)
            setContador(1);
            setVisible(false)
        }
    }

    useEffect(()=>{
        setItemStock(stock);
    },[stock])
        


    return (
    <div className="container">
        <div className="row">
            <div className='col'>
                <div className='btn-group' role='group'>
                    <button className="btn btn-secondary rounded-0" onClick={increase}>+</button>
                    <span className="btn btn-secondary rounded-0">{contador}</span>
                    <button className="btn btn-secondary rounded-0" onClick={decrease}>-</button>
                </div>
        </div>
    </div>
    <div className='row my-1'>
        <div className='col'>
        {visible ? <button className="btn btn-outline-primary btn-lg " onClick={addToCart}>Agregar al Carrito</button> : <Link to={"/cart"} className='btn bg-black text-white text-uppercase rounded-0'>Finalizar Compra </Link>}
        </div>
    </div>
        </div>
        
            );
    
}

export default ItemCount