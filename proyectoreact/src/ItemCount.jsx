import { React, useState } from 'react'

const ItemCount=()=>{
    const [counter, setCounter] = useState(0);

        //increase counter
        const increase = () => {
        setCounter(count => count + 1);
        };
    
        //decrease counter
        const decrease = () => {
        if (counter > 0) {
        setCounter(count => count - 1);
        }
    };
    
        


            return (
                <div className="counter">
                <div className="btn__container">
                    <button className="btn btn-secondary m-3 px-4" onClick={increase}>+</button>
                    <span className="btn btn-secondary bold">{counter}</span>
                    <button className="btn btn-secondary m-3 px-4" onClick={decrease}>-</button>
                    <button className="btn btn-outline-primary btn-lg">Agregar al carrito</button>
                </div>
                </div>
            );
    
}

export default ItemCount