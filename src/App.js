import React from "react";
import { LoginPage } from "./pages/login";
import { HomePage } from "./pages/home";
import { useSelector } from "react-redux";

const App = () => {
  const userToken = useSelector((state) => state.auth.token);
  return (
    <>{userToken && userToken.length > 0 ? <HomePage /> : <LoginPage />}</>
  );
};
export default App;
