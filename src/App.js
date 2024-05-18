import logo from './logo.svg';
import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PaginaInicio from "./componentes/PaginaInicio";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route excact path="/" element={<PaginaInicio/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
