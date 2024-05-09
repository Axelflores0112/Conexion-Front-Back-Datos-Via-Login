import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import '../styles/form.css'
const API_URL = "http://localhost:3010/";
interface Animes {
    name: string,
    description: string,
    genere: string,
    score: number
    user: object
}
/*
    usuarios registrados:
    
    axel@hotmail.com
    password: 1234

    p@hotmail.com
    password: 1234
*/
function form() {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")//
    const [sesion, setSesion] = useState<boolean>(false)//bandera para la sesion
    const [animes, setAnimes] = useState<Animes[]>([])//establecer animes del usuario

    useEffect(() => {
        const userid = localStorage.getItem("userid")
        const token = localStorage.getItem("token")
        if (userid && token) {
            setSesion(true)
            fetchAnime(userid,token)
        }
    }, [])

    const logIn = async ({ email, password }: { email: string, password: string }) => {
        try {
            const response = await fetch(`${API_URL}api/v1/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),//convertir obj a JSON
            });
            if (!response.ok) {
                alert("Usuario no encontrado")
            }

            const data = await response.json()
            const userid = data.user.id
            const userStorageID = window.localStorage.getItem("userid")

            if (userStorageID === userid) {
                alert("Usuario ya logeado")
            } else {
                localStorage.setItem("userid", userid)
                localStorage.setItem("token", data.token)
                setSesion(true)
                fetchAnime(userid,data.token)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const fetchAnime = async (id: string,token:string) => {
        try {
            const respose = await fetch(`${API_URL}api/v1/animes?userId=${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (!respose.ok) {
                alert("Error al obtener los datos")
            }
            const data = await respose.json();
            setAnimes(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleInputChange = (stateUpdate: any) => {
        return (e: any) => {
            stateUpdate(e.target.value)
        }
    }

    const handleOnClick = (e: any) => {
        if (!email || !password) {
            alert("Ingrese contrasenia y correo por favor")
        } else {
            logIn({ email, password })
        }
        //fetchAnime()
        e.preventDefault()
    }
    return (
        <div className="container mt-3">
            <div className="form mt-5">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleInputChange(setEmail)} />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={handleInputChange(setPassword)} />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={handleOnClick}>
                        Submit
                    </Button>
                </Form>
            </div>
            {
                sesion && (
                    <div className="animes">
                        <h2>Animes listados</h2>
                        {
                            animes.map((anime, index) => (
                                <div key={index} className="anime">
                                    <h3>{anime.name}</h3>
                                    <p>Description: {anime.description}</p>
                                    <p>Genere: {anime.genere}</p>
                                    <p>Score: {anime.score}</p>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}
export default form;