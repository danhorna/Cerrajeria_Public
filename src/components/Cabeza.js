import React from 'react';
import logo from '../images/logo.png';

function Cabecera(){
    return(
        <div className='p-2'>
            <div className='centrar container'>
                <div className='row'>
                    <div className='col'>
                        <img src={logo} className='img-fluid' alt='logo'/>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Cabecera