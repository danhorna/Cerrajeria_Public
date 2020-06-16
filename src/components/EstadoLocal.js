import React, { useState, useEffect } from 'react'


function EstadoLocal(){

    const [hora, setHora] = useState(
        new Date
    )
    const [estado, setEstado] = useState({
        cn : "spinner-border spinner-border-sm",
        ct : "Cargando"
    })
    
    const elEstado = () =>{
        var dt = new Date();

        var startTime = '15:00:00';
        var endTime = '22:00:00';

        var s =  startTime.split(':');
        var dt1 = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate(), parseInt(s[0]), parseInt(s[1]), parseInt(s[2]));

        var e =  endTime.split(':');
        var dt2 = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate(),parseInt(e[0]), parseInt(e[1]), parseInt(e[2]));
        if(dt >= dt1 && dt <= dt2) return true
        else return false
    }
    useEffect( () => {
        var timerID = setInterval(() => {
            setHora(new Date);
            elEstado() ? 
                setEstado({
                    cn : "spinner-grow text-success spinner-grow-sm",
                    ct : "Abierto"
                }) 
                : 
                setEstado({
                    cn : "spinner-grow text-danger spinner-grow-sm",
                    ct : "Cerrado"
                })
        }, 1000);
        return function cleanup(){
            clearInterval(timerID)
        };
    })
    return(
        <span className={estado.cn} data-original-title={estado.ct} data-toggle="tooltip" ></span>
    )
}

export default EstadoLocal