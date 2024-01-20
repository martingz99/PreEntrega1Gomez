import { useContext, useState } from "react";
import Swal from "sweetalert2"
import Form from "./Form";
import "./Form.css"
import { CartContext } from "../../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import db from "../../db/db";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    emailRepetido: ""
  });
  const [idOrden, setIdOrden] = useState(null);
  const { carrito, totalPrecio, borrarCarrito } = useContext(CartContext);

  const guardarDatosInput = (event) => {
    setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
  };

  const enviarOrder = (event) => {
    event.preventDefault();
    if(datosForm.email === datosForm.emailRepetido){
      const orden = {
        comprador: { ...datosForm },
        productos: [...carrito],
        fecha: new Date(),
        total: totalPrecio(),
      };

      subirOrden(orden);
    }else{
      Swal.fire("Los emails deben ser iguales")
    }
  };


  const subirOrden = (orden) => {
    const ordenesRef = collection(db, "ordenes");
    addDoc(ordenesRef, orden).then((respuesta) => {
      setIdOrden(respuesta.id)
      //limpiar carrito
      borrarCarrito()
    });
  };

  return (
    <div className="cajacheck">
      {idOrden ? (
        <div className="check">
          <h2>Orden Generada correctamente!!</h2>
          <p>N° de orden: {idOrden} </p>
        </div>
      ) : (
        <Form
          datosForm={datosForm}
          guardarDatosInput={guardarDatosInput}
          enviarOrder={enviarOrder}
        />
      )}
    </div>
  );
};
export default Checkout;