import logo from "./Logo.jpg"
import style from "./NavBar.css"

const NavBar = () => {
    return (

        <div className="navbar-container">
            <img width={`100px`} src={logo} alt="logo" />
            
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
            </ul>
            <div>
                <button>Login</button>
            </div>
        </div>
    )
}

export default NavBar