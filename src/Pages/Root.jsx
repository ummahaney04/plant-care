import React from 'react'
import Navbar from '../components/Navbar'
import Home from './Home'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

export default function Root() {
  return (
    <div>
      <Navbar></Navbar>
       <Outlet></Outlet>
       <Footer></Footer>
    </div>
  )
}
