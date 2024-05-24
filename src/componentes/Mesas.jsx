import React from "react";
import DistriMesas from "./DistriMesas";
import {useNavigate} from 'react-router-dom';
import "../estilos/MesasStyle.css"

function Mesas(){

    const navigate = useNavigate();

    const redireccion1 = () => {
        navigate('/solicitud');
    };

    const redireccion2 = () => {
        navigate('/lista');
    }

    return(
        <div>
            <div className="header">
                <header>
                    <a href="/"><img src="https://cdn-icons-png.flaticon.com/128/656/656857.png" className="salir"/></a>
                </header>
            </div>
            <h1 className="tituloM">Mesas</h1>
            <div className="distriCont">
                <DistriMesas/>
            </div>
            <ul className="listaMesasP">
                <li>
                    <ul className="listaMesas">
                        <li>
                            <div className="circ1"></div>
                            Mesa Escogida
                        </li>
                        <li>
                            <div className="circ2"></div>
                            Mesa Disponible
                        </li>
                        <li><button className="botonLista" onClick={redireccion1}>Reservar</button></li>
                    </ul>
                </li>
                <li>
                    <ul className="listaMesas">
                        <li>
                            <div className="circ3"></div>
                            Mesa Reservada
                        </li>
                        <li>
                            <div  className="circ4"></div>
                            Mesa Fuera de Servicio
                        </li>
                        <li>
                            <button className="botonLista" onClick={redireccion2}>Lista Espera</button>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Mesas;