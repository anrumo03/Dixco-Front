import React from "react";
import "../estilos/InicioStyle.css"
import Header from "./Header";

function PaginaInicio(){


    
    return(
        <div>
            <Header/>
            <div className="Contenido">
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/512/3226/3226228.png" className="Bola"/>
                </div>
                <div className="Text-Inicio">
                    Nadie vuelve a ser el mismo después de bailar una noche en Moralma Dixco
                </div>
            </div>
        </div>
    );
}

export default PaginaInicio;