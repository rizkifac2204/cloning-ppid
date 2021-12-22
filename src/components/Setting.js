import Link from "next/link";
import { signOut } from "next-auth/react";

function Setting(props) {
  return (
    <div
      className={`fixed-plugin ${props.settingShow && "show"}`}
      id="fixedSetting"
    >
      <a
        className="fixed-plugin-button text-dark position-fixed px-3 py-2"
        onClick={() => props.hanldeSettingShow(true)}
      >
        <i className="fa fa-cog"></i>
      </a>
      <div className="card shadow-lg">
        <div className="card-header pb-0 pt-3">
          {/* Text Keterangan */}
          <div className="float-start">
            <h5 className="mt-3 mb-0">Setting</h5>
            <p>Pengaturan Profile dan Tampilan</p>
          </div>
          {/* Toggle Button  */}
          <div className="float-end mt-4">
            <button
              className="btn btn-link text-dark p-0 fixed-plugin-close-button"
              onClick={() => props.hanldeSettingShow(false)}
            >
              <i className="fa fa-times"></i>
            </button>
          </div>
        </div>
        <hr className="horizontal dark my-2" />
        <div className="card-body pt-sm-3 pt-0">
          <div className="mt-0">
            <h6 className="mb-2">Profile</h6>
          </div>
          <div className="d-flex flex-column">
            <Link href="/admin/profile">
              <a className="btn bg-gradient-dark px-3 mb-2">Profile</a>
            </Link>
            <Link href="/admin/profile/edit">
              <a className="btn bg-gradient-dark px-3 mb-2">Ganti Data Diri</a>
            </Link>
            <button
              className="btn bg-gradient-dark px-3 mb-0"
              onClick={() => signOut()}
            >
              <i className="fa fa-sign-out-alt"></i> Log Out
            </button>
          </div>
          <hr className="horizontal dark" />
        </div>
        <hr className="horizontal dark my-0" />
        <div className="card-body pt-0">
          {/* Sidebar Backgrounds */}
          <div>
            <h6 className="mb-0">Warna Menu</h6>
            <a className="switch-trigger background-color">
              <div className="badge-colors my-2 text-start">
                <span
                  className="badge filter bg-gradient-primary"
                  onClick={() => props.hanldeChangeSideColor("primary")}
                />
                <span
                  className="badge filter bg-gradient-dark"
                  onClick={() => props.hanldeChangeSideColor("dark")}
                />
                <span
                  className="badge filter bg-gradient-info"
                  onClick={() => props.hanldeChangeSideColor("info")}
                />
                <span
                  className="badge filter bg-gradient-success"
                  onClick={() => props.hanldeChangeSideColor("success")}
                />
                <span
                  className="badge filter bg-gradient-warning"
                  onClick={() => props.hanldeChangeSideColor("warning")}
                />
                <span
                  className="badge filter bg-gradient-danger"
                  onClick={() => props.hanldeChangeSideColor("danger")}
                />
              </div>
            </a>
          </div>
          {/* Sidenav Type */}
          <div className="mt-2">
            <h6 className="mb-2">Type Menu</h6>
          </div>
          <div className="d-flex">
            <button
              className={`btn bg-gradient-dark px-3 mb-2 ${
                props.sideNav === "bg-gradient-dark" ? "active" : ""
              }`}
              onClick={() => props.hanldeChangeSideNav("bg-gradient-dark")}
            >
              Dark
            </button>
            <button
              className={`btn bg-gradient-dark px-3 mb-2 ms-2 ${
                props.sideNav === "bg-transparent" ? "active" : ""
              }`}
              onClick={() => props.hanldeChangeSideNav("bg-transparent")}
            >
              Transparent
            </button>
            <button
              className={`btn bg-gradient-dark px-3 mb-2 ms-2 ${
                props.sideNav === "bg-white" ? "active" : ""
              }`}
              onClick={() => props.hanldeChangeSideNav("bg-white")}
            >
              White
            </button>
          </div>
          {/* dark theme */}
          <div className="d-flex mt-3">
            <h6 className="mb-0">Light / Dark {props.darkTheme}</h6>
            <div className="form-check form-switch ps-0 ms-auto my-auto">
              <input
                className="form-check-input mt-1 ms-auto"
                type="checkbox"
                id="dark-version"
                checked={props.darkTheme}
                onChange={(e) => props.handleDarkTheme(e)}
              />
              {JSON.stringify()}
            </div>
          </div>
          <hr className="horizontal dark my-sm-4" />
        </div>
      </div>
    </div>
  );
}

export default Setting;
