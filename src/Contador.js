import React from 'react';
import {useAuth} from './contextos/AuthContext';
import 'firebase/database';
import './estilos.css';
import useObtenerPunteador from './hooks/useObtenerPunteador';

const Contador = () => {
    const [puntoFinal] = useObtenerPunteador();
    const {usuario} = useAuth();

    return (
        <div>
            {usuario &&
            Array.isArray(puntoFinal) ? puntoFinal.map((partido, index) => {
                console.log(partido)
                    return (<table className="tabla-puntos-1" key={partido+index}>
                        <tbody>
                            <tr>
                                {partido.PAREJA1 !== undefined && partido.SAQUE1 !== undefined ?
                                    <th className="parejas" colSpan="1">{partido.PAREJA1.replace(/['\\"]+/g, '').toUpperCase()}</th> :
                                    console.log()
                                }

                                {partido.SAQUE1 !== undefined ?
                                    <th className="saque">{partido.SAQUE1.replace(/['"]+/g, '')}</th> :
                                    <th className="saque"></th>
                                }
                                {(partido.P11S !== '""' || partido.P21S !== '""') && partido.P11S !== undefined ?
                                    <th className="set">{partido.P11S.replace(/['"]+/g, '')}</th>
                                    :
                                    console.log()
                                }

                                {(partido.P12S !== '""' || partido.P22S !== '""') && partido.P12S !== undefined ?
                                    <th className="set">{partido.P12S.replace(/['"]+/g, '')}</th>
                                    :
                                    console.log()
                                }

                                {(partido.P13S !== '""' || partido.P23S !== '""') && partido.P13S !== undefined ?
                                    <th className="set">{partido.P13S.replace(/['"]+/g, '')}</th>
                                    :
                                    console.log()
                                }

                                {(partido.P1PS !== '""' || partido.P2PS !== '""' || partido.PUNTUACION === '"TBR"')
                                    && (partido.SAQUE1 !== '""' || partido.SAQUE2 !== '""' || partido.P1PS !== '"0"' || partido.P2PS !== '"0"')
                                    && partido.P1PS !== undefined ?
                                    partido.PUNTUACION === '"ORO"' ?
                                        <th className="oro">{partido.P1PS.replace(/['"]+/g, '')}</th> : partido.PUNTUACION === '"TBR"' ?
                                            <th className="tbr">{partido.P1PS.replace(/['"]+/g, '')}</th> :
                                            <th className="puntos">{partido.P1PS.replace(/['"]+/g, '')}</th>

                                    :
                                    console.log()
                                }
                            </tr>
                            <tr>
                                {partido.PAREJA2 !== undefined && partido.SAQUE2 !== undefined ?
                                    <th className="parejas" colSpan="1">{partido.PAREJA2.replace(/['\\"]+/g, '').toUpperCase()}</th> :
                                    console.log()
                                }
                                {partido.SAQUE2 !== undefined ?
                                    <th className="saque">{partido.SAQUE2.replace(/['"]+/g, '')}</th> :
                                    <th className="saque"></th>
                                }

                                {(partido.P11S !== '""' || partido.P21S !== '""') && partido.P11S !== undefined ?
                                    <th className="set">{partido.P21S.replace(/['"]+/g, '')}</th>
                                    :
                                    console.log()
                                }

                                {(partido.P12S !== '""' || partido.P22S !== '""') && partido.P22S !== undefined ?
                                    <th className="set">{partido.P22S.replace(/['"]+/g, '')}</th>
                                    :
                                    console.log()
                                }

                                {(partido.P13S !== '""' || partido.P23S !== '""') && partido.P23S !== undefined ?
                                    <th className="set">{partido.P23S.replace(/['"]+/g, '')}</th>
                                    :
                                    console.log()
                                }

                                {(partido.P1PS !== '""' || partido.P2PS !== '""' || partido.PUNTUACION === '"TBR"')
                                    && (partido.SAQUE1 !== '""' || partido.SAQUE2 !== '""' || partido.P1PS !== '"0"' || partido.P2PS !== '"0"')
                                    && partido.P2PS !== undefined ?
                                    partido.PUNTUACION === '"ORO"' ?
                                        <th className="oro">{partido.P2PS.replace(/['"]+/g, '')}</th> :
                                        partido.PUNTUACION === '"TBR"' ?
                                            <th className="tbr">{partido.P2PS.replace(/['"]+/g, '')}</th> :
                                            <th className="puntos">{partido.P2PS.replace(/['"]+/g, '')}</th>
                                    :
                                    console.log()
                                }
                            </tr>
                        </tbody>
                    </table>)
                }) :null}
        </div>
    )
}

export default Contador;