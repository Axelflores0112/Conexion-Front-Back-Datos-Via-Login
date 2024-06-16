import {useContext, useState } from 'react'
import '../styles/login.css'
import ImageLogin from '../Imagenes/Wavy_Gen-01_Single-07.jpg'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
const API_URL = "http://localhost:3010/";

function login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setUser} = useContext(UserContext)//funcion para estbalcer usuario de contexto
    const navigate = useNavigate()

    const logIn = async ({ email, password }: { email: string, password: string }) => {
        try {
            const response = await fetch(`${API_URL}api/v1/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                //destructuramos pa tomar info de diferentes niveles del objeto
                setUser({...data.user,token:data.token})
                navigate("/userPage")
            } else {
                toast.error("Usuario no encontrado", {
                    position: "bottom-center"
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleInputChange = (stateUpdate: any) => {
        return (e: any) => {
            stateUpdate(e.target.value)
        }

    }//Necesaria para poder realizar validaciones
    const handleOnClick = (e: any) => {
        if (!email || !password) {
            toast.error("Por favor llene todos los campos", {
                position: "bottom-center"
            });
            e.preventDefault()
        } else {
            logIn({ email, password })
            e.preventDefault()
        }
    }

    return (
        <body className="login-body">
            <div className="container-Login">
            <ToastContainer />
            <div className="login-info-container">
                <h1 className="titulo">Bienvenido</h1>
                <form className="inputs-container">
                    <input className="input" name="correo" type="text" placeholder="Email" value={email} onChange={handleInputChange(setEmail)} />
                    <input className="input" name="clave" type="password" placeholder="Contraseña" value={password} onChange={handleInputChange(setPassword)} ></input>
                    <button className="btn" onClick={handleOnClick}>Login</button>
                    <p>No tienes cuenta?<span><Link className="ancla" to="/register">Pica aqui</Link></span></p>
                </form>
            </div>
            <img src={ImageLogin} alt="" />
        </div>
        </body>

    )
}
export default login;