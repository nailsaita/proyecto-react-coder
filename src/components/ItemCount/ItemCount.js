import './ItemCountStyle.css';
import { useState } from "react";

const ItemCount = ({nombreProducto, stock, initial, onAdd}) => {
    
    const [counter, setCounter] = useState(initial);
        const sumar = () => {
            if (counter < stock){
                setCounter(counter + 1);
            } 
        }
        const restar = () => {
            if (counter > initial){
                setCounter(counter - 1);
            } 
        }

    return (
        <div className="counterContainer">
            <h4>{nombreProducto}:</h4>
            <div className="counter">
                <div className="itemCountButton" onClick={restar}><h4>-</h4></div>
                <div className="itemCount">{counter}</div>
                <div className="itemCountButton" onClick={sumar}><h4>+</h4></div>
            </div>
            <button onClick = {()=> {onAdd (counter)}}>Confirmar</button>
        </div>
    );
}

export default ItemCount;
