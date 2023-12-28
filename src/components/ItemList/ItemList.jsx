import "./ItemList.css"
import Item from "../Item/Item"

const ItemList = ({productos}) => {
    return (
        <div className="list-padre">
            <div className="item-list">
                {
                productos.map( (producto)=> (
                    <Item producto={producto} key={producto.id} />
                ))
            }
            </div>
        </div>
    )
}
export default ItemList