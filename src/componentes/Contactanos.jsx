import React from "react";
import "../estilos/ContactanosStyle.css";
import Header from "./Header";

function Contactanos(){


    return(
        <div>
            <Header/>
            <div className="Contenido">
                
                <div className="titulo">
                    <h2>
                        ¿Necesitas Ayuda? Contáctanos
                        <img src="https://cdn-icons-png.flaticon.com/128/7146/7146740.png" className="icono"/>
                    </h2>
                    <div className="descripcion">
                        Queremos escucharte. Si tienes preguntas, comentarios o sugerencias, no dudes en
                        contactarnos
                    </div>
                </div>
                <div className="contactos">
                    <ul className="listaPadre">
                        <li className="listaHija">
                            <ul>
                                <li>
                                    <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png"
                                         className="logos"/>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/ladixcoaxm?igsh=MTJqNmlraDZ1eGM3Ng=="
                                       target="_blank"
                                       rel="noopener noreferrer">
                                        @LaDixcoAXM
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="listaHija">
                            <ul>
                                <li>
                                    <img src="https://cdn-icons-png.flaticon.com/128/3670/3670051.png"
                                         className="logos"/>
                                </li>
                                <li>
                                    <a href="https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2F573104666321&e=AT2iDgLCDg9G2d0YPUVWAffBekyyGt5eLiCo7kEbvJEdDfYzxyVnbQwPCZuorsV-eCpaCmx0UVZGQFPFb7iNvh5VqAETlbL6hNLaawhu5aTK_aZO"
                                       target="_blank" rel="noopener noreferrer">
                                        LaDixcoAXM
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default Contactanos;