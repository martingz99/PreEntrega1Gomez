import EjemploContador from "../Ejemplos/EjemploContador"
import "./ItemDetail.css"
const ItemDetail = ({ producto }) => {

    return (
    <div className="padre-card" >
        <div className="tarjet">
            <img className="imgg" src={producto.imagen} alt="" />
            <p className="carditem text-body">{producto.nombre}</p>
            <p className="carditem">{producto.descripcion}</p>
            <p className="carditem text-title">Precio: {producto.precio}</p>
            <p>Stock: {producto.stock}</p>
            <EjemploContador/>
        </div>
        
        
    </div>
    )
}
export default ItemDetail

//clase 9 minuto 13, no me pone las imagenes ver toda la clase denuevo