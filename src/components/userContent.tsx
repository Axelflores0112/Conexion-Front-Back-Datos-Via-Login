import { UserContext } from "../contexts/UserContext"
import { useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react";
import { useEffect } from "react";
import "../styles/userContent.css"
const API_URL = "http://localhost:3010/";
interface Animes {
    name: string,
    description: string,
    genere: string,
    score: number
    user: object
}
function userContent() {
    const { user } = useContext(UserContext);
    const [animes, setAnimes] = useState<Animes[]>([])

    useEffect(() => {
        const userID = user?.id
        const token = user?.token
        if (userID && token) {
            fetchAnime(userID, token)
        }
    }, [])

    const fetchAnime = async (id: string, token: string) => {
        try {
            const response = await fetch(`${API_URL}api/v1/animes?userId=${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (!response.ok) {
                toast.error("Ocurrio un error al obtener los datos")
            } else {
                const data = await response.json();
                setAnimes(data)
                console.log(data);
            }

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="data-user">
            <ToastContainer />
            <div className="title">
                <h1>Mis animes</h1>
            </div>
            {
                user ?
                    <table className="anime-table">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Genero</th>
                                <th>Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {animes.map((anime, index) => (
                                <tr key={index}>
                                    <td>{anime.name}</td>
                                    <td>{anime.description}</td>
                                    <td>{anime.genere}</td>
                                    <td>{anime.score}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table> : <p>no hay datos</p>
            }
            <div className="btn-section">
                <button className="btn-create">Agregar</button>
                <button className="btn-edit">Editar</button>
                <button className="btn-delete">Eliminar</button>
            </div>
        </div>
    )
}
export default userContent