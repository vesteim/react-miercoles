import { useContext } from "react";
import { color } from "../App";

export default function CambiarColor (){
    let nombreColor = useContext(color);
    console.log(nombreColor)
    return(
        
        <button style={{"backgroundColor": nombreColor == "claro" ? "green" : "black",
            "color": nombreColor == "claro" ? "white" : "red"}}>Cambiar</button>
    )
}