import React from 'react'
import MainNav from '../MainNav/MnainNAv'
import logo from '../../assets/img/Monogram-MO-Logo-Design-by-Greenlines-Studios.jpg'
import { Link } from 'react-router'
import './nav.css'
export default function Nav() {
  return (
    <>
    
    <MainNav/>
    <div className="nav">
      <div className='logo'>
        <img src={logo} alt='logoImg' className='imgLogo'/>
      </div>
      <div>
          
              <Link to={'/'} className='text-decoration-none text-white me-3 linkStyle'>Home</Link>
            
           
              <Link to={'/project'}className='text-decoration-none text-white me-3 linkStyle'>Projects</Link>
            
              <Link to={'/about'}className='text-decoration-none text-white me-3 linkStyle'>About</Link>
            
              
           
         
          </div>

    </div>
    
    </>
  )
}


{/*  */}