import React, { useState } from 'react'
import'./main.css'
import { Link } from 'react-router'
import MainText from '../MainText/MainText'
import { motion } from 'framer-motion';
export default function MainNav() {
    const[list,setList]=useState(false)


  return (
    <>
    
    <div className='mainNav d-flex justify-content-start align-items-center'>

    <div className='bar overflow-hidden'>
      <i className="fa-solid fa-bars-staggered fs-3"onClick={()=>{setList(!list)}}></i>
      </div>

     {list ? <>
     
        <motion.div
        initial={{opacity:0,scale:0}}
        whileInView={{opacity:1,scale:1}}
        transition={{duration:.5}}
           className="list w-75 d-flex  justify-content-start align-items-center " id='list'>
            <a href='https://www.facebook.com/profile.php?id=100005571829019' className='me-3  text-white ' target='_blank'><i className="fa-brands fa-facebook" ></i></a>
             
             <a href='https://www.instagram.com/moustafasherif21/'className='me-3 text-white   '><i className="fa-brands fa-instagram" target='_blank'></i></a>
         
             <a href='https://x.com/Mostafa53112372'className='me-3 text-white'><i className="fa-brands fa-twitter" target='_blank'></i></a>
         
             <a href='https://mail.google.com/mail/u/0/#inbox'className='me-3 text-white'><i className="fa-solid fa-envelope-circle-check" target='_blank'></i></a>

            
      </motion.div>
     </>:<>
     
     
     <MainText/>
     </>}
    </div>
  
  
  
  

  
  
  </>
  )
}

