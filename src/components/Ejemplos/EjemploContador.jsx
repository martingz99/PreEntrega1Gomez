import { useState } from "react"
const EjemploContador = () => {

    let contador = 0;

    const aumentar = () => {
        console.log("clickeamos el boton", contador)
        contador++
    }

    return(
        <div>
            <p>Contador: {contador} </p>
            <button onClick={aumentar} >+</button>
        </div>
    ) 
}

export default EjemploContador