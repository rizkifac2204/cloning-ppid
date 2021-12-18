import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faTimes } from '@fortawesome/free-solid-svg-icons'
import {useState, useEffect} from 'react'

function Setting(props) {
  const [isShow, setIsShow] = useState(false)
  return (
    <div className={`fixed-plugin ${isShow && 'show'}`}>
      <a className="fixed-plugin-button text-dark position-fixed px-3 py-2">
        <FontAwesomeIcon icon={faCog} onClick={() => setIsShow(true)} />
      </a>
      <div className="card shadow-lg">
        <div className="card-header pb-0 pt-3">
          <div className="float-start">
            <h5 className="mt-3 mb-0">Setting</h5>
            <p>Pengaturan Profile dan Tampilan</p>
          </div>
          {/* Toggle Button  */}
          <div className="float-end mt-4">
            <button className="btn btn-link text-dark p-0 fixed-plugin-close-button" onClick={() => setIsShow(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          {/* End Toggle Button */}
        </div>
        <hr className="horizontal dark my-1" />
        <div className="card-body pt-sm-3 pt-0">
          {/* Sidebar Backgrounds */}
          <div>
            <h6 className="mb-0">Sidebar Colors</h6>
          </div>
          <a
            href="#"
            className="switch-trigger background-color"
          >
            <div className="badge-colors my-2 text-start">
              <span
                className="badge filter bg-gradient-primary"
                onClick={()=>props.hanldeChangeSideColor('primary')}
              />
              <span
                className="badge filter bg-gradient-dark"
                onClick={()=>props.hanldeChangeSideColor('dark')}
              />
              <span
                className="badge filter bg-gradient-info"
                onClick={()=>props.hanldeChangeSideColor('info')}
              />
              <span
                className="badge filter bg-gradient-success"
                onClick={()=>props.hanldeChangeSideColor('success')}
              />
              <span
                className="badge filter bg-gradient-warning"
                onClick={()=>props.hanldeChangeSideColor('warning')}
              />
              <span
                className="badge filter bg-gradient-danger"
                onClick={()=>props.hanldeChangeSideColor('danger')}
              />
            </div>
          </a>

          {/* Sidenav Type */}
          <div className="mt-3">
            <h6 className="mb-0">Sidenav Type</h6>
            <p className="text-sm">Choose between 2 different sidenav types.</p>
          </div>
          <div className="d-flex">
            <button
              className="btn bg-gradient-dark px-3 mb-2 active"
              onClick={()=>props.hanldeChangeSideNav("bg-gradient-dark")}
            >
              Dark
            </button>
            <button
              className="btn bg-gradient-dark px-3 mb-2 ms-2"
              onClick={()=>props.hanldeChangeSideNav("bg-transparent")}
            >
              Transparent
            </button>
            <button
              className="btn bg-gradient-dark px-3 mb-2 ms-2"
              onClick={()=>props.hanldeChangeSideNav("bg-white")}
            >
              White
            </button>
          </div>
          <p className="text-sm d-xl-none d-block mt-2">
            You can change the sidenav type just on desktop view.
          </p>
          {/* Navbar Fixed */}
          <div className="mt-3 d-flex">
            <h6 className="mb-0">Navbar Fixed</h6>
            <div className="form-check form-switch ps-0 ms-auto my-auto">
              <input
                className="form-check-input mt-1 ms-auto"
                type="checkbox"
                id="navbarFixed"
                onClick={()=>(console.log('ok'))}
              />
            </div>
          </div>
          <hr className="horizontal dark my-3" />
          <div className="mt-2 d-flex">
            <h6 className="mb-0">Light / Dark</h6>
            <div className="form-check form-switch ps-0 ms-auto my-auto">
              <input
                className="form-check-input mt-1 ms-auto"
                type="checkbox"
                id="dark-version"
                onClick={()=>(console.log('ok'))}
              />
            </div>
          </div>
          <hr className="horizontal dark my-sm-4" />
          <a className="btn btn-outline-dark w-100" href="#">
            View documentation
          </a>
          <div className="w-100 text-center">
            <a
              className="github-button"
              href="https://github.com/creativetimofficial/material-dashboard"
              data-icon="octicon-star"
              data-size="large"
              data-show-count="true"
              aria-label="Star creativetimofficial/material-dashboard on GitHub"
            >
              Star
            </a>
            <h6 className="mt-3">Thank you for sharing!</h6>
            <a
              href="https://twitter.com/intent/tweet?text=Check%20Material%20UI%20Dashboard%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23bootstrap5&url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fsoft-ui-dashboard"
              className="btn btn-dark mb-0 me-2"
              target="_blank"
            >
              <i className="fab fa-twitter me-1" aria-hidden="true" /> Tweet
            </a>
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-dashboard"
              className="btn btn-dark mb-0 me-2"
              target="_blank"
            >
              <i className="fab fa-facebook-square me-1" aria-hidden="true" />{" "}
              Share
            </a>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Setting
