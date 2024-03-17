import React from 'react'
import skills from "../data/skills.json";
import oodles from "../assets/oodles.jpeg"
const Experience = () => {
  
  return (
    <section className='exp-section' id='Experience'>
      <h2 className='exp-title'>Experience</h2>
      <div className='exp-content'>
        <div className='exp-lang'>
          {
          skills.map((skill,index)=>{
              return (
              <div className='skills'>
                <div className='skill-img'><img key={index} src={require(`../assets/${skill.image}`)} alt='not me'/></div>
                <h4>{skill.title}</h4>
              </div>
              )
            })}
        </div>
        <div className='exp-jobs'>
            <div className='company-img' ><img src={oodles} alt='oodles'/></div>
            <div className='job-details'>
              <h2>OODLES TECHNOLOGIES</h2>
              <p>AUG 2023-OCT 2023</p>
              <ul>
                <li>
                  Developed  web pages using React.js, Material UI, HTML, CSS, and JavaScript during internship.
                </li>
                <li> 
                  Collaborated with back-end developers to seamlessly integrate user interfaces and Effectively troubleshooted and resolved technical issues
                </li>
              </ul> 
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience