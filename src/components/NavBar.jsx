import CartWidget from "./CartWidget";
const NavBar = () => {

    return(
        
    <nav className="navbar  navbar-expand-lg bg-danger bg-gradient ">
        <div className="container-fluid">
            <div className="brand">
                <img src="/img/icon.png" alt="logo marca" />
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Energizantes</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="#">Sin azúcar</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="#">Con azúcar</a>
                </li>
            </ul>
            </div>
            
        </div>
        <CartWidget />
    </nav>
    
        
    )
}



export default NavBar