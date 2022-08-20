import logo from `../navBar/logo.jpg`
import style from `../navBar.css`

const navBar = () => {
    return (
        <><><div className="navbar-container" /><div>
            <img width={`100px`} src={logo} alt="logo" />
        </div>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Sobre Nosotras</a>
                </li>
                <li>
                    <a href="#">Productos</a>
                </li>
                <li>
                    <a href="#">Contacto</a>
                </li>
            </ul></><div>
                <button>Login</button>
            </div></>
        </div>
    );

};