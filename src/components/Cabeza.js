import React from 'react';
import logo from '../images/logo.png';

import Navbar from './Cabeza_navbar';

function Cabecera(){
    return(
        <div className='cabecera p-2'>
            <div className='centrar container'>
                <div className='row'>
                    <div className='col'>
                        <img src={logo} className='img-fluid' alt='logo'/>
                    </div>
                    <div className='col p-0 pt-2'>
                        <Navbar></Navbar>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Cabecera