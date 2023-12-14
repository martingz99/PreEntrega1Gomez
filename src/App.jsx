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
        
        <div className="energi">
            <img src="/img/anana.jpg" alt="" />
            <img src="/img/mango.jpg" alt="" />
            <img src="/img/paradise.png" alt="" />
            <img src="/img/white.png" alt="" />
            <img src="/img/sandiia.jpg" alt="" />
            <img src="/img/black.jpg" alt="" />
            <img src="/img/cele.jpeg" alt="" />
            <img src="/img/lewis.avif" alt="" />
            <img src="/img/pomelo.jpg" alt="" /> 
          </div>
        </ItemListContainer>
        <EjemploChildren/>
        <EjemploContador/>
        </div>
    </>
  )
}

export default App
