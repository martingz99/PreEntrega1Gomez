import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar"
import obtenerProductos from "./components/utilidades/data"

import './App.css'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"


function App() {

  

  return (
    <>
      <div id='app'>
        <NavBar />
        
        <ItemListContainer className saludo="Los mejores energizantes">
          
        </ItemListContainer>

        <ItemDetailContainer />

        </div>
    </>
  )
}

export default App
