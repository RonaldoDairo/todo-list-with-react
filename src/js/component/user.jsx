import React from "react";


export const Lista = ({user})=>{
   const { tarea, prueba,}= user 
   

    return (         
        <div className="card">
            <p className="pauno">tarea : {tarea}</p>
            <p className="pados">prueba : {prueba}</p>
        </div>
    )
}