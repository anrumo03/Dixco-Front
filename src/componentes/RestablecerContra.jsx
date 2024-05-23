import React from "react";
import {useNavigate} from 'react-router-dom';
import "../estilos/InciarSesionStyle.css";

function RestablecerContra(){

    const navigate = useNavigate();

    const redireccion = () => {
        navigate('/iniciarsesion');
    };

    return(
        <div>
            <div className="header">
                <header>
                    <a href="/"><img src="https://cdn-icons-png.flaticon.com/128/656/656857.png" className="salir"/></a>
                </header>
            </div>
            <div className="Contenido">
                <ul>
                    <li><h1 className="titulo">RESTABLECER CONTRASEÑA</h1></li>
                    <li className="subtitulo">¡Genial! Verificamos tu correo electrónico. Ahora, por favor, ingresa tu nueva contraseña.</li>
                </ul>
                <div className="formulario">
                        <ul className="listaform">
                            <li className="etiqueta">
                                Contraseña:
                            </li>
                            <li>
                                <input placeholder="    ************"/>
                            </li>
                            <li className="etiqueta">
                                Nueva Contraseña:
                            </li>
                            <li>
                                <input placeholder="    ************"/>
                            </li>
                            <li><button className="botonContinuar" onClick={redireccion}>Continuar</button></li>
                        </ul>
                    </div>
                </div>
        </div>
    );
}

export default RestablecerContra;