import React from 'react'
import './card.css'
export default function Card(projectInfo,fullData) {
 const {projectsCard}=projectInfo.projectInfo

  return (
    <>
        {projectsCard.map((project)=>(<>
           
            <div key={project.id}
            className="col-9 col-sm-9 col-md-6 col-lg-4 d-flex flex-column flex-sm-column flex-md-column justify-content-center align-items-center project me-md-5 me-lg-2 py-4">
            <article >

                <div className="article-wrapper">
                <figure>
                    <img src={project.img} alt="projectImage" />
                </figure>
                <div className="article-body">
                    <a href={project.url}>{project.title}</a>
                    <p className='text-white-50'>
                        {project.discription}
                    </p>
                </div>
                </div>
                </article>
             </div> 
        
        
        
        </>))}
        
                
    
    
    </>
  ) 
}
