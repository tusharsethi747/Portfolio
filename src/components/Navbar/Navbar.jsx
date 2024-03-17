import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import menuIcon from '../../assets/menuIcon.png'

const Navbar = () => {
  const [isMenuOpen,SetMenuOpen]=useState(false);
  return (
    <div>
        {/* <h1>hello</h1> */}
        <nav className='navbar'>
         <div className='title'>Portfolio</div>
         <img src={menuIcon} alt='menu-icon' className='menuIcon' onClick={()=>{SetMenuOpen(!isMenuOpen)}}/>
         <div className='menu'>
            <ul 
                className={`menu-items ${isMenuOpen ? 'MenuOpen' : ''} `}
                onClick={() => SetMenuOpen(false)}
            >
                    <li>
                        <a href="#About" className='menu-item'>About</a>
                    </li>
                    <li>
                        <a href="#Experience" className='menu-item'>Experience</a>
                    </li>
                    <li>
                        <a href="#Projects" className='menu-item'>Projects</a>
                    </li>
                    <li>
                        <a href="#Contact" className='menu-item'>Contact</a>
                    </li>

                </ul>
         </div>
        </nav>
    </div>
  )
}

export default Navbar