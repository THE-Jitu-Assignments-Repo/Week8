import React from 'react'
import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom'


function Layout() {
  
  return (
    <>
    <div>
      <Header />
          <Outlet />
    </div>
    <div className='footer--container'>
      <Footer />

    </div>
    </>
  )
}

export default Layout