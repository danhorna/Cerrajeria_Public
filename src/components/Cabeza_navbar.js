import React from 'react';
import FilaHorario from './FilaHorario'
import Cuerpo from './Cuerpo'
import {BrowserRouter, NavLink} from 'react-router-dom'
function Navbar(){
    return(
        <BrowserRouter>
            <div>
                <div className="centrar">
                    <nav className="navbar navbar-expand-lg navbar-light navStyle">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink exact to='/' className='nav-link'>Inicio</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/orden' className='nav-link'>Mi orden</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/contacto' className='nav-link'>Contacto</NavLink>
                                </li>
                            </ul>
                        </div>
                        <NavLink to="/admin" className="text-danger">ADMIN</NavLink>
                    </nav>
                </div>
                <FilaHorario></FilaHorario>
                <Cuerpo></Cuerpo>
            </div>
        </BrowserRouter>
    )
}

export default Navbar