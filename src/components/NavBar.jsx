import CartWidget from "./CartWidget";
const NavBar = () => {

    return(
        
    <div id="navbar">
        <div className="brand">
        <img src="/img/carro.png" alt="logo bebida" />
        </div>
        <ul>
            <li>
                <a href="">Energizantes</a>
            </li>
            <li>
                <a href="">Con azúcar</a>
            </li>
            <li>
                <a href="">Sin azúcar</a>
        </li>
        </ul>
    <CartWidget />
    </div>
        
    )
}



export default NavBar