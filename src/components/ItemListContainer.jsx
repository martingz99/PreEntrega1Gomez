const ItemListContainer = ({saludo, children}) => {

    return(
        <div>
            <h3 className="saludo energi">{saludo}</h3>
            {children}
        </div>
    )
}

export default ItemListContainer