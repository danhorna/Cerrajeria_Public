import React from 'react';

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light float-right">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Productos</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Contacto
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="#">WhatsApp</a>
                    <a className="dropdown-item" href="#">Correo</a>
                    </div>
                </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar