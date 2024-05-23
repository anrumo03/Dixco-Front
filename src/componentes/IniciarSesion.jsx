import React from "react";
import "../estilos/InciarSesionStyle.css";

function IniciarSesion(){

    return(
        <div>
            <div className="header">
                <header>
                    <a href="/"><img src="https://cdn-icons-png.flaticon.com/128/656/656857.png" className="salir"/></a>
                </header>
            </div>
            <div className="Contenido">
                <h1 className="titulo">INCIAR SESIÓN</h1>
                <div className="formulario">
                        <ul className="subtitulo">
                            <li>¿Eres nuevo en este sitio?</li>
                            <li><a className="link" href="/registrar">Registrate</a></li>
                        </ul>
                        <ul className="listaform">
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
                            <li className="etiqueta"><a className="link" href="/olvidaste">¿Olvidaste tu contraseña?</a></li>
                            <li><button className="botonIniciar">Iniciar Sesión</button></li>
                        </ul>
                    </div>
                </div>
        </div>
    );
}

export default IniciarSesion;