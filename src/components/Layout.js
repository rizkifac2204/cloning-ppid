import { useState } from 'react'
import { useRouter } from "next/router"
import Script from 'next/script'
import Sidebar from './Sidebar'
import Header from './Header'
import Setting from './Setting'
import Footer from './Footer'

export default function Layout({children}) {
  const [sideNav, setSideNav] = useState('bg-white')
  const [sideColor, setSideColor] = useState('primary')
  const router = useRouter()

  const hanldeChangeSideNav = (color) =>{
    setSideNav(color)
  }
  const hanldeChangeSideColor = (color) =>{
    setSideColor(color)
  }

  return (
    <>

      <Sidebar 
        sideNav={sideNav}
        sideColor={sideColor}
      />
      
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">   
        <Header header={children.type.header} />
        <div className="container-fluid py-4">
          {children}
        </div>
        <Footer />
      </main>
      
      <Setting 
        hanldeChangeSideNav={hanldeChangeSideNav}
        hanldeChangeSideColor={hanldeChangeSideColor}
      />

      <Script src="/assets/js/plugins/perfect-scrollbar.min.js" />
      <Script src="/assets/js/plugins/smooth-scrollbar.min.js" />
      <Script src="https://buttons.github.io/buttons.js" />
      {/* <Script src="/assets/js/material-dashboard.js?v=3.0.0" /> */}
    </>
  )
}