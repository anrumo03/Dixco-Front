import React from 'react';
import Header from "./Header";
import "../estilos/MenuStyle.css";

function Menu() {
    return (
        <div>
            <Header/>
            <div className="menu-container">
                <h1>Menú</h1>
                <ul className="categorias">
                    <li className="containerCat">
                        <div className="category">
                            <h2>Licores</h2>
                            <ul className="categorias">
                                <li>
                                    <ul className="nombres">
                                        <li>Aguardiente</li>
                                        <li>Ron</li>
                                        <li>Vodka</li>
                                        <li>Whisky</li>
                                    </ul>
                                </li>
                                <li className="ultimoL">
                                    <ul className="prices">
                                        <li>$150.000</li>
                                        <li>$180.000</li>
                                        <li>$200.000</li>
                                        <li>$280.000</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="containerCat">
                        <div className="category">
                            <h2>Bebidas sin alcohol</h2>
                            <ul className="categorias">
                                <li>
                                    <ul className="nombres">
                                        <li>Agua</li>
                                        <li>Jugo natural</li>
                                        <li>Bebida energética</li>
                                    </ul>
                                </li>
                                <li className="ultimoB">
                                    <ul className="prices">
                                        <li>$4.000</li>
                                        <li>$8.000</li>
                                        <li>$14.000</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="containerCat">
                        <div className="category">
                            <h2>Cócteles</h2>
                            <ul className="categorias">
                                <li>
                                    <ul className="nombres">
                                        <li>Piña colada</li>
                                        <li>Margarita</li>
                                        <li>Mojito</li>
                                        <li>Cóctel especial de la casa</li>
                                    </ul>
                                </li>
                                <li className="ultimoC">
                                    <ul className="prices">
                                        <li>$44.000</li>
                                        <li>$44.000</li>
                                        <li>$44.000</li>
                                        <li>$50.000</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="containerCat">
                        <div className="category">
                            <h2>Cervezas</h2>
                            <ul className="categorias">
                                <li>
                                    <ul className="nombres">
                                        <li>Águila</li>
                                        <li>Póker</li>
                                        <li>Club Colombia</li>
                                        <li>Andina</li>
                                    </ul>
                                </li>
                                <li className="ultimoCe">
                                    <ul className="prices">
                                        <li>$10.000</li>
                                        <li>$8.000</li>
                                        <li>$15.000</li>
                                        <li>$10.000</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="containerCat">
                        <div className="category">
                            <h2>Comidas</h2>
                            <ul className="categorias">
                                <li>
                                    <ul className="nombres">
                                        <li>Papas a la francesa</li>
                                        <li>Dedos de queso</li>
                                        <li>Nachos con guacamole</li>
                                        <li>Mini hamburguesa</li>
                                    </ul>
                                </li>
                                <li className="ultimoCm">
                                    <ul className="prices">
                                        <li>$12.000</li>
                                        <li>$15.000</li>
                                        <li>$20.000</li>
                                        <li>$18.000</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Menu;