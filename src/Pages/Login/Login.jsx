import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import classes from "./Login.module.scss";
import { authLogin } from "../../store/reducers/LoginSlice";

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
      <form
        className={classes.login_form}
        action="submit"
        onSubmit={submitLogin}
      >
        <span className={classes.login_subtitle}>login</span>
        <input
          className={classes.input_login}
          type="login"
          name="login"
          id="1"
          placeholder="E-mail"
          onChange={inputLogin}
        />
        <span className={classes.login_subtitle}>password</span>
        <input
          className={classes.input_password}
          type="password"
          name="password"
          id="2"
          placeholder="Password"
          onChange={inputPassword}
        />
        {emailError && <p>{emailError}</p>}
        <button type="submit" className={classes.login_submit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
