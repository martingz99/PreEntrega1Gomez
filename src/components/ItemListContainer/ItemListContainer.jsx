import { useEffect, useState } from "react";
import obtenerProductos from "../utilidades/data";
import EjemploContador from "../Ejemplos/EjemploContador"
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ saludo }) => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        obtenerProductos
        .then((respuesta) => {
            setProductos(respuesta)
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            console.log("Finalizo");
        });
    }, []);


    return(
        <div>
            <h3 className="saludo">{saludo}</h3>
            <ItemList productos={productos}/>
            
        </div>
    );
};

export default ItemListContainer