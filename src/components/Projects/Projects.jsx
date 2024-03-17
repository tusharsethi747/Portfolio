import React from 'react'
import projects from "../../data/projects.json";
import ProjectsCard from './ProjectsCard';
const Projects = () => {
  return (
    <section className="project-container" id='Projects'>
      <h2 className='project-heading'>Projects</h2>
      <div className='projects'>
        {
          projects.map((project,index)=>{
            return (
              <ProjectsCard key={index} project={project}/>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects