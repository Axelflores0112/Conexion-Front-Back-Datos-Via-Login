//Estructura basica de un componente
import { useState } from "react";
function countButton(){
    let [count, setCount] = useState(0);//Variable de estado
    const handleOnClick = ()  => {
        setCount(count + 1);
    }
    return (
        <button onClick={handleOnClick}>
            count is {count}
        </button>
    )
}
    
export default countButton;