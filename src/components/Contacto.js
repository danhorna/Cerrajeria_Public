import React from 'react'

function Contacto(){
    return(
        <div>
            <div className="container-fluid mt-5">
                <div className="row justify-content-center">
                    <div className="col-auto mb-3">
                        <div className="card bg-primary">
                            <div className="card-header text-center bg-warning">Contacto</div>
                            <div className="card-body bg-light">
                                <div>
                                    <i className="fa fa-facebook-square iconFace align-middle"></i>
                                    <a href='https://www.facebook.com/' target='_blank' rel="noopener noreferrer" className='btn btn-primary align-middle ml-2'>CH Cerrajeria</a>
                                </div>
                                <div className='mt-3'>
                                    <i className="fa fa-whatsapp iconWhats align-middle"></i>
                                    <a href ="https://api.whatsapp.com/send?phone=542213649786" target="_blank" rel="noopener noreferrer" className="btn btn-success align-middle ml-2">Escribinos</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacto