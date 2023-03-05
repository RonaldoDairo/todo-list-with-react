import React,{ useState } from "react";
import { Form } from "./form.jsx";
import { Lista } from "./user.jsx";

//include images into your bundle


//create your first component
const Home = () => {
	const [state,setState] = useState([])
	
	const handelSubmit = (newUser)=>{
		
		setState([...state,newUser]);

	}	

	return (
		<div className="text-center home"><h1 className="titulo">todos</h1>
			<div className="Content-form"><Form handelSubmit={handelSubmit}/></div>
			<div className="Content-user">	{state.map((user ,index)=>  <Lista key={index} user={user} />)}	</div>
				
		</div>
	);
};

export default Home;
