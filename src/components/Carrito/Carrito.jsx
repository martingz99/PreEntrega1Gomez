import "./Carrito.css"
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
      <button onClick={borrarCarrito}>Eliminar contenido</button>
    </div>
  )
}
export default Carrito