import React, {useState} from "react";
import "../estilos/CamposStyle.css"

function Campos(){

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [contra, setContra] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");

    const [vNombre, setvNombre] = useState(false);
    const [vCorreo, setvCorreo] = useState(false);
    const [vContra, setvContra] = useState(false);
    const [vApellido, setvApellido] = useState(false);
    const [vTelefono, setvTelefono] = useState(false);
    const [vDireccion, setvDireccion] = useState(false);

    const aparecerNombre = () =>{
        if (nombre == ""){
            setNombre("Nuevo Nombre:");
            setvNombre(true);
        }else {
            setNombre("");
            setvNombre(false);
        }
    }

    const aparecerCorreo = () =>{

        if(correo == ""){
            setCorreo("Nuevo Correo:");
            setvCorreo(true);
        }else{
            setCorreo("");
            setvCorreo(false);
        }
    }

    const aparecerContra = () =>{
        if(contra == ""){
            setvContra(true);
            setContra("Nueva Contraseña:");
        }else{
            setContra("");
            setvContra(false);
        }
    }

    const aparecerApellido = () =>{
        if (apellido == ""){
            setvApellido(true);
            setApellido("Nuevo Apellido:");
        }else{
            setvApellido(false);
            setApellido("");
        }

    }

    const aparecerTelefono = () =>{
        if (telefono == ""){
            setvTelefono(true);
            setTelefono("Nuevo Teléfono:");
        }else{
            setvTelefono(false);
            setTelefono("");
        }
    }

    const aparecerDireccion = () =>{
        if (direccion == ""){
            setvDireccion(true);
            setDireccion("Nuevo Dirección:");
        }else{
            setvDireccion(false);
            setDireccion("");
        }
    }

    return (
        <div className="formularioP">
            <ul className="listaforml">
                <li>
                    <ul className="listaCamp">
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
                            Contraseña:
                        </li>
                        <li>
                            <input placeholder="    ************"/>
                        </li>
                    </ul>
                    <ul className="listaCamp">
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
                <li>
                    <ul className="listaCamp">
                        <li className="etiqueta">{nombre}</li>
                        <li>
                            <ul className="listaOcult">
                                <li style={{display: vNombre ? 'block' : 'none'}}><input placeholder="   Ingresa tu nombre"/></li>
                                <li onClick={aparecerNombre}>Actualizar --></li>
                            </ul>
                        </li>
                        <li className="etiqueta">{correo}</li>
                        <li>
                            <ul className="listaOcult">
                                <li style={{display: vCorreo ? 'block' : 'none'}}><input placeholder="    Ingresa tu correo"/></li>
                                <li onClick={aparecerCorreo}>Actualizar --></li>
                            </ul>
                        </li>
                        <li className="etiqueta">{contra}</li>
                        <li>
                            <ul className="listaOcult">
                                <li style={{display: vContra ? 'block' : 'none'}}><input placeholder="    ************"/></li>
                                <li  onClick={aparecerContra}>Actualizar --></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="listaCamp">
                        <li className="etiqueta">{apellido}</li>
                        <li>
                            <ul className="listaOcult">
                                <li style={{display: vApellido ? 'block' : 'none'}}><input placeholder="    Ingresa tu apellido"/></li>
                                <li onClick={aparecerApellido}>Actualizar --></li>
                            </ul>
                        </li>
                        <li className="etiqueta">{telefono}</li>
                        <li>
                            <ul className="listaOcult">
                                <li style={{display: vTelefono ? 'block' : 'none'}}><input placeholder="    Ingresa tu teléfono"/></li>
                                <li onClick={aparecerTelefono}>Actualizar --></li>
                            </ul>
                        </li>
                        <li className="etiqueta">{direccion}</li>
                        <li>
                            <ul className="listaOcult">
                                <li style={{display: vDireccion ? 'block' : 'none'}}><input placeholder="    Ingresa tu dirección"/></li>
                                <li  onClick={aparecerDireccion}>Actualizar --></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Campos;