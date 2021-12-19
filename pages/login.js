import { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import Image from "next/image";
import { Formik } from "formik";
import { Alert } from "react-bootstrap";
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
            <div className="login d-flex justify-content-center common-img-bg">
              <div className="login-card card-block auth-body">
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
                    <form onSubmit={handleSubmit}>
                      <Image
                        src="/images/logo-dark.png"
                        alt="Bawaslu"
                        width={200}
                        height={50}
                      />
                      <input
                        name="csrfToken"
                        type="hidden"
                        value={values.csrfToken}
                      />
                      <div className="auth-box">
                        {error && (
                          <Alert variant="danger">Gagal Melakukan Login</Alert>
                        )}

                        <div className="row mb-20">
                          <div className="col-sm-12">
                            <h3 className="text-left">Sign In</h3>
                          </div>
                        </div>
                        <hr />
                        {errors.username && touched.username && (
                          <span className="text-danger">{errors.username}</span>
                        )}
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            required
                            placeholder="Username"
                            name="username"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.username}
                          />
                        </div>

                        {errors.password && touched.password && (
                          <span className="text-danger">{errors.password}</span>
                        )}
                        <div className="input-group">
                          <input
                            type="password"
                            className="form-control"
                            required
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                          />
                        </div>
                        <div className="d-flex justify-content-between">
                          <div>
                            <button
                              type="submit"
                              className="btn btn-primary btn-sm"
                              disabled={isSubmitting}
                            >
                              Sign in
                            </button>
                          </div>
                          <div>
                            {providers?.google && (
                              <button
                                type="button"
                                onClick={() => signIn("google")}
                                className="btn btn-primary btn-sm"
                              >
                                Login Dengan Google
                              </button>
                            )}
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-md-12">
                            <p className="text-inverse text-left m-b-0">
                              Silakan Masukan Data Anda.
                            </p>
                            <p className="text-inverse text-left">
                              <b>Bawaslu Republik Indonesia</b>
                            </p>
                          </div>
                        </div>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
