import React from 'react'

function Orden(){
    return(
        <div className="container-fluid mt-5">
            <div className="row justify-content-center">
                <div className="col-auto mb-3">
                    <div className="card">
                        <div className="card-header text-center bg-light">Verificar estado de la orden</div>
                        <div className="card-body bg-warning">
                            <form className='text-center'>
                                <label htmlFor='ordenid'>Numero de orden: </label>
                                <input type='text' id='ordenid' className='ml-3'></input><br></br>
                                <button type="submit" className="btn btn-dark mt-3">Buscar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default Orden