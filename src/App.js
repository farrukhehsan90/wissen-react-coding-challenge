import React, { useState } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import { useSelector } from "react-redux";

const App = () => {
  const userToken = useSelector((state) => state.auth.token);
  return <>{userToken && userToken.length > 0 ? <Home /> : <Login />}</>;
};
export default App;
