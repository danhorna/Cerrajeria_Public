import React from 'react'
import {Route} from 'react-router-dom'
import Inicio from './Inicio'
import Orden from './Orden'
import Contacto from './Contacto'

function Cuerpo(){
    return(
        <div className="centrar">
            <Route exact path='/' component={Inicio}/>
            <Route path='/orden' component={Orden}/>
            <Route path='/contacto' component={Contacto}/>
        </div>
    )
}

export default Cuerpo