import { useState, useEffect } from 'react'
import { useRouter } from "next/router"
import Script from 'next/script'
// scrollbarr 
import PerfectScrollbar from 'react-perfect-scrollbar'
// Components 
import Sidebar from './Sidebar'
import Header from './Header'
import Setting from './Setting'
import Footer from './Footer'

export default function Layout({children}) {
  const [sideNav, setSideNav] = useState('bg-gradient-dark')
  const [sideColor, setSideColor] = useState('primary')
  const [settingShow, setSettingShow] = useState(false)
  const router = useRouter()

  const hanldeChangeSideNav = color => setSideNav(color)
  const hanldeChangeSideColor = color => setSideColor(color)
  const hanldeSettingShow = bool => setSettingShow(bool)

  useEffect(() => {
    const handleRouteChange = () => {
      document.body.classList.remove('g-sidenav-pinned')
      setSettingShow(false)
    }
    router.events.on('routeChangeStart', handleRouteChange)
    return () => router.events.off('routeChangeStart', handleRouteChange)
  }, [])

  return (
    <>
    
      <Sidebar 
        sideNav={sideNav}
        sideColor={sideColor}
      />
      
      <PerfectScrollbar className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">  
        <Header 
          header={children.type.header} 
        />
        <div className="container-fluid py-4">
          {children}
        </div>
        <Footer />
      </PerfectScrollbar>
      
      <Setting 
        hanldeChangeSideNav={hanldeChangeSideNav}
        hanldeChangeSideColor={hanldeChangeSideColor}
        hanldeSettingShow={hanldeSettingShow}
        settingShow={settingShow}
      />

      {/* <Script src="/assets/js/plugins/perfect-scrollbar.min.js" />
      <Script src="/assets/js/plugins/smooth-scrollbar.min.js" /> */}
      {/* <Script src="https://buttons.github.io/buttons.js" /> */}
      {/* <Script src="/assets/js/material-dashboard.js?v=3.0.0" /> */}
    </>
  )
}