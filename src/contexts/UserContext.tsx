//Se usa context cuando deseamos que ciertos datos sean 
//accesibles de forma global
import React, { createContext, useState ,useEffect} from 'react';

interface User{
    name:string;
    email:string;
    id:string;
    token:string;
}//definimos usuario, que es lo que vamos recibir

interface UserContext {
    user:User | null;
    setUser:React.Dispatch<React.SetStateAction<User | null>>;
    sesion: boolean
    setSesion: React.Dispatch<React.SetStateAction<boolean>>
}//definimos que va usar el contexto

export const UserContext=createContext<UserContext>({
    user:null,
    setUser:()=>{},
    sesion:false,
    setSesion:()=>{}
});//definimos en donde y como almacenamos el usuario

export const UserProvider = ({children}:any) =>{
    const [user,setUser]=useState<User | null>(null);
    const [sesion,setSesion]=useState<boolean>(false)

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const storedSesion = localStorage.getItem('sesion');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
        if (storedSesion) {
          setSesion(JSON.parse(storedSesion));
        }
      }, []);
    
      useEffect(() => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
        }
        if (sesion) {
          localStorage.setItem('sesion', JSON.stringify(sesion));
        }
      }, [user, sesion]);
    return(
        <UserContext.Provider value={{user,setUser,sesion,setSesion}}>
            {children}
        </UserContext.Provider>
    )
}//Definimos el 'area' donde vamos a meter los componentes
//que van a tener acceso al contexto
