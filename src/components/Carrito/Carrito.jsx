import { Link } from "react-router-dom";
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { FaTrashAlt } from "react-icons/fa";

import "./Carrito.css"

const Carrito = () => {
  const { carrito, borrarCarrito, borrarProducto, totalPrecio } =
    useContext(CartContext);

  if (carrito.length === 0) {
    return (
      <div className="">
        <h2 className="inicio">Ooppss el carrito esta vacio 😢</h2>
        <Link className="inicio" to="/">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div>
      <ul className="cart-list">
      {
        carrito.map((producto)=>(
          <li key={producto.id} className="lista">
            <img src={producto.imagen} alt={producto.nombre} />
            <p>{producto.nombre}</p>
            <p>Cantidad {producto.cantidad}</p>
            <p>{producto.precio}</p>
            <FaTrashAlt
              className="borrar"
              onClick={() => borrarProducto(producto.id)}
              size={28}
            />
          </li>
        ))}
      </ul>
      <div className=" inicio" onClick={borrarCarrito}>
        <p>Vaciar carrito</p>
        <FaTrashAlt size={26} />
      </div>
      <Link className="inicio" to="/checkout">
        <p>Continuar con la compra</p>
      </Link>
    </div>
  );
};
export default Carrito;