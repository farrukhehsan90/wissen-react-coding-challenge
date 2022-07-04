import React, { useState } from "react";
import Login from "./components/Login";
import Navbar from "./../../components/navbar/Navbar";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/auth";
import { useAlert } from "react-alert";
import classes from "./LoginPage.module.css";

export const LoginPage = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isVisible, setIsVisible] = useState("");
  const [termsCondition, setTermsCondition] = useState(false);
  const [loading, setLoading] = useState(false);
  const alert = useAlert();
  const dispatch = useDispatch();

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const handleVisible = () => {
    setIsVisible(!isVisible);
  };
  const handleChecked = (event) => {
    setTermsCondition(event.target.checked);
  };
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
        "Only Letters and length must be min (4) Chracters and Max (10) Chracters"
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
    <div className={classes["login-page"]}>
      <Navbar logoutHidden={true} />
      <Login
        loginSubmit={loginSubmit}
        email={email}
        password={password}
        emailHandler={emailHandler}
        passwordHandler={passwordHandler}
        loading={loading}
        isVisible={isVisible}
        handleVisible={handleVisible}
        handleChecked={handleChecked}
        termsCondition={termsCondition}
        emailError={emailError}
        passwordError={passwordError}
      />
    </div>
  );
};
