import React,{useState} from "react";
import DatePicker from 'react-datepicker';
import Modal from "react-modal";
import {useNavigate} from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import "../estilos/ListaStyle.css";


function ListaEspera(){

    const [startDate, setStartDate] = useState(new Date());

    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate();

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const redireccion = () => {
        navigate('/');
    };

    return(
        <div>
            <div className="header">
                <header>
                    <a href="/"><img src="https://cdn-icons-png.flaticon.com/128/656/656857.png" className="salir"/></a>
                </header>
            </div>
            <div className="Contenido">
                <h1 className="titulo">LISTA ESPERA</h1>
                <h2 className="subtitulo">Mesa</h2>
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
                                    Fecha:
                                </li>
                                <li>
                                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
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
                    <div className="botones">
                        <button onClick={closeModal} className="botonLista">Volver</button>
                        <button onClick={redireccion} className="botonLista">Apuntarse</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ListaEspera;