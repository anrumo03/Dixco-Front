import React from "react";
import {useNavigate} from 'react-router-dom';
import "../estilos/OlvidasteStyle.css";

function OlvidasteContra(){

    const navigate = useNavigate();

    const redireccion = () => {
        navigate('/restablecer');
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
                    <li><h1 className="titulo">¿OLVIDASTE CONTRASEÑA?</h1></li>
                    <li className="subtitulo">Introduce tu dirección de correo electrónico para que podamos continuar con el proceso de recuperación.</li>
                </ul>
                <div className="formulario">
                    <ul className="listaform">
                        <li className="etiqueta">
                            Correo:
                        </li>
                        <li>
                            <input placeholder="    Ingresa tu correo"/>
                        </li>
                        <li><button className="botonContinuar" onClick={redireccion}>Continuar</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default OlvidasteContra;