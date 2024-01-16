import "./Carrito.css"
import { Link } from "react-router-dom";
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
const Carrito = () => {

  const { carrito, borrarCarrito, borrarProducto } = useContext(CartContext)

  return (
    <div>
      <ul className="cart-list">
      {
        carrito.map((producto)=>(
          <li key={producto.id}>
            <img src={producto.imagen} alt={producto.nombre} />
            <p>{producto.nombre}</p>
            <p>Cantidad {producto.cantidad}</p>
            <p>{producto.precio}</p>
            <button onClick={ () => borrarProducto(producto.id) }>Eliminar producto</button>
          </li>
        ))
      }
      </ul>
      <div className="borrar-todo" onClick={borrarCarrito}>
        <p>Vaciar carrito</p>
      </div>
      
      <Link to="/checkout">
          Continuar con mi compra
      </Link>
      {/* <button onClick={borrarCarrito}>Vaciar carrito</button> */}
    </div>
  )
}
export default Carrito