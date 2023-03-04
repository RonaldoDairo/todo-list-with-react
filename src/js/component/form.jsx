import React, { useState } from "react";

        
export const Form = ({ handelSubmit })=>{

        const initialState ={
                        tarea : '',
                        prueba : '',
                    }

    const [user , setUser] = useState(initialState)
    
    const handelChange = (e)=>{
        const value = e.target.value;
        const name = e.target.name;
        setUser({...user, [name]: value})
    }
    console.log(user)
	const sendData = (e) =>{
        e.preventDefault();
       if (e.key ==="Enter"){}
        handelSubmit(user);
        setUser(initialState);
	}
    //if (event.key === "Enter")

    return (
            <form  className="formulario" onChange={handelChange} onSubmit={sendData}>
                <input type="text"  name="tarea"  className="inp" value={user.tarea} required minLength={3}/>
                <input type="text"  name="prueba" className="inp" value={user.prueba} required minLength={3}/>
                <button className="btn" type="submit">Add one list</button>
            </form>
    )
}