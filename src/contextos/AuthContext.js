import React, { useState, useEffect, useContext } from 'react';
import {auth} from '../firebase/firebaseConfig';

const AuthContext = React.createContext();

const useAuth = () => {
    return useContext(AuthContext)
}

const AuthProvider = ({children}) => {
    const [usuario, cambiarUsuario] = useState(); 

    useEffect(() => {
        const cancelarSubscripcion = auth.onAuthStateChanged((usuario) => {
            cambiarUsuario(usuario);
        });

        return cancelarSubscripcion;
    }, []);

    return (
        <AuthContext.Provider value={{usuario: usuario}}>
            {children}
        </AuthContext.Provider>
    );
}
 
export {AuthProvider, AuthContext, useAuth};