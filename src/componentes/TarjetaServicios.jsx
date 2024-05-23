import React from "react";
import "../estilos/TarjetaSStyle.css";

function TarjetaServicios({titulo, cuerpo}){


    return (
        <div className="tarjetaServ">
            <h2 className="tarjetaTitu">{titulo}</h2>
            <ul className="tarjetaCont">
                <li><p className="tarjetaCuer">{cuerpo}</p></li>
                <li className="tarjetaBox"><input
                    type="checkbox"
                /></li>
            </ul>
        </div>
    );
}

export default TarjetaServicios;