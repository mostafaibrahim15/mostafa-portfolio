import React from 'react'
import './Project.css'
import Card from '../Card/Card'
import {motion}from 'framer-motion'
import {fadeIn} from '../../variants'

export default function Projects() {
const projects = 
    {
      projectsCard:[
        {
          id:1,
          url:"https://github.com/mostafaibrahim15/jquery.git",
          img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuqx9Rsh81cJ0iXxsd2fwt8ajZ-zmrhPmDOg&s",
          title:"JQuery",
          discription:"simple project just trainingto study jquery"
        },
        
        {
          id:2,
          url:"https://github.com/mostafaibrahim15/event-project.git",
          img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5E0A0fNBqFl8U3r82VsbzocPZioyMEjtUFA&s",
          title:"Events website",
          discription:"Could you clarify what you're looking for in terms of an event website description?"
        },
       
        {
          id:3,
          url:"https://github.com/mostafaibrahim15/weater-js.git",
          img:"https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?s=612x612&w=0&k=20&c=ysEsVw3q2axYt3oVZAuQjtHRlN3lY-U_e0ikK5yKIXQ=",
          title:"Weather web",
          discription:"Could you clarify what you mean by weather web description?"
        },
       

      ]
       

    }

  return (
    <>
       <div className='container'>
       <h1 className='header'>Projects</h1>
        <div className="container  mt-4">
            <div className="row ms-1 g-5 d-flex justify-content-center align-items-center pt-5">
                    <Card projectInfo={projects} />   
            </div>
        </div>

       </div>
    
    
    
    </>
  )
}
