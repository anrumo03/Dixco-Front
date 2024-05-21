import React from "react";
import "../estilos/PoliticasStyle.css";
import Header from "./Header";

function Politicas(){

    return(
        <div>
            <Header/>
            <div>
                <ul className="listas">
                    <div className="listaIzq">
                        <h2>Políticas de la Dixco: Seguridad y respeto para todos</h2>
                        <ul>
                            <h4>Somos un espacio libre y seguro donde aceptamos y respetamos a todas las personas.</h4>
                            <h4>Como cualquier discoteca en el mundo, tenemos reglas y la más importante aquí es que no
                                te
                                metas
                                con nadie, no juzgues a nadie, ni te creas más que nadie.</h4>
                        </ul>
                    </div>
                    <div className="listaDere">
                        <ul>
                            <li>Prohibido el consumo de cigarrillos y marihuana dentro de la Dixco.</li>
                            <li>Edad mínima de ingreso: 21 años.</li>
                            <li>Documento de identidad obligatorio: Debes presentar un documento físico de identidad
                                para
                                ingresar
                                al club.
                            </li>
                            <li>Cero tolerancia al acoso: Cualquier conducta de acoso, abuso o agresión sexual resultará
                                en
                                la
                                expulsión inmediata de la discoteca.
                            </li>
                            <li>Ambiente de paz: Las peleas y conductas violentas hacia cualquier persona dentro de la
                                discoteca
                                también conllevan a la expulsión inmediata.
                            </li>
                            <li>Higiene personal: Por favor, mantén buenos hábitos de higiene personal, considerando que
                                estarás
                                en un lugar cerrado.
                            </li>
                            <li>Código de vestimenta: Nos reservamos el derecho de admisión a personas que estén usando:
                                Camisillas, chanclas o sandalias. Bermuda o pantaloneta deportiva o de baño.
                            </li>
                            <li>Prohibido el ingreso de armas: No se permite el ingreso de armas blancas, de fuego o
                                elementos
                                cortopunzantes que puedan herir a otra persona.
                            </li>
                        </ul>
                    </div>
                </ul>
                <h4 className="footer">Lee nuestras reglas y acátalas para evitar expulsiones.</h4>
            </div>
        </div>
    );
}

export default Politicas;