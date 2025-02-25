import React from 'react'
import Card from '../../Componants/Card/Card'
import { Helmet } from 'react-helmet'
export default function Projects() {

  const fullData =[
    {
      id:1,
      url:"https://github.com/mostafaibrahim15/weater-js.git",
      img:"https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?s=612x612&w=0&k=20&c=ysEsVw3q2axYt3oVZAuQjtHRlN3lY-U_e0ikK5yKIXQ=",
      title:"Weather web",
      discription:"Could you clarify what you mean by weather web description?"
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
      url:"https://github.com/mostafaibrahim15/jquery.git",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuqx9Rsh81cJ0iXxsd2fwt8ajZ-zmrhPmDOg&s",
      title:"JQuery",
      discription:"simple project just trainingto study jquery"
    },
    {
      id:4,
      img:"https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?s=612x612&w=0&k=20&c=ysEsVw3q2axYt3oVZAuQjtHRlN3lY-U_e0ikK5yKIXQ=",
      title:"in progress",
      discription:"It looks like you might be asking about e-commerce!"
    },
    {
      id:5,
      img:"https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?s=612x612&w=0&k=20&c=ysEsVw3q2axYt3oVZAuQjtHRlN3lY-U_e0ikK5yKIXQ=",
      title:"in progress"
    },
    {
      id:6,
      img:"https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?s=612x612&w=0&k=20&c=ysEsVw3q2axYt3oVZAuQjtHRlN3lY-U_e0ikK5yKIXQ=",
      title:"in progress"
    },
   
   
]
  return (
    <>
   <Helmet>
    <title>PROJECTS</title>
   </Helmet>
    <div className="container mt-5 m-auto">
      <div className="row ms-4 g-3">
        {fullData.map((data)=>(<>
          <div key={data.id}
            className="col-9 col-sm-9 col-md-6 col-lg-4 d-flex flex-column flex-sm-column flex-md-column justify-content-center align-items-center project me-md-5 me-lg-2 py-4">
            <article >

                <div className="article-wrapper">
                <figure>
                    <img src={data.img} alt="projectImage" />
                </figure>
                <div className="article-body">
                    <a href={data.url}>{data.title}</a>
                    <p className='text-white-50'>
                        {data.discription}
                    </p>
                </div>
                </div>
                </article>
             </div> 
        </>))}
      </div>
    </div>
    
    
    </>
  )
}
