import React from "react";
import Spinner from "react-bootstrap/Spinner";
import classes from "./Button.module.css";

export default function Button({ termsCondition, loading, buttonText }) {
  return (
    <button
      disabled={!termsCondition || loading}
      type="submit"
      className={`btn btn-primary btn-lg ${classes["button-box"]}`}
    >
      {loading ? (
        <Spinner animation="border" role="status">
          {" "}
        </Spinner>
      ) : (
        buttonText
      )}
    </button>
  );
}
