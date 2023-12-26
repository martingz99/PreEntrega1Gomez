import "./Item.css"
const Item = ({producto}) => {
    return (
        <div className="card">
            <img className="image" src={producto.imagen} alt="" />
            <p className="carditem text-body"> { producto.nombre } </p>
            <p className="carditem">{producto.descripcion}</p>
            <p className="carditem">Stock: {producto.stock}</p>
            <p className="carditem text-title">{producto.precio}</p>
            <button class="card-button">More info</button>
        </div>
    )
}
export default Item