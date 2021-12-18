import Image from "next/image"
import { useRouter } from "next/router"
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faHome, faCoffee } from '@fortawesome/free-solid-svg-icons'

function Sidebar(props) {
  function textColor(){
    return (props.sideNav === 'bg-gradient-dark') ? 'text-white' : 'text-dark'
  }
  const router = useRouter()
  function activeLink(link){
    if(link === router.pathname){
      return `text-white active bg-gradient-` + props.sideColor
    } else {
      return textColor()
    }
  }
  return (
    <aside
      className={`sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 ${props.sideNav}`}
      id="sidenav-main"
    >
      <div className="sidenav-header">
        <FontAwesomeIcon 
          icon={faTimes} 
          className={`end-3 top-1 cursor-pointer opacity-4 position-absolute d-none d-xl-none ${textColor()}`}
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
            <span className={`ms-1 font-weight-bold ${textColor()}`}>
              PPID Bawaslu
            </span>
          </a>
        </Link>
      </div>
      <hr className="horizontal light mt-0 mb-2" />
      <div className="collapse navbar-collapse w-auto">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/admin">
              <a className={`nav-link ${activeLink('/admin')}`}>
                <div className={`text-center me-2 d-flex align-items-center justify-content-center`}>
                  <FontAwesomeIcon icon={faHome} />
                </div>
                <span className="nav-link-text ms-1">Dashboard</span>
              </a>
            </Link>
          </li>
          <li className="nav-item mt-3">
            <h6 className={`ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-8 ${textColor()}`}>
              Testing
            </h6>
          </li>
          <li className="nav-item">
            <Link href="/admin/coba">
              <a className={`nav-link ${activeLink('/admin/coba')}`}>
                <div className="text-center me-2 d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon icon={faCoffee} />
                </div>
                <span className="nav-link-text ms-1">Coba</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/admin/coba">
              <a className={`nav-link ${activeLink('/admin/lagi')}`}>
                <div className="text-center me-2 d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon icon={faCoffee} />
                </div>
                <span className="nav-link-text ms-1">lagi</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidenav-footer position-absolute w-100 bottom-0 ">
        <div className="mx-3">
          <a
            className={`btn mt-4 w-100 bg-gradient-${props.sideColor}`}
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