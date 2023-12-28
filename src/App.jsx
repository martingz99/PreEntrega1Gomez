import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar"
import obtenerProductos from "./components/utilidades/data"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import './App.css'



function App() {

  

  return (

    <BrowserRouter>
      <NavBar />
        
        <Routes>
          <Route path="/" element={<ItemListContainer className saludo="Monster Energy" />} />
          <Route path="/categorias/:categoria" element={<ItemListContainer saludo="Los mejores energizantes" />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes> 
    </BrowserRouter>

  )
}

export default App
