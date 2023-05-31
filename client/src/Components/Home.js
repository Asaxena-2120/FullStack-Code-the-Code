import React, { useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
/* import Login from "./Login"; */
import Login from './Login';
import ProblemsContainer from "./ProblemsContainer";
const NAME = 'test';
const PASSWORD = 'test';


function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  let userId  = useParams();
  console.log(userId)
  function handleSetLogin(formData){

   
    if (formData.username===NAME && formData.password ===PASSWORD){
      setIsLoggedIn(true)
    } 
    
  }

  return(
    <div>
        <h1>Home</h1>
        {isLoggedIn ? navigate("/problems") : <Login onSetLogin={handleSetLogin}/>}
      </div>
  ) 
      
  }

  export default Home;