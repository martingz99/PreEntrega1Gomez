import EjemploContador from "./Ejemplos/EjemploContador"
const ItemListContainer = ({saludo, children}) => {

    return(
        <div>
            <h3 className="saludo">{saludo}</h3>
            {children}
            <div className="energi">
                <div className="card">
                    <img src="/img/anana.jpg" alt="" />
                    <p className="price">Precio: $USD 1</p>
                    <EjemploContador/>
                </div>
                <div className="card">
                    <img src="/img/mango.jpg" alt="" />
                    <p className="price">Precio: $USD 1</p>
                    <EjemploContador/>
                </div>
                <div className="card">
                    <img src="/img/paradise.png" alt="" />
                    <p className="price">Precio: $USD 1</p>
                    <EjemploContador/>
                </div>
                <div className="card">
                    <img src="/img/white.png" alt="" />
                    <p className="price">Precio: $USD 1</p>
                    <EjemploContador/>
                </div>
                <div className="card">
                    <img src="/img/sandiia.jpg" alt="" />
                    <p className="price">Precio: $USD 1</p>
                    <EjemploContador/>
                </div>
                <div className="card">
                    <img src="/img/black.jpg" alt="" />
                    <p className="price">Precio: $USD 1</p>
                    <EjemploContador/>
                </div>
                <div className="card">
                    <img src="/img/cele.jpeg" alt="" />
                    <p className="price">Precio: $USD 1</p>
                    <EjemploContador/>
                </div>
                <div className="card">
                    <img src="/img/lewis.avif" alt="" />
                    <p className="price">Precio: $USD 1</p>
                    <EjemploContador/>
                </div>
                <div className="card">
                    <img src="/img/pomelo.jpg" alt="" /> 
                    <p className="price">Precio: $USD 1</p>
                    <EjemploContador/>
                </div>
                <div className="card">
                    <img src="./img/golden.avif" alt="" />
                    <p className="price">Precio: $USD 1</p>
                    <EjemploContador/>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer