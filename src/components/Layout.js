import Script from 'next/script'

import Sidebar from './Sidebar'
import Header from './Header'
import Setting from './Setting'
import Footer from './Footer'

export default function Layout({Component, children}) {
  return (
    <>

      <Sidebar />
      
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">   
        <Header header={children.type.header} />
        <div className="container-fluid py-4">
          {children}
        </div>
        <Footer />
      </main>
      
      <Setting />

      <Script src="/assets/js/plugins/perfect-scrollbar.min.js" />
      <Script src="/assets/js/plugins/smooth-scrollbar.min.js" />
      <Script src="https://buttons.github.io/buttons.js" />
      <Script src="/assets/js/material-dashboard.min.js?v=3.0.0" />
    </>
  )
}