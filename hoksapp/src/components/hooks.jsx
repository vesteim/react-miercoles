import { useEffect, useState } from "react";

export default function Hooks(){
    //console.log(useState());
    let [contador, setContador] =  useState(0);
    let [mostrar, setMostrar] = useState(false);
    useEffect(()=>{
        console.log("regustro de estado: "+contador);
        console.log("registro de mostrar: "+mostrar);
    })
    return(
        <>
       <span> {contador} 
            <button
                onClick={()=>setContador(contador+1)}>👍 likes
            </button>
           
       </span>
       <button onClick={()=>setMostrar(!mostrar)}>Mostrar/ocultar</button>
       { mostrar == true ? <div>Holi 😊😁</div> :""}
       </>
       
    )
}


export  function OtroComponente(){
    return(
        <h2>Enlaces</h2>
    )
}