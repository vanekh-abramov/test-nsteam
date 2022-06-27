import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import classes from "./Login.module.scss";
import { authLogin } from "../../store/reducers/LoginSlice";
import LoginForm from "../../Components/LoginForm/LoginForm";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const inputLogin = (e) => {
    setLogin(e.target.value);
  };

  const inputPassword = (e) => {
    setPassword(e.target.value);
  };

  const submitLogin = (e) => {
    e.preventDefault();
    // const re =
    //   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    // if (!re.test(String(e.target.value).toLowerCase())) {
    //   setEmailError("Invalid email");
    // } else if (login === "Admin" && password === "12345") {
    //   dispatch(authLogin(true));
    //   navigate("/profile/:1");
    // } else {
    //   setEmailError("Another error")
    // }
    if (login.trim() === "" || password.trim() === "") {
      setEmailError("Fields can`t be empty");
    } else if (login === "Admin" && password === "12345") {
      dispatch(authLogin(true));
      navigate("/profile/:1");
    } else {
      setEmailError("Another error");
    }
  };

  return (
    <div className={classes.login}>
      <p className={classes.login_title}>Authorization</p>
      <LoginForm
        submitLogin={submitLogin}
        inputLogin={inputLogin}
        inputPassword={inputPassword}
        emailError={emailError}
      />
    </div>
  );
};

export default Login;
