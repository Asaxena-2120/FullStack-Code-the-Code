import React,{useState, useEffect} from "react";

import { useNavigate } from "react-router-dom";
import { Button, Progress } from 'semantic-ui-react'
import ProblemCard from "./ProblemCard";



function ProblemsContainer(){

    const [problems, setProblems] = useState([])
    const [selectedproblem,setSelectedProblem] = useState()
    
    const navigate=useNavigate()
    // setSelectedProblem(id)

    useEffect(()=>{
      fetch('http://localhost:3000/problems')
      .then((resp)=>resp.json()
      .then((data)=>setProblems(data)))

    },[])
   
   
    function handleCardClick(problemId){
        console.log(problemId)
        console.log("Card is clicked")
        navigate(`/problems/${problemId}`)
        
    }
    
    let [state,setState] = useState({ percent: 33 })

  
      return (
        <>
        <Progress percent={state.percent} progress />
      
        {problems.map((problem) =><ProblemCard key={problem.id} problem={problem} handleCardClick={handleCardClick}/>)}
        </>
    
      )

}

export default ProblemsContainer;