import React from "react";
import "../estilos/DecoracionStyle.css";

function Decoracion(){

    return (
        <div className="tarjetaDeco">
            <div>
                <h2 className="tarjetaTitu">Decoración</h2>
                <div className="tarjetaOps">
                    <label className="boxes">
                        <input
                            type="checkbox"
                            name="cumpleaños"
                        />
                        Cumpleaños
                    </label>
                    <label className="boxes">
                        <input
                            type="checkbox"
                            name="aniversario"
                        />
                        Aniversario
                    </label>
                    <label className="boxes">
                        <input
                            type="checkbox"
                            name="tematico"
                        />
                        Temático
                    </label>
                    <label className="boxes">
                        <input
                            type="checkbox"
                            name="ninguno"
                        />
                        Ninguno
                    </label>
                </div>
            </div>
        </div>
    );

}

export default Decoracion;