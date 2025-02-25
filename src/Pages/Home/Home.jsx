import React from 'react'
import './home.css'
import moLogo from '../../assets/img/WhatsApp Image 2025-02-21 at 19.36.58_58f58688.jpg';
import Mission from '../../Componants/Mission/Mission';
import {motion} from 'framer-motion'
import Projects from '../../Componants/Projects/Projects';
import MainInfo from '../../Componants/Info/MainInfo';
import Contact from '../../Componants/Contatct/Contact';
import { Helmet } from 'react-helmet';
export default function Home() {
  return (
      <>

      <Helmet>
        <title> Home</title>
        <meta  name='description' content='Home| which have whole portfolio information also contain contact sectionto send any message for the outher....'/>
        
      </Helmet>
      <motion.div 
      
      initial={{opacity:0,translateX:"-100%"}}
      whileInView={{opacity:1,translateX:"0"}}
      transition={{duration:2}}
      className="container ">
        <div className="row g-3">
          <div className=" col-sm-6 col-lg-4 col-xl-4">
              <div className="borderstayl my-4">
                <img src={moLogo} className='img'/>
              </div>
          </div>
          <div className=" col-sm-10 col-lg-8 col-xl-8 info  ">
             <h2>I'm <span>mostafa ibrahim</span> <br/> FRONTEND REACT DEVELOPER </h2>
             <p className='my-5 text-white-50'>With a passion for creating intuitive and visually appealing web applications,
               I focus on building seamless user experiences with React, JavaScript, and modern web technologies.
                Whether it's turning complex requirements into sleek interfaces or optimizing code for better performance,
               I take pride in delivering high-quality, maintainable code</p>
              <a href='./Letter LCAIG31263.pdf' className='CV' download>Hire Me</a>
          </div>
        </div>
      </motion.div>
      <motion.div
      initial={{opacity:0,translateX:"100%"}}
      whileInView={{opacity:1,translateX:"0"}}
      transition={{duration:2}}
       className='mt-5 pt-5 '>
        <Mission/>

      </motion.div>
      <motion.div 
       initial={{opacity:0,translateX:"-100%"}}
       whileInView={{opacity:1,translateX:"0"}}
       transition={{duration:2}}
      className='mt-5 pt-5  mb-5'
      >
        <Projects/>
      </motion.div>

      <motion.div
      initial={{opacity:0,scale:0}}
      whileInView={{opacity:1,scale:1}}
      transition={{duration:2}}
       className='mt-5 pt-5 '>
        <MainInfo/>
      </motion.div>
      <motion.div
      initial={{opacity:0,translateX:"-100%"}}
      whileInView={{opacity:1,translateX:"0"}}
      transition={{duration:2}}
       className='mt-5 pt-5 '>
        <Contact/>
      </motion.div>
      </>
  )
}
