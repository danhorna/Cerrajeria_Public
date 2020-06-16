import React from 'react'

import body1 from '../images/body1.jpg'
import body2 from '../images/body2.jpg'

function Cuerpo(){
    return(
        <div className="centrar">
            <div id="slide" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#slide" data-slide-to="0" className="active"></li>
                <li data-target="#slide" data-slide-to="1"></li>
            </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={body1} alt="¿Mi llave esta lista?"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Estado de mi orden</h5>
                            <p>Ingrese aqui para verificar el estado de su orden</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={body2} alt="Ofertas"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Ofertas</h5>
                            <p>Ingrese aqui para ver las ofertas actuales</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#slide" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#slide" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Cuerpo