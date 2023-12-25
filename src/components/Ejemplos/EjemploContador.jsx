import { useState } from "react";

const EjemploContador = () => {
    const [contador, setContador] = useState(1);

    const aumentar = () => {
        setContador(contador + 1);
    };

    const disminuir = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    };

    return (
        <div className="">
            <p className="price">Energizantes: {contador} </p>
            <div className="buttons">
            <button className="button1" onClick={aumentar}>+</button>
            <button className="button1" onClick={disminuir}>-</button>
            <button className="button1">Agregar al carrito</button>
            </div>
            
        </div>
    );
};

export default EjemploContador;
