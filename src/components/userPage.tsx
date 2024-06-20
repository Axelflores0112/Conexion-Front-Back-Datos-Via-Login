import {useContext} from "react"
import { UserContext } from '../contexts/UserContext';
import UserHeader from "./userHeader";
import UserContent from "./userContent";
function userPage(){
    const {sesion}=useContext(UserContext);
  
    return(
        sesion ?(
        <div className="body-user">
            <UserHeader/>
            <div className="user-content">
                <UserContent/>
            </div>
        </div>
        ):(
            <div className="body-user">
                <h1>Por favor inicie sesion</h1>
            </div>
        )
    )
}
export default userPage
