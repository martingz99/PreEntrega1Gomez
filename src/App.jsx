import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar"
import obtenerProductos from "./components/utilidades/data"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Carrito from "./components/Carrito/Carrito"
import { CartProvider } from "./context/CartContext" 
import Checkout from "./components/Checkout/Checkout"
import './App.css'




function App() {

  

  return (

    <BrowserRouter>
      <CartProvider>
        <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer className saludo="Monster Energy" />} />
            <Route path="/categorias/:categoria" element={<ItemListContainer saludo="Los mejores energizantes" />} />
            <Route path="/detalle/:id" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={ <Carrito /> } />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/checkout" element={ <Checkout /> } />
          </Routes> 
        </CartProvider>
    </BrowserRouter>

  )
}

export default App
