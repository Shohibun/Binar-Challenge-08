import React, { useRef, useState } from "react";
import { GoogleLogin } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/auth";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const required = (value) => {
  if (!value) {
    return (
      <div className="mt-2">
        <div className="alert alert-danger mx-auto" role="alert">
          This field is required!
        </div>
      </div>
    );
  }
};

export default function SignIn(props) {
  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");

  const { user } = useSelector((state) => state?.auth);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const onChangeEmail = (element) => {
    const email = element.target.value;
    setEmail(email);
  };

  const onChangePassword = (element) => {
    const password = element.target.value;
    setPassword(password);
  };

  const handleLogin = (element) => {
    element.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(email, password))
        .then(() => {
          if (user?.roles[0] === 'ROLE_USER') {
            props.history.push("/dashboard-user");
            window.location.reload();
          } else if (user?.roles[0] === 'ROLE_ADMIN') {
            props.history.push("/dashboard-admin");
            window.location.reload();
          }
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  const responseGoogle = (response) => {
    console.log(response);
  };

  if (isLoggedIn) {
    if (user?.roles[0] === 'ROLE_USER') {
      return <Redirect to="/dashboard-user" />
    } else if (user?.roles[0] === 'ROLE_ADMIN') {
      return <Redirect to="/dashboard-admin" />
    }
  }

  return (
    <div className="container-fluid custom-auth-body">
      <div className="row">
        <div className="col-md-9 custom-auth-delete-spacing">
          <div className="custom-auth-transperency"></div>
        </div>
        <div className="col-md-3">
          <div className="p-4 row align-items-center custom-auth-point">
            <div className="col-md-12">
              <div className="mb-4 custom-auth-logo"></div>
              <h4 className="font-weight-bold mb-4">Welcome To BCR</h4>
              <Form onSubmit={handleLogin} ref={form}>
                <div className="form-group mb-3">
                  <label
                    htmlFor="email"
                    className="text-dark mb-1 custom-auth-font"
                  >
                    Email
                  </label>
                  <Input
                    type="text"
                    className="form-control p-2 custom-auth-font"
                    name="email"
                    value={email}
                    onChange={onChangeEmail}
                    validations={[required]}
                    placeholder="Contoh: johndee@gmail.com"
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="password"
                    className="text-dark mb-1 custom-auth-font"
                  >
                    Password
                  </label>
                  <Input
                    type="password"
                    className="form-control p-2 custom-auth-font"
                    name="password"
                    value={password}
                    onChange={onChangePassword}
                    validations={[required]}
                    placeholder="6+ karakter"
                  />
                </div>

                <button
                  className="mt-3 font-weight-bold text-white rounded border border-light py-2 w-100 custom-auth-sign"
                  disabled={loading}
                >
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Sign In</span>
                </button>

                <p className="text-center mt-1">
                  <GoogleLogin
                    clientId="512358058842-irha8guanrdttm8fjc7mpvhmjlbjg23t.apps.googleusercontent.com"
                    clientSecret="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"
                    buttonText="Login With Google"
                    onSucces={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy="single_host_origin"
                  />
                </p>

                {message && (
                  <div className="form-group">
                    <div className="alert alert-danger mx-auto" role="alert">
                      {message}
                    </div>
                  </div>
                )}
                <CheckButton style={{ display: "none" }} ref={checkBtn} />
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
