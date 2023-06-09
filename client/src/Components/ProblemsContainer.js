import React,{useState, useEffect} from "react";

import { useParams } from "react-router-dom";
import { Button, Progress } from 'semantic-ui-react'
import ProblemCard from "./ProblemCard";



function ProblemsContainer(){

    const [problems, setProblems] = useState([])
    const [selectedproblem,setSelectedProblem] = useState()
    const {id} = useParams()
    console.log(id)
    setSelectedProblem(id)

    useEffect(()=>{
      fetch('http://localhost:3000/items')
      .then((resp)=>resp.json()
      .then((data)=>setProblems(data)))

    },[])
   
 
    function handleCardClick(id){
        console.log("Card is clicked")
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