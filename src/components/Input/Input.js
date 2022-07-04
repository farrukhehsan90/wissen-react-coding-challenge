import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import classes from "./Input.module.css";

export default function Input({
  inputHandler,
  inputError,
  type,
  visible,
  isVisible,
  handleVisible,
  inputText,
}) {
  return (
    <div className={`form-group ${classes["input-container"]}`}>
      <label data-testid="test-1" className={classes["input-label"]}>
        {inputText}
      </label>
      <div className={classes["input-box"]}>
        <input
          type={visible ? (isVisible ? "text" : "password") : type}
          placeholder={`Enter ${inputText}`}
          onChange={inputHandler}
          className={classes["input-field"]}
          //   className="form-control"
        />
        {visible ? (
          isVisible ? (
            <FaEye onClick={handleVisible} className={classes["input-icon"]} />
          ) : (
            <FaEyeSlash
              onClick={handleVisible}
              className={classes["input-icon"]}
            />
          )
        ) : null}
      </div>
      <small className="text-danger form-text">{inputError}</small>
    </div>
  );
}
