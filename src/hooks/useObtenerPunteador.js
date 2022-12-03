import { useState, useEffect } from 'react';
import {realtimedb} from './../firebase/firebaseConfig';

const useObtenerPunteador = () => {
    const [puntoFinal, cambiarPuntoFinal] = useState({});

    useEffect(() => {
        realtimedb.ref().on('value', (puntos) => {
            const list = [];
            puntos.forEach((punto) => {
                list.push(punto.val())
            })
            cambiarPuntoFinal(list)
            })
        }, []);

    return [puntoFinal];
}
 
export default useObtenerPunteador;