
import 'semantic-ui-css/semantic.min.css'
import {React, useState} from 'react';
import { Header } from 'semantic-ui-react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import ErrorPage from "./Components/ErrorPage";
import SignUp from './Components/SignUp';
import ProblemsContainer from './Components/ProblemsContainer';
import ProblemDetail from './Components/ProblemDetail';
import Contact from './Components/Contact';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function handlesetLoggIn(bool){
    console.log(`bool,${bool}`)
    setIsLoggedIn(bool)
    
  }
  console.log(`isLoggedIn,${isLoggedIn}`)
  return (
    <div >
      <Header as='h1'>Coding App</Header>
      <NavBar isLoggedIn={isLoggedIn}/>
      
      <Routes>
        <Route path="/" element={<Home  csetIsLoggedIn={handlesetLoggIn}/>}/>
        <Route path="about" element={<About />}/>
        <Route path='SignUp' element={<SignUp />} /> 
        <Route path="problems" element={<ProblemsContainer />}/>
        <Route path='problems/:problemId' element={<ProblemDetail />} /> 
        <Route path='contact' element={<Contact />} /> 
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </div>
  );
}

export default App;
