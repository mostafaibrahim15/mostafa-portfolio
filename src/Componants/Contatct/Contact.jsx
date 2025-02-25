import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"
import '@fontsource/kalam';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { motion } from 'framer-motion';
import toast, { Toaster } from "react-hot-toast";
import { Link } from 'react-router';

export default function Contact() {
    const form = useRef();

   
    
    const phoneRegex= /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

   function sendData(e){
    let toastId = toast.loading("sending message ....")
    emailjs
    .sendForm('service_m85onnh', 'template_ysr5f4b', form.current, {
      publicKey: 'olYbo1KJeC6RxCyFM',
    })
    try {
       setTimeout(()=>{
        toast.success('mail sent successfully')
        
       },4000)
       setTimeout(()=>{
        {window.location.reload();}
        
       },6000)
    
       
    } catch (error) {
        setTimeout(()=>{
            toast.error('error!!!')
           },4000)
    }finally{
        setTimeout(()=>{toast.dismiss(toastId)},3000)
    }
   
   
   }

 

   
  const validationSchema = object({
    name:string().required("note name is reuaired to send message").min(3,"name char must be at least 3 char"),
    email:string().required("email is requiered to send message").email("your email is not valid retray again !!"),
    message:string().required("please type any meesage to send "),
    phone:string().required('your phone is required to send meessage').matches(phoneRegex,"your phone number is not correct")
  })
        const formik= useFormik({
            initialValues:{
                "name":"",
                "email": "",
                "message":"",
                "phone":""
            },
            validationSchema,
            onSubmit:sendData,
            
            
        })



  return (
    <>
    <div className="container mb-5 pb-5">
        <h1 className='header  '>Contact</h1>
        <div className='w-100 ps-sm-0 ps-md-2 ps-lg-4'>
            <form className=' ps-sm-0 ps-md-2 ps-lg-4 mt-5 pt-3' onSubmit={
                    formik.handleSubmit
                 } ref={form} >
                <div className='text mb-3 d-flex flex-column justify-content-start align-items-start'>
                <input type='text' className='mb-3 p-2 ' placeholder='Type your FullName' value={formik.values.name} onChange={formik.handleChange} name='name'/>
               {formik.errors.name && formik.touched.name&& 
                <motion.span 
                    initial={{opacity:0,scale:0}}
                    whileInView={{opacity:1,scale:1}}
                    transition={{duration:1}}
                className=' error '>{formik.errors.name}
                </motion.span>}
                </div>
                <div className='email mb-3 d-flex flex-column justify-content-start align-items-start'>
                <input type='email' className=' mb-3 p-2 ' placeholder='Type your email' value={formik.values.email} onChange={formik.handleChange} name='email'/>
                {formik.errors.email && formik.touched.email&& 
                <motion.span
                initial={{opacity:0,scale:0}}
                whileInView={{opacity:1,scale:1}}
                transition={{duration:1}}
                 className=' error '>{formik.errors.email}
                 </motion.span>}
                </div>
                <div className='message mb-3 d-flex flex-column justify-content-start align-items-start'>
                <input type='text' className=' mb-3 p-2 ' placeholder='Type your meesage' value={formik.values.message} onChange={formik.handleChange}name='message'/>
                {formik.errors.message && formik.touched.message&& 
                <motion.span
                initial={{opacity:0,scale:0}}
                whileInView={{opacity:1,scale:1}}
                transition={{duration:1}}
                 className=' error '>{formik.errors.message}
                 </motion.span>}
                </div>
                <div className='phone mb-3 d-flex flex-column justify-content-start align-items-start '>
                <input type='tel' className=' mb-3 p-2 ' placeholder='Type your phone number'value={formik.values.phone} onChange={formik.handleChange} name='phone'/>
                {formik.errors.phone  && formik.touched.phone && 
                <motion.span 
                initial={{opacity:0,scale:0}}
                whileInView={{opacity:1,scale:1}}
                transition={{duration:1}}
                className=' error '>{formik.errors.phone }
                </motion.span>}
                </div>
                <div className='send '>
                    <button type='submit'className='btn btn-danger '>Send</button>
                </div>
            </form>
        </div>
    </div>
    
    <div><Toaster  position="top-center"
        reverseOrder={true}/></div>
    </>
  )
}
