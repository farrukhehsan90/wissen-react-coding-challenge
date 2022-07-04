import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "./../../redux/actions/users";
import { SIGN_OUT } from "./../../redux/types";
import { useAlert } from "react-alert";
import Home from "./components/Home";
import classes from "./HomePage.module.css";

export const HomePage = () => {
  const token = useSelector((state) => state.auth.token);
  const users = useSelector((state) => state.users.users);
  const alert = useAlert();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch({ type: SIGN_OUT });
    alert.show("Log Out Successfull!", {
      type: "success",
    });
  };

  const getUsers = async () => {
    await dispatch(
      getUserData({
        token,
      })
    );
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className={classes["home"]}>
      <Home handleLogOut={handleLogOut} users={users} />
    </div>
  );
};
