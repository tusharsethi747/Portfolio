import React from 'react'
import tusharImg from '../../assets/tusharimg4.jpg';
import frontIMG from "../../assets/frontIMG.png";
import backendIMG from "../../assets/server.png";
import problemSolving from "../../assets/prob.png";
import comm from "../../assets/comm2.png";
// import 
import uiIcon from '../../assets/uiIcon.png'
import serverIcon from '../../assets/serverIcon.png'
const About = () => {
  return (
    <section className='About-container' id='About'>
        <h2 className='About-title'>About</h2>
        <div className='About-content'>
            <img src={tusharImg} className='About-img'/>
            <div className='About-list'>
                <ul className='About-list-items'>
                    <li>
                        <div className='About-list-item'>
                            <img src={frontIMG}/>
                            <div className='About-list-item-content'>
                                <h3>Frontend Expertise</h3>
                                <p>Proficient in React for dynamic UIs, integrating CSS with frameworks like Tailwind, Material UI, and Bootstrap for varied design aesthetics. Solid foundation in HTML for clean code and strong web page structure</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='About-list-item'>
                            <img src={backendIMG}/>
                            <div className='About-list-item-content'>
                                <h3>Backend Mastery:</h3>
                                <p>Skilled in Node.js and Express.js for robust API development, with MongoDB for flexible data persistence. Proficient in Postman for efficient API testing and communication..</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='About-list-item'>
                            <img src={problemSolving}/>
                            <div className='About-list-item-content'>
                                <h3>Problem-Solving Skills</h3>
                                <p>Structured approach to challenges, utilizing knowledge of data structures and algorithms for optimal solutions. Constantly seeking understanding of core issues..</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='About-list-item'>
                            <img src={comm}/>
                            <div className='About-list-item-content'>
                                <h3>Communication & Collaboration</h3>
                                <p>Beyond technical expertise, I value effective communication and teamwork. I can clearly articulate complex ideas and actively collaborate with team members to achieve shared goals.</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default About