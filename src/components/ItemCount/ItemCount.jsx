import { useEffect, useState } from "react"
import "./Item.count.css"
const ItemCount = ( {stock, agregarAlCarrito} ) => {

    const [ contador, setContador ] = useState (1);

    const sumar =() => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const restar = () => {
        if(contador>1){
        setContador(contador - 1)
    }
    }


  return (
    <div>
        <p className="price">Energizantes: {contador} </p>
        <div className="buttons">
            <button className="button1" onClick={sumar}>+</button>
            <p className="price">{contador}</p>
            <button className="button1" onClick={restar}>-</button>
        </div>
        <div className="boton2">
            <button onClick={ ()=> agregarAlCarrito(contador) } className="button2" >Agregar al carrito</button>
        </div>
    </div>
  )
}
export default ItemCount