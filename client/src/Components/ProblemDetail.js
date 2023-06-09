import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from 'semantic-ui-react';

function ProjectDetail() {
    const [project, setProject] = useState(null);
    const {problemId} = useParams()
   
    // const id =2

    useEffect(() => {
        fetch(`http://localhost:3000/problems/${problemId}`)
            .then(r => r.json())
            .then(data => setProject(data))
    }, [problemId])
    
    if (!project) return <h2>Loading...</h2>
    
    const { title, description, difficulty_level } = project
    
    return (
        <section>
            
            <Card 
          style={{
            width:'98%',
            margin:'20px'
          }}
         
          header=  {title}
          meta = {difficulty_level}
          description = {description}
          />
        </section>
    );
}

export default ProjectDetail;
