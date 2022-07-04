import React from "react";
import Button from "../../../components/Button/Button";
import { strings } from "../../../resources/locale/en";
import classes from "./Login.module.css";
import Input from "../../../components/Input/Input";

export default function Login({
  loginSubmit,
  email,
  password,
  emailHandler,
  passwordHandler,
  emailError,
  passwordError,
  termsCondition,
  isVisible,
  handleVisible,
  handleChecked,
  loading,
}) {
  return (
    <div>
      <div>
        <div className="container">
          <h6 className={classes["login-main-heading"]}>
            {strings.signInHeading}
          </h6>
          <div className="col-sm-6 col-md-8 col-lg-12">
            <form id="loginform" onSubmit={loginSubmit}>
              <Input
                inputHandler={emailHandler}
                inputError={emailError}
                type={"email"}
                visible={false}
                inputText={"Email"}
              />
              <Input
                inputHandler={passwordHandler}
                inputError={passwordError}
                type={"password"}
                visible={true}
                isVisible={isVisible}
                handleVisible={handleVisible}
                inputText={"Password"}
              />
              <div
                className={`form-group form-check ${classes["input-checkBox"]}`}
              >
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  value={termsCondition}
                  onChange={handleChecked}
                />
                <p className="form-check-label">
                  {strings.termsAndConditionText}
                  <a href="#"> {strings.termsAndCondition} </a> {strings.and}
                  <a href="#"> {strings.privacyPolicies} </a>
                </p>
              </div>
              <Button
                loading={loading}
                termsCondition={termsCondition}
                buttonText={strings.loginButtonText}
              />
            </form>
          </div>
        </div>
      </div>
      <h6 style={{ padding: 50, textAlign: "center" }}>
        {strings.footerHeading}
      </h6>
    </div>
  );
}
