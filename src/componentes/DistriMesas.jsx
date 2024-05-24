import React, {useState} from "react";
import "../estilos/DistriMesa.css";

function DistriMesas(){

    const [estilo1, setEstilo1] = useState({});
    const [estilo2, setEstilo2] = useState({});
    const [estilo3, setEstilo3] = useState({});
    const [estilo4, setEstilo4] = useState({});
    const [estilo5, setEstilo5] = useState({});

    const estilo = {
        borderColor: '#4caf50',
        borderStyle: 'solid',
        borderWidth: '3px'
    }

    const estilizar1= () =>{
        setEstilo1(estilo);
        setEstilo2({});
        setEstilo3({});
        setEstilo4({});
        setEstilo5({});
    }

    const estilizar2= () =>{
        setEstilo2(estilo);
        setEstilo1({});
        setEstilo3({});
        setEstilo4({});
        setEstilo5({});
    }

    const estilizar3= () =>{
        setEstilo3(estilo);
        setEstilo2({});
        setEstilo1({});
        setEstilo4({});
        setEstilo5({});
    }

    const estilizar4= () =>{
        setEstilo4(estilo);
        setEstilo2({});
        setEstilo3({});
        setEstilo1({});
        setEstilo5({});
    }

    const estilizar5= () =>{
        setEstilo5(estilo);
        setEstilo2({});
        setEstilo3({});
        setEstilo4({});
        setEstilo1({});
    }

    return(
        <div className="distribucion">
            <div className="tarima">DJ - Tarima</div>
            <div className="mesa1" onClick={estilizar1} style={estilo1}></div>
            <div className="mesa2" onClick={estilizar2} style={estilo2}></div>
            <div className="mesa3" onClick={estilizar3} style={estilo3}></div>
            <div className="mesa4" onClick={estilizar4} style={estilo4}></div>
            <div className="mesa5" onClick={estilizar5} style={estilo5}></div>
        </div>
    );
}

export default DistriMesas;