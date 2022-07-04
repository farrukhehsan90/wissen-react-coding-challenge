import React from "react";
import { BiLogOutCircle } from "react-icons/bi";
import { images } from "../../assets/images/images";
import { strings } from "../../resources/locale/en";
import classes from "./Navbar.module.css";

export default function Navbar(props) {
  return (
    <nav className={classes["nav-bar"]}>
      <div className={classes["home-image"]}>
        <img
          src={"data:image/png;base64," + images.logo}
          alt={strings.logoImageAltText}
        />
      </div>
      {props?.logoutHidden ? null : (
        <h3 className={classes["nav-icon"]} onClick={props?.handleLogOut}>
          <BiLogOutCircle />
        </h3>
      )}
    </nav>
  );
}
