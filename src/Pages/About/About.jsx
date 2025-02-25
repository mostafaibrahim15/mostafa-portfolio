import React from 'react'
import './about.css'
import moLogo from '../../assets/img/WhatsApp Image 2025-02-21 at 19.36.58_58f58688.jpg';
import {motion} from 'framer-motion'
import { Helmet } from 'react-helmet';
export default function About() {
  return (
    <>
     <Helmet>
        <title> About</title>
        <meta  name='description' content='About| which have whole portfolio information about me'/>
        
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
             <h2>I'm <span>mostafa Ibrahim</span> <br/> FRONTEND REACT DEVELOPER </h2>
             <p className='my-5 text-white-50'>With a passion for creating intuitive and visually appealing web applications,
               I focus on building seamless user experiences with React, JavaScript, and modern web technologies.
                Whether it's turning complex requirements into sleek interfaces or optimizing code for better performance,
               I take pride in delivering high-quality, maintainable code</p>
          </div>
        </div>
      </motion.div>
      <motion.div 
      initial={{opacity:0,scale:0}}
      whileInView={{opacity:1,scale:1}}
      transition={{duration:2}}
      className='mt-5 pt- mb-5 container'
      >
          <div>
            <h1 className='fs-1 text-danger mb-5'> About me</h1>
            <div className='d-flex flex-column  gy-3 flex-md-row  justify-content-around align-items-center'>
              <div>
              <ul className='list-unstyled'>
                <li className='mb-3'>
                  <h1 className='fs-5 text-white'><span className='text-danger fs-4 me-2'>name:</span>mostafa ibrahim abdlglil sherif</h1>
                </li>
                <li className='mb-3'>
                  <h1 className='fs-5 text-white'><span className='text-danger fs-4 me-2'>from:</span>egypt-elqalubia-banhha-biltan</h1>
                </li>
                <li className='mb-3'>
                  <h1 className='fs-5 text-white'><span className='text-danger fs-4 me-2'>age:</span>27</h1>
                </li>
               
                <li className='mb-3'>
                  <h1 className='fs-5 text-white'><span className='text-danger fs-4 me-2'>grade:</span>good</h1>
                </li>
              </ul>
              </div>
              <div>
              <ul className='list-unstyled'>
              <li className='mb-3'>
                  <h1 className='fs-5 text-white'><span className='text-danger fs-4 me-2'>Qualification:</span>computer science</h1>
                </li>
                <li className='mb-3'>
                  <h1 className='fs-5 text-white'><span className='text-danger fs-4 me-2'>military service:</span>Done</h1>
                </li>
                <li className='mb-3'>
                  <h1 className='fs-5 text-white'><span className='text-danger fs-4 me-2'>phone:</span>+20 010 16438479</h1>
                </li>
              </ul>
              </div>
            </div>
          </div>
      </motion.div>
    
      <motion.div 
      initial={{opacity:0,scale:0}}
      whileInView={{opacity:1,scale:1}}
      transition={{duration:2}}
      className='mt-5 pt-5 mb-5 container'
      >
          <div>
            <h1 className='fs-1 text-danger mb-5'> Personal skills</h1>
            <div className='d-flex flex-column  gy-3 flex-md-row  justify-content-around align-items-center'>
              <div>
              <ul className='list-unstyled'>
                <li className='mb-3'>
                  <h1 className='fs-5 text-white d-flex flex-row justify-content-start align-items-center'><span className='text-danger fs-4 me-2'>Languages:</span>
                  <ul className='list-unstyled ms-2'>
                    <li>
                      <h1 className='fs-5'>Arabic <span className='text-danger fs-6 fst-italic'>base</span></h1>
                    </li>
                    <li>
                      <h1 className='fs-5'>English <span className='text-danger fs-6 fst-italic'>very good</span></h1>
                    </li>
                  </ul>
                  </h1>
                </li>
                <li className='mb-3'>
                  <h1 className='fs-6 text-white'><span className='text-danger fs-5 me-2'>Communication Skills: </span>The ability to express thoughts clearly and listen actively to others. This includes verbal, non-verbal, and written communication</h1>
                </li>
                <li className='mb-3'>
                  <h1 className='fs-6 text-white'><span className='text-danger fs-5 me-2'>Teamwork : </span>Working collaboratively with others, contributing to group efforts, and supporting colleagues to achieve common goals</h1>
                </li>
                <li className='mb-3'>
                  <h1 className='fs-6 text-white'><span className='text-danger fs-5 me-2'>Problem-Solving : </span>The capacity to identify issues, think critically, and find solutions in various situations</h1>
                </li>
                <li className='mb-3'>
                  <h1 className='fs-6 text-white'><span className='text-danger fs-5 me-2'>Time Management : </span>Prioritizing tasks, staying organized, and managing time efficiently to meet deadlines and achieve objectives.</h1>
                </li>
                <li className='mb-3'>
                  <h1 className='fs-6 text-white'><span className='text-danger fs-5 me-2'>Adaptability : </span>Being open to change, learning new things, and adjusting to shifting environments or unexpected situations.</h1>
                </li>
              </ul>
              </div>
             
            </div>
          </div>
      </motion.div>
      <motion.div 
      initial={{opacity:0,scale:0}}
      whileInView={{opacity:1,scale:1}}
      transition={{duration:2}}
      className='mt-5 pt- mb-5 container'
      >
          <div>
            <h1 className='fs-1 text-danger mb-5'> Job skills</h1>
            <div className='d-flex flex-row  gy-3 flex-md-row  justify-content-around align-items-center'>
              <div>
              <ul className='list-unstyled'>
                <li className='mb-3'>
                  <h1 className='fs-5 text-white'>Html5</h1>
                </li>
                <li className='mb-3'>
                  <h1 className='fs-5 text-white'>Css3</h1>
                </li>
                <li className='mb-3'>
                  <h1 className='fs-5 text-white'>JavaScript</h1>
                </li>
                <li className='mb-3'>
                  <h1 className='fs-5 text-white'>React Js</h1>
                </li>
                <li className='mb-3'>
                  <h1 className='fs-5 text-white'>Next js</h1>
                </li>
              </ul>
              </div>
              <div>
              <ul className='list-unstyled'>
                <li className='mb-3'>
                  <h1 className='fs-5 text-white'>Bootstrap</h1>
                </li>
                <li className='mb-3'>
                  <h1 className='fs-5 text-white'>twilwindcss</h1>
                </li>
                <li className='mb-3'>
                  <h1 className='fs-5 text-white'>typescript</h1>
                </li>
                <li className='mb-3'>
                  <h1 className='fs-5 text-white'>redux toolkit</h1>
                </li>
              
              </ul>
              </div>
            </div>
          </div>
      </motion.div>
      <motion.div 
      initial={{opacity:0,scale:0}}
      whileInView={{opacity:1,scale:1}}
      transition={{duration:2}}
      className='mt-5 pt-5 mb-5 container'
      >
          <div>
            <h1 className='fs-1 text-danger mb-5'> Education  courses</h1>
            <div className='d-flex flex-column  gy-3 flex-md-row  justify-content-around align-items-center'>
              <div>
              <ul className='list-unstyled'>
                <li className='mb-3'>
                  <h1 className='fs-5 text-white d-flex flex-row justify-content-start align-items-center'><span className='text-danger fs-4 me-2'>online:</span>
                  <ul className='list-unstyled ms-2'>
                    <li>
                      <h1 className='fs-5'> <span className='text-white fs-6 fst-italic'>elzero school</span></h1>
                    </li>
                    <li>
                      <h1 className='fs-5'> <span className='text-white fs-6 fst-italic'>kimz code</span></h1>
                    </li>
                    <li>
                      <h1 className='fs-5'> <span className='text-white fs-6 fst-italic'>net ninja code</span></h1>
                    </li>
                    <li>
                      <h1 className='fs-5'> <span className='text-white fs-6 fst-italic'>abdlrahman gamal</span></h1>
                    </li>
                  </ul>
                  </h1>
                </li>
               
               <li className='mb-3'>
                  <h1 className='fs-5 text-white d-flex flex-row justify-content-start align-items-center'><span className='text-danger fs-4 me-2'>offline:</span>
                  <ul className='list-unstyled ms-2'>
                    <li>
                      <h1 className='fs-5'> <span className='text-white fs-6 fst-italic'>earasoft</span></h1>
                    </li>
                    <li>
                      <h1 className='fs-5'> <span className='text-white fs-6 fst-italic'>route academy</span></h1>
                    </li>
                   
                  </ul>
                  </h1>
                </li>
                </ul>
              </div>
             
            </div>
          </div>
      </motion.div>
    
    </>
  )
}
