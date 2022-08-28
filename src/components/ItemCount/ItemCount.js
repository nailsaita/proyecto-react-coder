import { useState } from "react";
const ItemCount = () => {
    const [contador, setContador] = useState (0)
    const suma = () =>{
        setContador(contador + 1)
    }
    return (
        <>
          <div>Carrito</div>
          <h2>{contador}</h2>
          <button onClick={suma}>Agregá uno</button>
        </>
    );
};

export default ItemCount