import { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import { Formik } from "formik";
import Script from "next/script";
import {
  useSession,
  getProviders,
  signIn,
  getCsrfToken,
} from "next-auth/react";

export default function Login() {
  const [providers, setProviders] = useState([]);
  const [csrfToken, setcsrfToken] = useState(undefined);
  const { data: session } = useSession();
  const { error } = useRouter().query;

  useEffect(() => {
    const setTheProviders = async () => {
      const setupProviders = await getProviders();
      setProviders(setupProviders);
    };
    setTheProviders();
    const setThecsrf = async () => {
      const setupcsrf = await getCsrfToken();
      setcsrfToken(setupcsrf);
    };
    setThecsrf();
  }, []);

  if (session) {
    Router.push("/admin");
  }

  return (
    <>
      {providers?.credentials && (
        <>
          {csrfToken && (
            <main className="main-content  mt-0">
              <div
                className="page-header align-items-start min-vh-100"
                style={{
                  backgroundImage: 'url("/images/bg.jpg")',
                }}
              >
                <span className="mask bg-gradient-dark opacity-6" />
                <div className="container my-auto">
                  <div className="row">
                    <div className="col-lg-4 col-md-8 col-12 mx-auto">
                      <div className="card z-index-0 fadeIn3 fadeInBottom">
                        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                          <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                            <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">
                              Sign in
                            </h4>
                          </div>
                        </div>
                        <div className="card-body">
                          {error && (
                            <i className="text-lg text-danger">Gagal Login</i>
                          )}

                          <Formik
                            initialValues={{
                              username: "",
                              password: "",
                              csrfToken: csrfToken,
                            }}
                            validate={(values) => {
                              const errors = {};
                              if (!values.username) {
                                errors.username = "Username Harus Diisi";
                              }
                              if (!values.password) {
                                errors.password = "Password Harus Diisi";
                              }
                              return errors;
                            }}
                            onSubmit={async (values, { setSubmitting }) => {
                              setSubmitting(false);
                              signIn("credentials", {
                                username: values.username,
                                password: values.password,
                              });
                            }}
                          >
                            {({
                              values,
                              errors,
                              touched,
                              handleChange,
                              handleBlur,
                              handleSubmit,
                              isSubmitting,
                            }) => (
                              <form
                                onSubmit={handleSubmit}
                                role="form"
                                className="text-start"
                              >
                                {errors.username && touched.username && (
                                  <span className="text-danger text-sm">
                                    {errors.username}
                                  </span>
                                )}
                                <div className="input-group input-group-outline mb-3">
                                  <label className="form-label">Username</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    required
                                    name="username"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.username}
                                  />
                                </div>
                                {errors.password && touched.password && (
                                  <span className="text-danger text-sm">
                                    {errors.password}
                                  </span>
                                )}
                                <div className="input-group input-group-outline mb-3">
                                  <label className="form-label">Password</label>
                                  <input
                                    type="password"
                                    className="form-control"
                                    required
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                  />
                                </div>
                                {/* <div className="form-check form-switch d-flex align-items-center mb-3">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="rememberMe"
                                  />
                                  <label
                                    className="form-check-label mb-0 ms-2"
                                    htmlFor="rememberMe"
                                  >
                                    Remember me
                                  </label>
                                </div> */}
                                <div className="text-center">
                                  <button
                                    type="submit"
                                    className="btn bg-gradient-primary w-100 my-4 mb-2"
                                    disabled={isSubmitting}
                                  >
                                    Sign in
                                  </button>
                                </div>
                                <p className="mt-4 text-sm text-center">
                                  Akun mempunyai data email Google? <br />
                                  <a
                                    className="text-primary text-gradient font-weight-bold"
                                    onClick={() => signIn("google")}
                                  >
                                    Login Dengan{" "}
                                    <i className="fa fa-google"></i>
                                    oogle
                                  </a>
                                </p>
                              </form>
                            )}
                          </Formik>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <footer className="footer position-absolute bottom-2 py-2 w-100">
                  <div className="container">
                    <div className="row align-items-center justify-content-lg-between">
                      <div className="col-12 col-md-6 my-auto">
                        <div className="copyright text-center text-sm text-white text-lg-start">
                          © 2022, Pejabat Pengelola Informasi dan Dokumentasi{" "}
                          <a
                            href="https://bawaslu.go.id/"
                            className="font-weight-bold"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Bawaslu RI
                          </a>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                          <li className="nav-item">
                            <a
                              href="https://ppid.bawaslu.go.id/"
                              className="nav-link text-muted"
                              target="_blank"
                              rel="noreferrer"
                            >
                              PPID
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="http://jdih.bawaslu.go.id/"
                              className="nav-link text-muted"
                              target="_blank"
                              rel="noreferrer"
                            >
                              JDIH
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="https://bawaslu.go.id/id/form/survey-layanan-pelaporan-dugaan-pelanggaran-pemilu"
                              className="nav-link text-muted"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Survey Layanan
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="https://www.instagram.com/rizkiduck/"
                              className="nav-link pe-0 text-muted"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Author
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </footer>
              </div>
            </main>
          )}
        </>
      )}
      <Script src="/assets/js/custom.js" />
    </>
  );
}
