import React from 'react'
import './mission.css'
import {motion} from 'framer-motion'
import { fadeIn } from '../../variants'

export default function Mission() {
  return (
    <>
    
        <div className="container mb-5 pb-5">
            <h1 className='header'>Skills</h1>
             <div className="container ">

                <div className="parent d-flex justify-content-between align-items-center flex-wrap mt-5">
                        <motion.div 
                        variants={fadeIn("up",0.2)}
                        initial="hidden"   
                        whileInView={"show"} 
                        viewport={{once:false,amount:0.7}}  
                        className='html me-3'>
                                <span className='barSkill d-flex justify-content-center align-items-center text-white '>
                                      95%  
                                </span>
                        <span className='barInfo'><i className="fa-brands fa-html5 me-3"></i>Html</span>
                        </motion.div>
                        <motion.div 
                        variants={fadeIn("up",0.2)}
                        initial="hidden"   
                        whileInView={"show"} 
                        viewport={{once:false,amount:0.7}}  
                        className='css me-3'>
                                <span className='barSkill d-flex justify-content-center align-items-center text-white '>
                                      95%  
                                </span>
                        <span className='barInfo'><i className="fa-brands fa-css3 me-3"></i>css</span>
                        </motion.div>
                        <motion.div 
                        variants={fadeIn("up",0.2)}
                        initial="hidden"   
                        whileInView={"show"} 
                        viewport={{once:false,amount:0.7}}  
                        className='bootstrap me-3'>
                                <span className='barSkill d-flex justify-content-center align-items-center text-white '>
                                      95%  
                                </span>
                        <span className='barInfo fs-6'><i className="fa-brands fa-bootstrap me-3"></i>Bootstrap</span>
                        </motion.div>
                        <motion.div 
                        variants={fadeIn("up",0.2)}
                        initial="hidden"   
                        whileInView={"show"} 
                        viewport={{once:false,amount:0.7}}  
                        className='javascript me-3'>
                                <span className='barSkill d-flex justify-content-center align-items-center text-white '>
                                      95%  
                                </span>
                        <span className='barInfo fs-6'><i className="fa-brands fa-js me-3"></i>JavaScript</span>
                        </motion.div>
                        <motion.div 
                        variants={fadeIn("up",0.2)}
                        initial="hidden"   
                        whileInView={"show"} 
                        viewport={{once:false,amount:0.7}}  
                        className='html me-3'>
                                <span className='barSkill d-flex justify-content-center align-items-center text-white '>
                                      75%  
                                </span>
                        <span className='barInfo fs-6'><i className="fa-brands fa-css3-alt"></i>Tailwindcss</span>
                        </motion.div>
                        <motion.div 
                        variants={fadeIn("up",0.2)}
                        initial="hidden"   
                        whileInView={"show"} 
                        viewport={{once:false,amount:0.7}}  
                        className='html me-3'>
                                <span className='barSkill d-flex justify-content-center align-items-center text-white '>
                                      95%  
                                </span>
                        <span className='barInfo'><i className="fa-brands fa-react me-3"></i>React</span>
                        </motion.div>
                        <motion.div 
                        variants={fadeIn("up",0.2)}
                        initial="hidden"   
                        whileInView={"show"} 
                        viewport={{once:false,amount:0.7}}  
                        className='html me-3'>
                                <span className='barSkill d-flex justify-content-center align-items-center text-white '>
                                      85%  
                                </span>
                        <span className='barInfo fs-6'><i className="fa-brands fa-square-js me-3"></i>TypeScript</span>
                        </motion.div>
                        <motion.div 
                        variants={fadeIn("up",0.2)}
                        initial="hidden"   
                        whileInView={"show"} 
                        viewport={{once:false,amount:0.7}}  
                        className='html me-3'>
                                <span className='barSkill d-flex justify-content-center align-items-center text-white '>
                                      95%  
                                </span>
                        <span className='barInfo fs-6'><i className="fa-brands fa-react me-3"></i>ReduxToolkit</span>
                        </motion.div>
                        <motion.div 
                        variants={fadeIn("up",0.2)}
                        initial="hidden"   
                        whileInView={"show"} 
                        viewport={{once:false,amount:0.7}}  
                        className='html me-3'>
                                <span className='barSkill d-flex justify-content-center align-items-center text-white '>
                                      85%  
                                </span>
                        <span className='barInfo fs-6'><i className="fa-brands fa-react me-3"></i>NextJS</span>
                        </motion.div>
                     
                       
                </div>
                    
                    
                </div>

            </div>
           
        
    
    
    
    </>
  )
}








