import React,{useState, useEffect} from "react";

import { useNavigate, useLocation } from "react-router-dom";
import { Progress } from 'semantic-ui-react'
import ProblemCard from "./ProblemCard";



function ProblemsContainer(){

  const { state } = useLocation();
  console.log(state);
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
    
    let [sttate,setState] = useState({ percent: 33 })

  
      return (
        <>

        <Progress percent={sttate.percent} progress />
      
        {problems.map((problem) =><ProblemCard key={problem.id} problem={problem} handleCardClick={handleCardClick}/>)}
        </>
    
      )

}

export default ProblemsContainer;