import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
const NavBar = () => {

    return(
        
    <nav className=" barra navbar navbar-expand-lg">
        <div className="container-fluid">
            <Link to="/" className="brand">
                <img src="/public/M.png" alt="logo marca" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Energizantes</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/categorias/sinazucar">Sin azúcar</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/categorias/conazucar">Con azúcar</Link>
                    </li>
                </ul>
            </div>
            
        </div>
        <CartWidget />
    </nav>
    
        
    )
}



export default NavBar