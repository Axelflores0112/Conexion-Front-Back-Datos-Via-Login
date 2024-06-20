import { UserContext } from "../contexts/UserContext"
import { useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react";
import "../styles/modalDelete.css"
const API_URL = "http://localhost:3010/";
function modalDelete({ closeModal, fetchAnime }: any) {

    const { user } = useContext(UserContext);
    const [name, setName] = useState("");
    const tokenUser = user?.token

    const deleteAnime = async () => {
        try {
            const checkResponse = await fetch(`${API_URL}api/v1/animes?name=${name}`, {
                headers: {
                    'Authorization': `Bearer ${tokenUser}`
                }
            });
            const checkData = await checkResponse.json();
            if (!checkData || checkData.length === 0) {
                toast.error("El anime no existe y no puede ser eliminado",{
                    position: "bottom-center"
                });
                return;
            }
            const response = await fetch(`${API_URL}api/v1/animes?name=${name}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${tokenUser}`
                }
            });
            if (!response.ok) {
                toast.error("Ocurrio un error al obtener los datos")
            } else {
                const data = await response.json();
                fetchAnime(user?.id, tokenUser)
                closeModal(null)
                console.log(data);
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
    const handleOnDelete=()=>{
        if (!name) {
            toast.error("Por favor llene todos los campos", {
                position: "bottom-center"
            });
        }else{
            deleteAnime()
        }
    }
    return (
        <div className="modalBackground">
            <div className="modal-container-delete">
                <ToastContainer />
                <div className="close-btn-delete">
                    <button className="" onClick={() => closeModal(null)}>X</button>
                </div>
                <div className="modal-title-delete">
                    <h1>Eliminar Anime</h1>
                </div>
                <div className="modal-body-delete">
                    <form className="modal-form-delete">
                        <input className="name-delete" value={name} name="name" type="text" placeholder="Nombre" onChange={handleInputChange(setName)} ></input>
                    </form>
                </div>
                <div className="modal-footer-delete">
                    <button className="" onClick={handleOnDelete}>Eliminar</button>
                </div>
            </div>
        </div>
    )
}
export default modalDelete