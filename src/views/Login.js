import React, {useState, useEffect} from 'react';
import {auth} from './../firebase/firebaseConfig';
import { useNavigate } from "react-router-dom";
import {Button} from 'react-bootstrap'
import {Helmet} from 'react-helmet'
import './../styles/login.css'
import Alerta from './../components/Alerta'

const Login = () => {
    
    // console.log(auth);

    const navigate = useNavigate();
    const [email, establecerEmail] = useState('');
    const [password, establecerPassword] = useState('');
    const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
    const [alerta, cambiarAlerta] = useState({});
    
    const handleChange = (e) => {
        if(e.target.name === 'email'){
            establecerEmail(e.target.value);
        } else if(e.target.name === 'password'){
            establecerPassword(e.target.value);
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        cambiarEstadoAlerta(false);
        cambiarAlerta({})
        console.log(email +" y "+ password)


        const expresionRegular = /[a-zA-Z0-9.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

        if(!expresionRegular.test(email)){
            cambiarEstadoAlerta(true);
            cambiarAlerta({
                tipo: 'error',
                mensaje: 'Por favor ingresa un correo electronico valido'
            })
            return;
        }

        if(email === '' || password === ''){
            cambiarEstadoAlerta(true);
            cambiarAlerta({
                tipo: 'error',
                mensaje: 'Por favor rellene los campos'
            })
            return;
        }

        try {
            await auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
            }).then(navigate.push('/'))
        } catch (error) {
            cambiarEstadoAlerta(true);
            console.log(alerta)

            let mensaje;
            switch(error.code){
                case 'auth/wrong-password':
                    mensaje = 'La contraseña es incorrecta.'
                    break;
                case 'auth/user-not-found':
                    mensaje = 'No se encontró ninguna cuenta con este correo electronico.'
                    break;
                default:
                    mensaje = 'Hubo un error al intentar iniciar sesion.'
                    break;
            }

            cambiarAlerta({tipo:'error', mensaje:mensaje})
        }
        
    }

    return (
        <>
            <div className="login-container">
                <form onSubmit={handleSubmit}>
                    <h1>Inicio de Sesion</h1>
                    <label>Correo Electronico</label>
                    <input
                        id='email'
                        name='email'
                        type="email"
                        placeholder="Correo Electronico"
                        value={email}
                        onChange={handleChange}
                    ></input>
                    <label>Contraseña</label>
                    <input
                        id='password'
                        name='password'
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={handleChange}
                    ></input>

                    <Button type="submit" variant="primary">Iniciar Sesion</Button>
                </form>
                <Alerta 
                    tipo={alerta.tipo}
                    mensaje={alerta.mensaje}
                    estadoAlerta={estadoAlerta}
                    cambiarEstadoAlerta={cambiarEstadoAlerta}
                />
            </div>
        </>
    );
}
 
export default Login;