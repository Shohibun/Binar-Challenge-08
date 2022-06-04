import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/auth";
import { isEmail } from "validator";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import Input from "react-validation/build/input";

const required = (value) => {
  if (!value) {
    return (
      <div className="mt-2">
        <div className="alert alert-danger" role="alert">
          This field is required !
        </div>
      </div>
    );
  }
};

const validUsername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="mt-2">
        <div className="alert alert-danger" role="alert">
          Email is not valid.
        </div>
      </div>
    );
  }
};

const validPassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="mt-2">
        <div className="alert alert-danger mx-auto" role="alert">
          The password must be between 6 and 40 characters.
        </div>
      </div>
    );
  }
};

export default function SignUp() {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const onChangeUsername = (element) => {
    const username = element.target.value;
    setUsername(username);
  };

  const onChangeEmail = (element) => {
    const email = element.target.value;
    setEmail(email);
  };

  const onChangePassword = (element) => {
    const password = element.target.value;
    setPassword(password);
  };

  const handleRegister = (element) => {
    element.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(register(username, email, password))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };

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
              <h4 className="font-weight-bold mb-4">Create New Account</h4>

              <Form onSubmit={handleRegister} ref={form}>
                {!successful && (
                  <>
                    <div className="form-group mb-3">
                      <label
                        htmlFor="username"
                        className="text-dark mb-1 custom-auth-font"
                      >
                        Username
                      </label>
                      <Input
                        type="text"
                        className="form-control p-2 custom-auth-font"
                        name="username"
                        value={username}
                        onChange={onChangeUsername}
                        validations={[required, validUsername]}
                        placeholder="Contoh: johndee"
                      />
                    </div>

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
                        validations={[required, validEmail]}
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
                        validations={[required, validPassword]}
                        placeholder="6+ karakter"
                      />
                    </div>

                    <button className="mt-3 form-group font-weight-bold text-white rounded border border-light py-2 w-100 custom-auth-sign">
                      Sign Up
                    </button>
                    <p className="text-center text-dark custom-auth-font">
                      Already have an account ? &nbsp;
                      <span>
                        <Link to={"/login"} className="text-primary">
                          Login
                        </Link>
                      </span>
                    </p>
                  </>
                )}

                {message && (
                  <div className="form-group mt-2">
                    <div
                      className={
                        successful
                          ? "alert alert-success mx-auto"
                          : "alert alert-danger mx-auto"
                      }
                      role="alert"
                    >
                      {message}
                      <p className="mx-auto text-dark custom-auth-font">
                        Please go to the{" "}
                        <Link className="text-primary" to={"/login"}>
                          Login
                        </Link>{" "}
                        page
                      </p>
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
