import React from "react";
import "../estilos/RegistrarStyle.css";

function Registrar(){

    return(
        <div>
            <div className="header">
                <header>
                    <a href="/"><img src="https://cdn-icons-png.flaticon.com/128/656/656857.png" className="salir"/></a>
                </header>
            </div>
            <div className="Contenido">
                <h1 className="titulo">REGISTRARSE</h1>
                <ul className="subtitulo">
                    <li>¿Ya tienes cuenta?</li>
                    <li><a className="link" href="/iniciarsesion">Inicia Sesión</a></li>
                </ul>
                <div className="formularioR">
                    <ul className="listaforml">
                        <li>
                            <ul>
                                <li className="etiqueta">
                                    Nombre:
                                </li>
                                <li>
                                    <input placeholder="   Ingresa tu nombre"/>
                                </li>
                                <li className="etiqueta">
                                    Correo:
                                </li>
                                <li>
                                    <input placeholder="    Ingresa tu correo"/>
                                </li>
                                <li className="etiqueta">
                                    Contraseña:
                                </li>
                                <li>
                                    <input placeholder="    ************"/>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li className="etiqueta">
                                    Apellido:
                                </li>
                                <li>
                                    <input placeholder="    Ingresa tu apellido"/>
                                </li>
                                <li className="etiqueta">
                                    Número de Teléfono:
                                </li>
                                <li>
                                    <input placeholder="    Ingresa tu teléfono"/>
                                </li>
                                <li className="etiqueta">
                                    Dirección:
                                </li>
                                <li>
                                    <input placeholder="    Ingresa tu dirección"/>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <button className="botonRegistrar">Regístrate</button>
                </div>

            </div>
        </div>
    );
}

export default Registrar;