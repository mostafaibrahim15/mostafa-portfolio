import React from 'react'
import './Layout.css'
import Nav from '../Nav/Nav'
import { Outlet } from 'react-router'

export default function Layout() {
  return (
   <>
   
  <Nav/>
   <Outlet></Outlet>
   <div className='whatsapp'>
      <a href='https://wa.me/+2001016438479' className='text-decoration-none'><i class="fa-brands fa-whatsapp"></i></a>
   </div>
   </>
  )
}
