import React, {useState} from "react";
import Modal from "react-modal";
import Campos from "./Campos";
import "../estilos/PerfilStyle.css"
import Tabla from "./Tabla"

function Perfil(){

    const data = [
        { id: 1, fecha: 'John Doe', estado: 28},
        { id: 2, fecha: 'Jane Smith', estado: 34},
        { id: 3, fecha: 'Sam Johnson', estado: 23},
    ];
    const defaultRow = {id: -1, fecha: 'null', estado: 'null'}

    const [selectedRow, setSelectedRow] = useState(defaultRow);

    const handleRowClick = (row) => {
        setSelectedRow(row);
        openModal();
    };

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const [categoria, setCategoria] = useState("Info");
    const [widthI, setWidthI] = useState({
        width: '75%',
        backgroundColor: 'rgb(255, 213, 0, 0.8)',
        fontWeight: 'bold'
    });
    const [widthR, setWidthR] = useState({
        width: '50%',
        backgroundColor: 'rgb(255, 238, 50, 0.6)'
    });
    const [widthE, setWidthE] = useState({
        width: '50%',
        backgroundColor: 'rgb(255, 238, 50, 0.6)'
    });

    const setInfo = () =>{
        setCategoria("Info");
        setWidthI({
            width: '75%',
            backgroundColor: 'rgb(255, 213, 0, 0.8)',
            fontWeight: 'bold'
        });
        setWidthE({
            width: '50%',
            backgroundColor: 'rgb(255, 238, 50, 0.6)'
        });
        setWidthR({
            width: '50%',
            backgroundColor: 'rgb(255, 238, 50, 0.6)'
        });
    };

    const setRes = () =>{
        setCategoria("Res");
        setWidthR({
            width: '75%',
            backgroundColor: 'rgb(255, 213, 0, 0.8)',
            fontWeight: 'bold'
        });
        setWidthE({
            width: '50%',
            backgroundColor: 'rgb(255, 238, 50, 0.6)'
        });
        setWidthI({
            width: '50%',
            backgroundColor: 'rgb(255, 238, 50, 0.6)'
        });
    };

    const setEsp = () =>{
        setCategoria("Esp");
        setWidthE({
            width: '75%',
            backgroundColor: 'rgb(255, 213, 0, 0.8)',
            fontWeight: 'bold'
        });
        setWidthI({
            width: '50%',
            backgroundColor: 'rgb(255, 238, 50, 0.6)'
        });
        setWidthR({
            width: '50%',
            backgroundColor: 'rgb(255, 238, 50, 0.6)'
        });
    };


    return (
        <div>
            <div className="header">
                <header>
                    <a href="/"><img src="https://cdn-icons-png.flaticon.com/128/656/656857.png" className="salir"/></a>
                </header>
            </div>
            <h1 className="titulo">Perfil</h1>
            <ul className="categoriasPer">
                <li>
                    <div className="cat" style={widthI} onClick={setInfo}>Información personal</div>
                </li>
                <li>
                    <div className="cat" onClick={setRes} style={widthR}>Reservas</div>
                </li>
                <li>
                    <div className="cat" onClick={setEsp} style={widthE}>Listas de Espera</div>
                </li>
            </ul>
            {categoria == "Info" ?
                (
                    <div><Campos/></div>
                )
                :
                (
                    <div className="tablaCont">
                        <Tabla data={data} onRowClick={handleRowClick}/>
                    </div>
                )
            }
            <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="ladixco.com" className="modal"
                   overlayClassName="overlay">
                <div>
                    <div className="tituloS">
                        <h2>Registro</h2>
                    </div>
                    <div className="datos">
                        <ul>
                            <li>ID:{selectedRow.id}</li>
                            <li>Fecha:{selectedRow.fecha}</li>
                            <li>Estado:{selectedRow.estado}</li>
                        </ul>
                    </div>
                </div>
                <div className="botones">
                    <button onClick={closeModal} className="botonModal">Cerrar</button>
                    <button onClick={closeModal} className="botonModal">Eliminar</button>
                </div>
            </Modal>
        </div>
    );
}

export default Perfil;