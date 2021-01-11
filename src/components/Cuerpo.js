import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Inicio from './Inicio'
import Orden from './Orden'
import Contacto from './Contacto'
import Admin from './Admin'
import NotFound from './NotFound'



function Cuerpo(){
    return(
        <div className="centrar">
            <Switch>
                <Route exact path='/' component={Inicio}/>
                <Route path='/orden' component={Orden}/>
                <Route path='/contacto' component={Contacto}/>
                <Route path="/admin" component={Admin}/>
                <Route path="*" component={NotFound} />
            </Switch>
        </div>
    )
}

export default Cuerpo