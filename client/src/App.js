
import 'semantic-ui-css/semantic.min.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import ErrorPage from "./Components/ErrorPage";
import SignUp from './Components/SignUp';
import ProblemsContainer from './Components/ProblemsContainer';
import ProblemDetail from './Components/ProblemDetail';

function App() {
  return (
    <div >
      <h1>Code-The-Code</h1>
      <NavBar/>
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path='SignUp' element={<SignUp />} /> 
        <Route path="problems" element={<ProblemsContainer />}/>
        <Route path='problems/:problemId' element={<ProblemDetail />} /> 
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </div>
  );
}

export default App;
