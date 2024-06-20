import { UserContext } from "../contexts/UserContext"
import { useContext } from "react";
import { useState } from "react";
import "../styles/modalCreate.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const API_URL = "http://localhost:3010/";

function modalCreate({ closeModal, fetchAnime }: any) {

    const { user } = useContext(UserContext);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [genere, setGenere] = useState("");
    const [score, setScore] = useState(0);
    const tokenUser = user?.token
    const createAnime = async () => {
        try {
            const anime = { name, description, genere, score }
            
            const checkResponse = await fetch(`${API_URL}api/v1/animes?name=${name}`, {
                headers: {
                    'Authorization': `Bearer ${tokenUser}`,
                },
            });

            const checkData = await checkResponse.json();

            if (checkData.length > 0) {
                toast.error("El anime ya existe", {
                    position: "bottom-center"
                })
                return
            }

            const response = await fetch(`${API_URL}api/v1/animes`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${tokenUser}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(anime)
            });
            if (!response.ok) {
                toast.error("Ocurrio un error al obtener los datos")
            }else {
                closeModal(null)
                fetchAnime(user?.id, tokenUser)
            }
            toast.success("Anime creado", {
                position: "bottom-center"
            })
        } catch (error) {
            console.log(error)
        }
    }
    const handleInputChange = (stateUpdate: any) => {
        return (e: any) => {
            stateUpdate(e.target.value)
        }
    }
    const handleOnCreate=()=>{
        if (!name || !description || !genere || !score) {
            toast.error("Por favor llene todos los campos", {
                position: "bottom-center"
            });
        } else {
            createAnime()
        }
    }
    return (
        <div className="modalBackground">
                <ToastContainer />
            <div className="modal-container-create">
                <div className="close-btn-create">
                    <button className="" onClick={() => closeModal(null)}>X</button>
                </div>
                <div className="modal-title-create">
                    <h1>Crear Anime</h1>
                </div>
                <div className="modal-body-create">
                    <form className="modal-form-create">
                        <input className="name-create" value={name} name="name" type="text" placeholder="Nombre" onChange={handleInputChange(setName)} ></input>
                        <input className="description-create" value={description} name="description" type="text" placeholder="Descripcion" onChange={handleInputChange(setDescription)} ></input>
                        <input className="genere-create" value={genere} name="genere" type="text" placeholder="Genero" onChange={handleInputChange(setGenere)} ></input>
                        <input className="score-create" value={score} name="score" type="number" placeholder="Score" onChange={handleInputChange(setScore)} ></input>
                    </form>
                </div>
                <div className="modal-footer-create">
                    <button className="" onClick={handleOnCreate}>Crear</button>
                </div>
            </div>
        </div>
    )
}
export default modalCreate
