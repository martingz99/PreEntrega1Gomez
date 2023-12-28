import { Link } from "react-router-dom"
import "./Item.css"
const Item = ({producto}) => {
    return (
        <div className="card navbar-expand-lg">
            <img className="image" src={producto.imagen} alt="" />
            <p className="carditem text-body"> { producto.nombre } </p>
            <p className="carditem">{producto.descripcion}</p>
            <p className="carditem">Stock: {producto.stock}</p>
            <p className="carditem text-title">{producto.precio}</p>
            <Link to={`/detalle/${producto.id}`} className="card-button">Detalles</Link>
        </div>
    )
}
export default Item