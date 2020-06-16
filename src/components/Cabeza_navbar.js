import React from 'react';

function Navbar(){
    return(
        <div className="centrar">
            <nav className="navbar navbar-expand-lg navbar-light navStyle">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Mi orden</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contacto</a>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar