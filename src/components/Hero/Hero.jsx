import React from 'react'
import tusharimg from '../../assets/tushar-img.jpeg'
import { Link } from 'react-router-dom'
import linkedin from '../../assets/linkedin.png'
import youtube from '../../assets/yotube.png'
import Leetcode from '../../assets/leetcode.png'
import github from "../../assets/github.png"
const Hero = () => {
  return (
    <section className='hero-section'>
        <div className='hero-left-section'>
            <h1 className='hero-title'>Hi, I'm Tushar</h1>
            <p className='hero-description'>
            I'm a driven full-stack web developer currently tackling the exciting world of technology in my third year of the BTech (IT) program at Bhagwan Parshuram Institute of Technology, Guru Gobind Singh Indraprastha University. My enthusiasm for tech translates into building intuitive web experiences that streamline everyday tasks and bring a touch of delight to the digital world.</p>
            <p className='hero-description'>I'm currently searching for new opportunities to leverage my skills and keep growing as a professional. I'm always open to exploring exciting possibilities and discussing how we can work together to achieve great things. </p>

            <h3>Let's connect!</h3>
            {/* <Link to="mailto:tusharsethi747@gmail.com" className='contact-btn'>Contact me</Link> */}
            <div className='links-hero'>
              <a href="https://www.linkedin.com/in/tusharsethi1/" target='_blank'>
                <img src={linkedin} alt="Linkedin" />
              </a>
              <a href="https://leetcode.com/Tushar_sethi/" target='_blank'>
                <img src={Leetcode} alt="" />
              </a>
              <a href="https://github.com/tusharsethi747" target='_blank'>
                <img src={github} alt="" />
              </a>
              <a href="https://www.youtube.com/@AlgoAtlas" target='_blank'>
                <img src={youtube} alt="" />
              </a>

            </div>
        </div>
        <img src={tusharimg} alt='this is me' className='hero-img'/>

        <div className='topBlur'/>
        <div className='bottomBlur'/>
    </section>
  )
}

export default Hero