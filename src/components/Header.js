import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'

const listBreadCrumb = (breadcrumb) => {
  return (
    breadcrumb.map((item, idx) => {
      if(idx + 1 !== breadcrumb.length){
        return(
          <li key={idx} className="breadcrumb-item text-sm">
            <Link href={item.url}>
              <a className="opacity-5 text-dark">
                {item.text}
              </a>
            </Link>
          </li>
        )
      } else {
        return(
          <li key={idx} className="breadcrumb-item text-sm text-dark active">
            {item.text}
          </li>
        )
      }
    })
  )
}

function Header({header}) {
  const [breadcrumb, setbreadcrumb] = useState([])
  const [title, settitle] = useState('Empty')
  useEffect(()=>{
    setbreadcrumb(header.breadcrumb ? header.breadcrumb : [{ url:'/admin', text:'Home' }])
    settitle(header.title ? header.title : "empty")
  },[header])

  return (
    <nav
      className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
      id="navbarBlur"
      navbar-scroll="true"
    >
      <div className="container-fluid py-1 px-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
            {listBreadCrumb(breadcrumb)}
          </ol>
          <h6 className="font-weight-bolder mb-0">{title}</h6>
        </nav>
        <div
          className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
          id="navbar"
        >
          <div className="ms-md-auto pe-md-3 d-flex align-items-center">
            <div className="input-group input-group-outline">
              <label className="form-label">Cari</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <ul className="navbar-nav  justify-content-end">
            <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
              <a
                className="nav-link text-body p-0"
                id="iconNavbarSidenav"
              >
                <div className="sidenav-toggler-inner">
                  <i className="sidenav-toggler-line" />
                  <i className="sidenav-toggler-line" />
                  <i className="sidenav-toggler-line" />
                </div>
              </a>
            </li>
            <li className="nav-item dropdown px-3 d-flex align-items-center">
              <a
                className="nav-link text-body p-0"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                <FontAwesomeIcon icon={faBell} />
              </a>
              <ul
                className="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4"
                aria-labelledby="dropdownMenuButton"
              >
                <li className="mb-2">
                  <a
                    className="dropdown-item border-radius-md"
                    href="#"
                  >
                    <div className="d-flex py-1">
                      <div className="my-auto">
                        <img
                          src="/assets/img/small-logos/logo-spotify.svg"
                          className="avatar avatar-sm bg-gradient-dark  me-3 "
                        />
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="text-sm font-weight-normal mb-1">
                          <span className="font-weight-bold">Lainnya</span> Data
                        </h6>
                        <p className="text-xs text-secondary mb-0">
                          <i className="fa fa-clock me-1" />1 day
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item border-radius-md"
                  >
                    <div className="d-flex py-1">
                      <div className="my-auto">
                        <img
                          src="/assets/img/small-logos/logo-spotify.svg"
                          className="avatar avatar-sm bg-gradient-dark  me-3 "
                        />
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="text-sm font-weight-normal mb-1">
                          Pemberitahuan / chat / lainnya
                        </h6>
                        <p className="text-xs text-secondary mb-0">
                          <i className="fa fa-clock me-1" />2 days
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
