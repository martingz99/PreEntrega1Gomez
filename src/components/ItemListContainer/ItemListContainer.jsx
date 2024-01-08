import { useEffect, useState } from "react";
import "./ItemListContainer.css"
import obtenerProductos from "../utilidades/data";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ saludo }) => {

    const [productos, setProductos] = useState([]);
    const { categoria } = useParams()

    useEffect(() => {
        obtenerProductos
        .then((respuesta) => {
            if(categoria) {
                const productosFiltrados = respuesta.filter((producto)=> producto.categoria === categoria )
                setProductos(productosFiltrados)
            }else {
                setProductos(respuesta)
            }
        })
        .catch((error) => {

        })
        .finally(() => {

        });
    }, [categoria]);


    return(
        <div>
            {/* <h3 className="saludo saludo2">{saludo }</h3> */}
            <div className="gen-hero">
                <h1 className="txt">
                Monster Energy
                <span>Drinks</span>
                </h1>
            </div>
            <ItemList productos={productos}/>
            
        </div>
    );
};

export default ItemListContainer