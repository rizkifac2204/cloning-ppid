import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import PerfectScrollbar from "react-perfect-scrollbar";

function Sidebar(props) {
  function textColor() {
    return props.sideNav === "bg-gradient-dark" ? "text-white" : "text-dark";
  }
  const router = useRouter();
  function activeLink(link) {
    if (link === router.pathname) {
      return `text-white active bg-gradient-` + props.sideColor;
    } else {
      return textColor();
    }
  }
  return (
    <aside
      className={`sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 ${props.sideNav}`}
      id="sidenav-main"
    >
      <div className="sidenav-header">
        <i
          className={`fa fa-times end-3 top-1 cursor-pointer opacity-5 position-absolute d-xl-none ${textColor()}`}
          aria-hidden="true"
          id="iconSidenav"
        ></i>
        <Link href="/admin">
          <a className="navbar-brand m-0">
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
        <PerfectScrollbar>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/admin">
                <a className={`nav-link ${activeLink("/admin")}`}>
                  <div
                    className={`text-center me-2 d-flex align-items-center justify-content-center`}
                  >
                    <i className="fa fa-dashboard"></i>
                  </div>
                  <span className="nav-link-text ms-1">Dashboard</span>
                </a>
              </Link>
            </li>
            <li className="nav-item mt-3">
              <h6
                className={`ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-8 ${textColor()}`}
              >
                General
              </h6>
            </li>

            <li className="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#permohonanCollapse"
                className={`nav-link ${textColor()}`}
                aria-controls="permohonanCollapse"
                role="button"
                aria-expanded="false"
              >
                <div className="text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="fa fa-clone"></i>
                </div>
                <span className="nav-link-text ms-1">Data Permohonan</span>
              </a>
              <div className={`collapse ps-2`} id="permohonanCollapse">
                <ul className="nav">
                  <li className="nav-item">
                    <Link href="/admin/permohonan/online">
                      <a
                        className={`nav-link py-1 ${activeLink(
                          "/admin/permohonan/online"
                        )}`}
                      >
                        <span className="sidenav-normal ps-1">Online</span>
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/admin/permohonan/offline">
                      <a
                        className={`nav-link py-1 ${activeLink(
                          "/admin/permohonan/offline"
                        )}`}
                      >
                        <span className="sidenav-normal ps-1">Offline</span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#surveyCollapse"
                className={`nav-link ${textColor()}`}
                aria-controls="surveyCollapse"
                role="button"
                aria-expanded="false"
              >
                <div className="text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="fa fa-poll"></i>
                </div>
                <span className="nav-link-text ms-1">Survey</span>
              </a>
              <div className={`collapse ps-2`} id="surveyCollapse">
                <ul className="nav">
                  <li className="nav-item">
                    <Link href="/admin/surveys">
                      <a
                        className={`nav-link py-1 ${activeLink(
                          "/admin/surveys"
                        )}`}
                      >
                        <span className="sidenav-normal ps-1">Data</span>
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/admin/surveys/chart">
                      <a
                        className={`nav-link py-1 ${activeLink(
                          "/admin/surveys/chart"
                        )}`}
                      >
                        <span className="sidenav-normal ps-1">Diagram</span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <Link href="/admin/keberatan">
                <a className={`nav-link ${activeLink("/admin/keberatan")}`}>
                  <div className="text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="fa fa-hand-pointer"></i>
                  </div>
                  <span className="nav-link-text ms-1">Keberatan</span>
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#sahabatCollapse"
                className={`nav-link ${textColor()}`}
                aria-controls="sahabatCollapse"
                role="button"
                aria-expanded="false"
              >
                <div className="text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="fa fa-clone"></i>
                </div>
                <span className="nav-link-text ms-1">Sahabat Bawaslu</span>
              </a>
              <div className={`collapse ps-2`} id="sahabatCollapse">
                <ul className="nav">
                  <li className="nav-item">
                    <Link href="/admin/sahabat">
                      <a
                        className={`nav-link py-1 ${activeLink(
                          "/admin/sahabat"
                        )}`}
                      >
                        <span className="sidenav-normal ps-1">Online</span>
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/admin/sahabat/email/create">
                      <a
                        className={`nav-link py-1 ${activeLink(
                          "/admin/sahabat/email/create"
                        )}`}
                      >
                        <span className="sidenav-normal ps-1">Buat Email</span>
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/admin/sahabat/email/draft">
                      <a
                        className={`nav-link py-1 ${activeLink(
                          "/admin/sahabat/email/draft"
                        )}`}
                      >
                        <span className="sidenav-normal ps-1">Draft</span>
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/admin/sahabat/email">
                      <a
                        className={`nav-link py-1 ${activeLink(
                          "/admin/sahabat/email"
                        )}`}
                      >
                        <span className="sidenav-normal ps-1">Terkirim</span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </PerfectScrollbar>
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
  );
}

export default Sidebar;
