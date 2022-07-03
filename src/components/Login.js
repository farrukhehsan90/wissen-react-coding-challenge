import React, { useState } from "react";
import { render } from "react-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/auth";
import { BiImages } from "react-icons/bi";
import images from "../assets/images/images";
import Spinner from "react-bootstrap/Spinner";
import { useAlert } from "react-alert";

// import "./style.css";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isVisible, setIsVisible] = useState("");
  const [termsCondition, setTermsCondition] = useState(false);
  const [loading, setLoading] = useState(false);
  const alert = useAlert();
  const dispatch = useDispatch();
  const handleValidation = async () => {
    let formIsValid = true;
    if (email === "") {
      formIsValid = false;
      setEmailError("Email cannot be empty");
      return false;
    } else {
      setEmailError("");
      formIsValid = true;
    }
    if (password === "") {
      setPasswordError("Password cannot be empty");
      return false;
    } else {
      setPasswordError("");
      formIsValid = true;
    }

    if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      formIsValid = false;
      setEmailError("Email Not Valid");
      return false;
    } else {
      setEmailError("");
      formIsValid = true;
    }

    if (!password.match(/^[a-zA-Z]{4,10}$/)) {
      formIsValid = false;
      setPasswordError(
        "Only Letters and length must best min 4 Chracters and Max 10 Chracters"
      );
      return false;
    } else {
      setPasswordError("");
      formIsValid = true;
    }
    if (formIsValid) {
      setLoading(true);
      const res = await dispatch(
        login({
          email,
          password,
        })
      );
      if (res) {
        alert.show("Login Successfull", {
          type: "success",
        });
        setLoading(false);
      } else {
        alert.show("Invalid Email and Password", {
          type: "error",
        });
        setLoading(false);
      }
    }

    return formIsValid;
  };
  const loginSubmit = (e) => {
    e.preventDefault();
    handleValidation();
  };
  return (
    <div
      style={
        {
          // margin: "auto",
          // padding: "10px",
        }
      }
    >
      <div>
        <div>
          <div className="container">
            <img
              src={"data:image/png;base64," + images.images.logo}
              alt="Card image cap"
            />

            <h6 style={{ padding: 10 }}>Hello there, Sign in to continue</h6>
            <div className="col-sm-6 col-md-8 col-lg-12">
              <form id="loginform" onSubmit={loginSubmit}>
                <div className="form-group" style={{ paddingBottom: 20 }}>
                  <label data-testid="email" style={{ paddingBottom: 5 }}>
                    Email
                  </label>

                  <div
                    style={{
                      border: "1px solid #DDD",
                      borderRadius: 5,
                      padding: 10,
                    }}
                  >
                    <input
                      type="email"
                      id="pwd"
                      placeholder="Enter Email"
                      onChange={(event) => setEmail(event.target.value)}
                      style={{ border: "none", outline: "none" }}
                    />
                  </div>

                  <small id="emailHelp" className="text-danger form-text">
                    {emailError}
                  </small>
                </div>
                <div className="form-group">
                  <label style={{ paddingBottom: 5 }}>Password</label>
                </div>
                <div
                  style={{
                    border: "1px solid #DDD",
                    borderRadius: 5,
                    padding: 10,
                  }}
                >
                  <input
                    type={isVisible ? "text" : "password"}
                    // className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    onChange={(event) => setPassword(event.target.value)}
                    style={{ border: "none", outline: "none" }}
                  />
                  {isVisible ? (
                    <FaEye
                      onClick={() => setIsVisible(false)}
                      style={{
                        float: "right",
                        textAlign: "center",
                        margin: 5,
                        marginRight: 10,
                      }}
                    />
                  ) : (
                    <FaEyeSlash
                      onClick={() => setIsVisible(true)}
                      style={{
                        float: "right",
                        textAlign: "center",
                        margin: 5,
                        marginRight: 10,
                      }}
                    />
                  )}
                </div>
                <small id="passworderror" className="text-danger form-text">
                  {passwordError}
                </small>

                <div
                  style={{ paddingTop: 20 }}
                  className="form-group form-check"
                >
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    value={termsCondition}
                    onChange={(e) => setTermsCondition(e.target.checked)}
                  />
                  <p className="form-check-label">
                    By creating or logging into an account, you are agreeing
                    with our <a href="#"> Terms & Conditions </a> and{" "}
                    <a href="#"> Privacy Policys </a>{" "}
                  </p>
                </div>
                <button
                  disabled={!termsCondition || loading}
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ width: "100%" }}
                >
                  {loading ? (
                    <Spinner animation="border" role="status">
                      {" "}
                    </Spinner>
                  ) : (
                    "Next"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
        <h6 style={{ padding: 50, textAlign: "center" }}>
          Signin with company SSO
        </h6>
      </div>
    </div>
  );
};
export default Login;
