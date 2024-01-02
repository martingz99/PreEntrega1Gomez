import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
const ItemDetail = ({ producto }) => {

    const [toggle, setToggle] = useState (false)

    const agregarAlCarrito = (contador) => {
        console.log(contador);
        setToggle(true)
        /* const productoEnCarrito = {contador, nombre: producto.nombre} */
        /* console.log(productoEnCarrito);  */
    }

    return (
        <div className="padre">
            <div className="padre-card" >
                <div className="tarjeta">
                    <img className="imgg" src={producto.imagen} alt="" />
                    <p className="carditem">{producto.nombre}</p>
                    <p className="carditem">{producto.descripcion}</p>   
                    <p className="carditem text-title">Precio: {producto.precio}</p>
                    {
                        toggle ? (
                            <Link to="/carrito" className="button2">Terminar mi compra</Link>
                        ) : (
                            <ItemCount stock={producto.stock} agregarAlCarrito={agregarAlCarrito} />
                        )
                    }
                </div>
            </div>
    </div>
    )
}
export default ItemDetail
