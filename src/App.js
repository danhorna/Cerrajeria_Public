import React from 'react';
import './App.css';

//componentes
import Cabecera from './components/Cabeza';
import FilaHorario from './components/FilaHorario'
import Cuerpo from './components/Cuerpo'
import Detalles from './components/Detalles'
import Footer from './components/Footer'

function App() {
  return (
    <div className='w-100 h-100'>
      <Cabecera></Cabecera>
      <FilaHorario></FilaHorario>
      <Cuerpo></Cuerpo>
      <Detalles></Detalles>
      <Footer></Footer>
    </div>
  );
}

export default App;
