import React from 'react'

const ProjectsCard = ({project}) => {
  return (
    <div className='card-container'>
        <img src={require(`../../assets/${project.imageSrc}`)} alt="my img"  className='project-img'/>
        <h3 className='project-name'>{project.title}</h3>
        <p className='project-desc'>{project.description}</p>
        <ul className='project-skills'>
        {
        project.skills.map((skill,id)=>{
            return <li key={id} className='project-skill'>{skill}</li>
                
        })
        }
        </ul>
        <div className='project-links'>
        <a href={`${project.demo}`} target='_blank' className='project-link'>Demo</a>
        <a href={`${project.source}`} target='_blank' className='project-link'>Source</a>
        </div>
    </div>
  )
}

export default ProjectsCard