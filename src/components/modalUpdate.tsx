import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react";
import { UserContext } from "../contexts/UserContext"
import { useContext } from "react";
import "../styles/modalUpdate.css"
const API_URL = "http://localhost:3010/";
function modalUpdate({ closeModal, fetchAnime }: any) {
    const [animeName, setanimeName] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [genere, setGenere] = useState("");
    const [score, setScore] = useState(0);
    const { user } = useContext(UserContext);
    const tokenUser = user?.token
    const userid = user?.id
    const updateAnime = async () => {
        try {
            const anime = { name, description, genere, score }
            const checkResponse = await fetch(`${API_URL}api/v1/animes?name=${name}`, {
                headers: {
                    'Authorization': `Bearer ${tokenUser}`
                }
            });
            const checkData = await checkResponse.json();
            if (!checkData || checkData.length === 0) {
                toast.error("El anime no existe no se puede actualizar", {
                    position: "bottom-center"
                });
                return;
            }
            const response = await fetch(`${API_URL}api/v1/animes?name=${animeName}`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${tokenUser}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(anime)
            });
            if (!response.ok) {
                toast.error("Ocurrio un error al obtener los datos")
            } else {
                const data = await response.json();
                if (data && response.ok) {
                    console.log(data);
                    toast.success("Anime creado con exito", {
                        position: "bottom-center"
                    });
                }
                fetchAnime(userid, tokenUser)
                closeModal(null);
            }
        } catch (error) {
            console.log(error)
        }
    }
    const handleInputChange = (stateUpdate: any) => {
        return (e: any) => {
            stateUpdate(e.target.value)
        }
    }
    const handleOnEdit = () => {
        if (!animeName || !name || !description || !genere || !score) {
            toast.error("Por favor llene todos los campos", {
                position: "bottom-center"
            });
        } else {
            updateAnime()
        }
    }
    return (

        <div className="modalBackground">
            <ToastContainer />
            <div className="modal-container-update">
                <div className="close-btn-update">
                    <button className="" onClick={() => closeModal(null)}>X</button>
                </div>
                <div className="modal-title-update">
                    <h1>Editar Anime</h1>
                </div>
                <div className="modal-body-update">
                    <form className="modal-form-update">
                        <input className="name-update" value={animeName} name="name" type="text" placeholder="Nombre del anime a editar" onChange={handleInputChange(setanimeName)} ></input>
                        <input className="name-update" value={name} name="name" type="text" placeholder="Nombre" onChange={handleInputChange(setName)} ></input>
                        <input className="description-update" value={description} name="description" type="text" placeholder="Descripcion" onChange={handleInputChange(setDescription)} ></input>
                        <input className="genere-update" value={genere} name="genere" type="text" placeholder="Genero" onChange={handleInputChange(setGenere)} ></input>
                        <input className="score-update" value={score} name="score" type="number" placeholder="Score" onChange={handleInputChange(setScore)} ></input>
                    </form>
                </div>
                <div className="modal-footer-update">
                    <button className="" onClick={handleOnEdit}>Editar</button>
                </div>
            </div>
        </div>
    )
}
export default modalUpdate
