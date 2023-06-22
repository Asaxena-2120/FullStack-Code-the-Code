import React, { useState } from "react";
import { Divider, Image } from 'semantic-ui-react';
import { useNavigate,useParams } from "react-router-dom";
/* import Login from "./Login"; */
import Login from './Login';
import ProblemsContainer from "./ProblemsContainer";
const NAME = 'test';
const PASSWORD = 'test';
const src='https://t3.ftcdn.net/jpg/02/24/60/00/360_F_224600069_W7lxO3jE7CZ5s3izuhIoK5uSrDUz9x6W.jpg'

function Home({ csetIsLoggedIn}) {
  console.log(csetIsLoggedIn)
  const [isLoggedInHome, setIsLoggedInHome] = useState(false);
  const [userData, setUserData] = useState({
    username: "",
    password:"",
  })
  const navigate = useNavigate();
  let userId  = useParams();
  console.log(userId)

  function handleSetLogin(formData){

    setUserData(formData)
    if (formData.username===NAME && formData.password ===PASSWORD){
      setIsLoggedInHome(true)
      csetIsLoggedIn(true)
    } 
    
  }

  return(
    <div>
        <Image src={src} size='huge' centered bordered/>
        <Divider hidden />
        <Image src={'client/src/Components/971.jpg'} size = 'small'/>
        <Divider hidden />
        {isLoggedInHome ? navigate("/problems",{state:{username:userData.username, password:userData.password}}) : <Login onSetLogin={handleSetLogin}/>}
      </div>
  ) 
      
  }

  export default Home;