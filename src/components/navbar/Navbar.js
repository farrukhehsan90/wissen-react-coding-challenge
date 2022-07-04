import React from "react";
import { BiLogOutCircle } from "react-icons/bi";
import { images } from "../../assets/images/images";
import classes from "./Navbar.module.css";

export default function Navbar({ handleLogOut }) {
  return (
    <nav className={classes["nav-bar"]}>
      <div className={classes["home-image"]}>
        <img
          src={"data:image/png;base64," + images.logo}
          alt="Card image cap"
        />
      </div>
      <h3 className={classes["nav-icon"]} onClick={handleLogOut}>
        <BiLogOutCircle />
      </h3>
    </nav>
  );
}
