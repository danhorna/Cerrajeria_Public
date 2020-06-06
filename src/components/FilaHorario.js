import React, { useState, useEffect } from 'react';

import EstadoLocal from './EstadoLocal'

function FilaHorario(){

    return(
        <div className='bg-secondary'>
            <div className='centrar text-center'>
                <span className='mr-2'><EstadoLocal></EstadoLocal></span>
                <span className='text-warning'>Horario de atención: 15:30 - 22:00</span>
                <span className='ml-2'><EstadoLocal></EstadoLocal></span>
                
            </div>
        </div>
    )
}

export default FilaHorario