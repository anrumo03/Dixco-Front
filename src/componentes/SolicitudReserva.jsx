import React,{useState} from "react";
import DatePicker from 'react-datepicker';
import Modal from "react-modal";
import {useNavigate} from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import "../estilos/SolicitudStyle.css";


function SolicitudReserva(){

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
                <h1 className="titulo">SOLICITUD RESERVA</h1>
                <h2 className="subtitulo">Ambiente - Mesa</h2>
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
                                    Personas:
                                </li>
                                <li>
                                    <input type="number" className="numberType" min="1" placeholder="0"/>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <button className="botonRegistrar" onClick={openModal}>Reservar</button>
                    <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="ladixco.com" className="modal" overlayClassName="overlay">
                        <div>
                            <div className="tituloS">
                                <h2>Solicitud reservada exitosamente</h2>
                            </div>

                            <div className="datos">
                                <ul>
                                    <li>ID:</li>
                                    <li>Fecha:</li>
                                    <li>Estado:</li>
                                </ul>
                            </div>
                        </div>
                        <div className="botones">
                            <button onClick={closeModal} className="botonModal">Cerrar</button>
                            <button onClick={redireccion} className="botonModal">Confirmar</button>
                        </div>

                    </Modal>
                </div>

            </div>
        </div>
    );
}

export default SolicitudReserva;