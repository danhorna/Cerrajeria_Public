import React from 'react';
import './App.css';

//componentes
import Cabecera from './components/Cabeza';
import FilaHorario from './components/FilaHorario'
import Cuerpo from './components/Cuerpo'

function App() {
  return (
    <div className='w-100 h-100'>
      <Cabecera></Cabecera>
      <FilaHorario></FilaHorario>
      <Cuerpo></Cuerpo>
    </div>
  );
}

export default App;
