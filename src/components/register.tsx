import '../styles/register.css'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
//import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const API_URL = "http://localhost:3010/";
function register() {
    //Necesarios paara realizar validaciones y guardar datos
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [name, setName] = useState<string>("")
    //const navigate = useNavigate()

    const RegisterUSer = async ({ email, password, name }: { email: string, password: string, name: string }) => {
        try {
            const response = await fetch(`${API_URL}api/v1/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password, name }),
            });
            if (response.ok) {
                toast.success("Usuario creado correctamente", {
                    position: "bottom-center"
                });
                //navigate('/login')
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
        if (!email || !password || !name) {
            toast.error("Por favor llene todos los campos", {
                position: "bottom-center"
            });
            e.preventDefault()
        } else {
            RegisterUSer({ email, password, name })
        }
    }

    return (
        <body className="body-register">
            <div className="register-container">
                <ToastContainer />
                <div className="register-info-container">
                    <h1 className="titulo">Registro</h1>
                    <form className="inputs-container">
                        <input className="input" name="nombre" value={name} type="text" placeholder="Nombre" onChange={handleInputChange(setName)} />
                        <input className="input" name="correo" value={email} type="text" placeholder="Email" onChange={handleInputChange(setEmail)} />
                        <input className="input" name="clave" value={password} type="password" placeholder="Contraseña" onChange={handleInputChange(setPassword)} />
                        <button className="btn" id="btn" type="submit" onClick={handleOnClick} >registrar</button>
                        <p>Tienes cuenta? <span><Link className="ancla" to="/login">Pica aqui</Link></span></p>
                    </form>
                </div>
            </div>
        </body>

    )
}

export default register;