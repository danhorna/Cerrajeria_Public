import React from 'react';

import EstadoLocal from './EstadoLocal'

function FilaHorario(){

    return(
        <div className='centrar text-center bg-secondary'>
            <span className='mr-2'><EstadoLocal></EstadoLocal></span>
            <span className='text-warning'>Horario de atención: 15:30 - 22:00</span>
            <span className='ml-2'><EstadoLocal></EstadoLocal></span>
        </div>
    )
}

export default FilaHorario