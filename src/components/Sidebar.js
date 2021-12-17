import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
  return (
    <aside
      className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark"
      id="sidenav-main"
    >
      <div className="sidenav-header">
        <FontAwesomeIcon 
          icon={faTimes} 
          className="end-3 top-1 cursor-pointer text-white opacity-4 position-absolute d-none d-xl-none"
          aria-hidden="true"
          id="iconSidenav"
        />
        <Link href="/admin">
          <a className="navbar-brand m-0" >
            <Image
              src="/images/logo-1.png"
              className="navbar-brand-img h-100"
              width={30}
              height={30}
              alt="main_logo"
            />
            <span className="ms-1 font-weight-bold text-white">
              PPID Bawaslu
            </span>
          </a>
        </Link>
      </div>
      <hr className="horizontal light mt-0 mb-2" />
      <div
        className="collapse navbar-collapse  w-auto "
        id="sidenav-collapse-main"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/admin">
              <a className="nav-link text-white active bg-gradient-primary">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">dashboard</i>
                </div>
                <span className="nav-link-text ms-1">Dashboard</span>
              </a>
            </Link>
          </li>
          <li className="nav-item mt-3">
            <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">
              Testing
            </h6>
          </li>
          <li className="nav-item">
            <Link href="/admin/coba">
              <a className="nav-link text-white">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">table_view</i>
                </div>
                <span className="nav-link-text ms-1">Coba</span>
              </a>
            </Link>
          </li>
          <li className="nav-item mt-3">
            <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">
              Setting
            </h6>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white " href="../pages/profile.html">
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="material-icons opacity-10">person</i>
              </div>
              <span className="nav-link-text ms-1">Profile</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white " href="../pages/profile.html">
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="material-icons opacity-10">person</i>
              </div>
              <span className="nav-link-text ms-1">Profile</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white " href="../pages/profile.html">
              <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="material-icons opacity-10">person</i>
              </div>
              <span className="nav-link-text ms-1">Profile</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="sidenav-footer position-absolute w-100 bottom-0 ">
        <div className="mx-3">
          <a
            className="btn bg-gradient-primary mt-4 w-100"
            href="https://bawaslu.go.id/"
            type="button"
          >
            BAWASLU REPUBLIK INDONESIA
          </a>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
