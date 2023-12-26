import { useEffect, useState } from "react";
import obtenerProductos from "../utilidades/data";
import EjemploContador from "../Ejemplos/EjemploContador"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ saludo }) => {

    const [productos, setProductos] = useState([]);
    const { categoria } = useParams()

    console.log(categoria);

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
            console.log(error);
        })
        .finally(() => {
            console.log("Finalizo");
        });
    }, [categoria]);


    return(
        <div>
            <h3 className="saludo">{saludo}</h3>
            <ItemList productos={productos}/>
            
        </div>
    );
};

export default ItemListContainer