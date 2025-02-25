import React from 'react'
import './mainInfo.css'
import '@fontsource/kalam';
export default function MainInfo() {
  return (
    <>
    <div className="container mb-5 pb-5">
    <h1 className='header'>Info</h1>
    <div className="container mt-3 ps-3">
        <div className="row gap-1 mt-5 ">
            <div className='d-flex flex-row justify-content-start align-items-center'>
                <div className=" col-sm-12 col-md-9 me-3 ">

                    <div className='ms-2 ps-3 stat'>
                        <h1><span>Name : </span> MOSTAFA IBRAHIM  ABDLGLIL SHERIF</h1>
                        <h2><span>Number : </span>+20 010 16438479</h2>
                        <h3><span> WhatsApp : </span>+20 010 16438479</h3>
                        <h4><span> Gmail : </span>mibrahimabdlglil@gmail.com</h4>
                    </div>

                </div>
                
            </div>
        </div>
    </div>
    </div>
    
    
    </>
  )
}
