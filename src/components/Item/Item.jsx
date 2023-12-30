import { Link } from "react-router-dom"
import "./Item.css"
import { useState } from "react"
const Item = ({producto}) => {

    const [zoom, setZoom] = useState (false); 
    
    const handleMouseOver = () => {
        setZoom(true)
    };

    const handleMouseLeave = () =>{
        setZoom(false)
    };

    const estiloCard = {
        transform: zoom ? 'scale(1.1)' : 'scale(1)',
        transition: 'transform 0.3 ease-in-out'
    };

    return (
        <div 
        style={estiloCard}
        onMouseOver={handleMouseOver} 
        onMouseLeave={handleMouseLeave}
        className="card expand-lg"
        >
            <img className="image" src={producto.imagen} alt="" />
            <p className="carditem"> { producto.nombre } </p>
            <p className="carditem">{producto.descripcion}</p>
            <p className="carditem">Stock: {producto.stock}</p>
            <p className="carditem text-title">{producto.precio}</p>
            <Link to={`/detalle/${producto.id}`} className="card-button">Detalles</Link>
        </div>
    )
}
export default Item