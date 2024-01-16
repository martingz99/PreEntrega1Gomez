import { useState, useContext } from "react"
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext";
import "./ItemDetail.css"

const ItemDetail = ({ producto }) => {
    const [toggle, setToggle] = useState (false)

    const { añadirProducto } = useContext(CartContext)

    const agregarAlCarrito = (contador) => {
        const productoNuevo = {...producto, cantidad: contador}
        añadirProducto(productoNuevo)
        setToggle(true)
    }

    return (
        <div className="padre">
            <div className="padre-card" >
                <div className="tarjeta">
                    <img className="imgg" src={producto.imagen} alt="" />
                    <p className="carditem">{producto.nombre}</p>
                    <p className="carditem">{producto.descripcion}</p>   
                    <p className="carditem text-title">Precio: {producto.precio}</p>
                        
                        {toggle ? (
                        <>
                            <Link className="cart-bt" to="/carrito">
                                Terminar mi compra
                            </Link>
                            <Link className="cart-bt" to="/">
                                Seguir comprando
                            </Link>
                        </>
                        ) : (
                            <ItemCount stock={producto.stock} agregarAlCarrito={agregarAlCarrito} />
                        )
                    }
                </div>
            </div>
    </div>
    )
}
export default ItemDetail;
