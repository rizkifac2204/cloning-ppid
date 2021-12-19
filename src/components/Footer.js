function Footer() {
  return (
    <footer className="footer py-4  ">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-6 mb-lg-0 mb-4">
            <div className="copyright text-center text-sm text-muted text-lg-start">
              © 2022, Pejabat Pengelola Informasi dan Dokumentasi{" "}
              <a
                href="https://bawaslu.go.id/"
                className="font-weight-bold"
                target="_blank"
              >
                Bawaslu RI
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <ul className="nav nav-footer justify-content-center justify-content-lg-end">
              <li className="nav-item">
                <a
                  href="https://ppid.bawaslu.go.id/"
                  className="nav-link text-muted"
                  target="_blank"
                >
                  PPID
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="http://jdih.bawaslu.go.id/"
                  className="nav-link text-muted"
                  target="_blank"
                >
                  JDIH
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://bawaslu.go.id/id/form/survey-layanan-pelaporan-dugaan-pelanggaran-pemilu"
                  className="nav-link text-muted"
                  target="_blank"
                >
                  Survey Layanan
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://www.instagram.com/rizkiduck/"
                  className="nav-link pe-0 text-muted"
                  target="_blank"
                >
                  Author
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
