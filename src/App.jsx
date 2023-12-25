import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import EjemploContador from "./components/Ejemplos/EjemploContador"
import EjemploChildren from "./components/Ejemplos/EjemploChildren"

import './App.css'

function App() {

  /* const comprar = "comprado"
  const compraste = ()=>{
    alert("Compraste un monster")
  } */



  //seguir con la grilla de los monster y chequear si esta todo para la entrega
  return (
    <>
      <div id='app'>
        <NavBar />
        
        <ItemListContainer className saludo="Los mejores energizantes">
          
        </ItemListContainer>
        {/* <EjemploChildren/> */}
        {/* <EjemploContador/> */}
        </div>
    </>
  )
}

export default App
