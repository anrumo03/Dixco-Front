import React from "react";
import Decoracion from "./Decoracion";
import TarjetaServicios from "./TarjetaServicios";
import {useNavigate} from 'react-router-dom';
import "../estilos/ServiciosStyle.css"

function ServiciosEspeciales(){

    const navigate = useNavigate();

    const redireccion = () => {
        navigate('/');
    };

    return (
        <div>
            <h1 className="titulo">Servicios Especiales</h1>
            <Decoracion/>
            <ul className="tarjetas">
                <li>
                    <ul>
                        <li><TarjetaServicios titulo="Barra Libre"
                                              cuerpo="Licores ilimitados desde las 11 p.m hasta las 2 a.m"
                        /></li>
                        <li className="servicios"><TarjetaServicios titulo="Servicio de Fotografía"
                                              cuerpo="Sesión de fotos con accesorios y fondos personalizados"
                        /></li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li><TarjetaServicios titulo="Acceso VIP"
                                              cuerpo="Acceso directo a nuestra instalación por fila VIP"
                        /></li>
                        <li className="servicios"><TarjetaServicios titulo="Servicios de Transporte"
                                              cuerpo="Conductor elegido para Armenia y municipios cercanos"
                        /></li>
                    </ul>
                </li>
            </ul>
            <div className="botonServ">
                <button className="botonLista" onClick={redireccion}>Finalizar Reserva</button>
            </div>


        </div>

    );
}

export default ServiciosEspeciales;