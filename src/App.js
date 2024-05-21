import logo from './logo.svg';
import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PaginaInicio from "./componentes/PaginaInicio";
import Header from "./componentes/Header";
import Contactanos from "./componentes/Contactanos";
import Politicas from "./componentes/Politicas";
import IniciarSesion from "./componentes/IniciarSesion";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

          <Routes>
              <Route exact path="/iniciarsesion" element={<IniciarSesion/>}/>
          </Routes>
          <Routes>
              <Route excact path="/" element={<PaginaInicio/>}/>
              <Route exact path="/contactanos" element={<Contactanos/>}/>
              <Route exact path="/politicas" element={<Politicas/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
