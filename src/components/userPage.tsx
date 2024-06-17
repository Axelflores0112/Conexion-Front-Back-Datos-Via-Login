import {useContext, useState} from "react"
import { UserContext } from '../contexts/UserContext';
import UserHeader from "./userHeader";
import UserContent from "./userContent";
function userPage(){
    const {user}=useContext(UserContext);
    const [sesion,setSesion]=useState();
    return(
        <div className="body-user">
            <UserHeader/>
            <div className="user-content">
                <UserContent/>
            </div>
        </div>
    )
}
export default userPage