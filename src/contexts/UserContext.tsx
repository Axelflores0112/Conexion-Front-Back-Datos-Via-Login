//Se usa context cuando deseamos que ciertos datos sean 
//accesibles de forma global
import React, { createContext, useState } from 'react';

interface User{
    name:string;
    email:string;
    id:string;
    token:string;
}//definimos usuario, que es lo que vamos recibir

interface UserContext {
    user:User | null;
    setUser:React.Dispatch<React.SetStateAction<User | null>>;
}//definimos que va usar el contexto

export const UserContext=createContext<UserContext>({
    user:null,
    setUser:()=>{}
});//definimos en donde y como almacenamos el usuario

export const UserProvider = ({children}:any) =>{
    const [user,setUser]=useState<User | null>(null);

    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}//Definimos el 'area' donde vamos a meter los componentes
//que van a tener acceso al contexto