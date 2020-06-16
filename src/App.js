import React from 'react';
import './App.css';

//componentes
import Cabecera from './components/Cabeza';
import FilaHorario from './components/FilaHorario'
import Cuerpo from './components/Cuerpo'
import Detalles from './components/Detalles'
import Footer from './components/Footer'

import Navbar from './components/Cabeza_navbar'
function App() {
  return (
    <div className='w-100 h-100'>
      <Cabecera></Cabecera>
      <Navbar></Navbar>
      <FilaHorario></FilaHorario>
      <Cuerpo></Cuerpo>
      <Detalles></Detalles>
      <Footer></Footer>
    </div>
  );
}

export default App;
