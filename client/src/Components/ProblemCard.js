import React from "react";
import { Card } from 'semantic-ui-react';

export default function ProblemCard({problem, handleCardClick}){
    return (
        <Card 
          style={{
            width:'98%',
            margin:'20px'
          }}
          onClick={handleCardClick} key={problem.id}
          header=  {problem.title}
          meta = {problem.difficulty_level}
          description = {problem.description}
          />
    )
}