import logo from './logo.svg';
import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PaginaInicio from "./componentes/PaginaInicio";
import Header from "./componentes/Header";
import Contactanos from "./componentes/Contactanos";
import Politicas from "./componentes/Politicas";
import IniciarSesion from "./componentes/IniciarSesion";
import Registrar from "./componentes/Registrar";
import RestablecerContra from "./componentes/RestablecerContra";
import OlvidasteContra from "./componentes/OlvidasteContra";
import SolicitudReserva from "./componentes/SolicitudReserva";
import Menu from "./componentes/Menu";
import ListaEspera from "./componentes/ListaEspera";
import ServiciosEspeciales from "./componentes/ServiciosEspeciales";
import Perfil from "./componentes/Perfil";
import Mesas from "./componentes/Mesas";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route excact path="/" element={<PaginaInicio/>}/>
              <Route exact path="/registrar" element={<Registrar/>}/>
              <Route exact path="/iniciarsesion" element={<IniciarSesion/>}/>
              <Route exact path="/olvidaste" element={<OlvidasteContra/>}/>
              <Route exact path="/restablecer" element={<RestablecerContra/>}/>
              <Route exact path="/solicitud" element={<SolicitudReserva/>}/>
              <Route exact path="/contactanos" element={<Contactanos/>}/>
              <Route exact path="/politicas" element={<Politicas/>}/>
              <Route exact path="/menu" element={<Menu/>}/>
              <Route exact path="/lista" element={<ListaEspera/>}/>
              <Route exact path="/servicios" element={<ServiciosEspeciales/>}/>
              <Route exact path="/perfil" element={<Perfil/>}/>
              <Route exact path="/mesas" element={<Mesas/>}/>
           </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
