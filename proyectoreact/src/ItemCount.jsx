import { useEffect, useState } from 'react'

const ItemCount=({stock})=>{
    const [counter, setCounter] = useState(1);
    const [itemStock ,setItemStock] = useState(stock)

        //increase counter
        const increase = () => {
        if(counter < itemStock){
        setCounter(counter + 1);
        }
    };
    
        //decrease counter
        const decrease = () => {
        if (counter > 1) {
        setCounter(counter - 1);
        }
    };
    
        const onAdd =()=>{
        if(contador <= itemsSock){
            setItemStock(itemStock - contador);
            setCounter(1);
            console.log("agregastes"+ counter + "producto al Carrito");
        }
    }

    useEffect(()=>{
        setItemStock(stock);
    },[stock])
        


            return (
                <div className="counter">
                <div className="btn__container">
                    <button className="btn btn-secondary m-2 px-2" onClick={increase}>+</button>
                    <span className="btn btn-secondary bold">{counter}</span>
                    <button className="btn btn-secondary m-2 px-2" onClick={decrease}>-</button>
                    <button className="btn btn-outline-primary btn-lg " onClick={onAdd}>Agregar al carrito</button>
                </div>
                </div>
            );
    
}

export default ItemCount