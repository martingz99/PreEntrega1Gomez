import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db";

import obtenerProductos from "../utilidades/data";


import "./ItemListContainer.css"

const ItemListContainer = ({ saludo }) => {

    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);

    const { categoria } = useParams();

    useEffect(() => {
        setCargando(true)

    let consulta
    const productosRef = collection(db, "productos");

    if(categoria){
      //filtrar data
        consulta = query(productosRef, where("categoria", "==", categoria))
    }else{
      //traer toda la data
        consulta = productosRef
    }

    getDocs(consulta)
        .then((respuesta) => {
        let productosDb = respuesta.docs.map((producto) => {
        return { id: producto.id, ...producto.data() };
        });
        setProductos(productosDb)
    })
    .catch((error)=> console.log(error))
    .finally(()=> setCargando(false))

}, [categoria]);


    return(
        <div>
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