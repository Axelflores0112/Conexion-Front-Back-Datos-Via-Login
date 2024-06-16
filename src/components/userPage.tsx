import React,{useContext} from "react"
import { UserContext } from '../contexts/UserContext';
function userPage(){
    const {user}=useContext(UserContext);
    return(
 
        <div>
            <h1>User Page</h1>
            <h1>hola {user?.name}</h1>
            <h1>tu email es {user?.email}</h1>
            <h1>id: {user?.id}</h1>
            <h1>token: {user?.token}</h1>
        </div>
    )
}
export default userPage