import React from "react";
import {Link} from "react-router-dom";
import "../estilos/HeaderStyle.css";

function Header(){

    return(
        <div>
            <div className="Header">
                <header>
                    <Link to="/" classname="link"><h1>MORALMA DIXCO</h1></Link>
                    <nav>
                        <ul>
                            <li>
                                <a href="/contactanos">Contáctanos
                                    <img src="https://cdn-icons-png.flaticon.com/128/7146/7146740.png"
                                         className="icono"/></a>
                            </li>
                            <li>
                                <a href="/politicas">Políticas
                                    <img src="https://cdn-icons-png.flaticon.com/128/1456/1456888.png"
                                         className="icono"/></a>
                            </li>
                            <li>
                                <a href="/menu">Menú
                                    <img src="https://cdn-icons-png.flaticon.com/128/3187/3187844.png"
                                        className="icono"/></a>
                            </li>
                            <li>
                                <a href="/mesas">Reservas
                                    <img src="https://cdn-icons-png.flaticon.com/128/2356/2356937.png"
                                        className="icono"/></a>
                            </li>
                            <li className="login"><a href="/iniciarsesion">Iniciar Sesión</a></li>
                            <li className="register"><a href="/registrar">Registrarse</a></li>
                        </ul>
                    </nav>
                </header>
            </div>

        </div>

    );
}

export default Header;