import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import DataFetchingComponent from "./renderComponemt";

function App() {
  /*const [search , setSearch] = useState('') */
  
	
	
	return (
    <>
		<div className="flex flex-col items-center font-Prompt text-5xl mt-10 text-sky-400">เที่ยวไหนดี</div>


    
    
     

    

   < DataFetchingComponent/>

    </>
	);
}

export default App

