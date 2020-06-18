import React from 'react';
import './App.css';
//componentes
import Cabecera from './components/Cabeza';
import Footer from './components/Footer'

import Navbar from './components/Cabeza_navbar'
function App() {
  return (
    <div className='w-100 h-100'>
      <Cabecera></Cabecera>
      <Navbar></Navbar>
      <Footer></Footer>
    </div>
  );
}

export default App;
