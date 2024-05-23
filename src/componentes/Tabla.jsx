import React from "react";
import "../estilos/TablaStyle.css";

function Tabla({data, onRowClick}){

    return(
        <table border="1" cellPadding="5" cellSpacing="0" className="tabla">
            <thead>
            <tr>
                <th>ID</th>
                <th>Fecha</th>
                <th>Estado</th>
            </tr>
            </thead>
            <tbody>
            {data.map((row) => (
                <tr key={row.id} onClick={() => onRowClick(row)}>
                    <td>{row.id}</td>
                    <td>{row.fecha}</td>
                    <td>{row.estado}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default Tabla;
