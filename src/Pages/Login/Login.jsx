import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import classes from "./Login.module.scss";
import { authLogin } from "../../store/reducers/LoginSlice";
import LoginForm from "../../Components/LoginForm/LoginForm";
import { PROFILE_ROUTE } from "../../constants/routerLinks";
import { ANOTHER_ERR, EMPTY_FIELDS } from "../../constants/warningMessages";
import { fakeUser } from "../../fakeUser";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const areEmptyFields = !login.trim() || !password.trim();

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
    if (areEmptyFields) {
      setEmailError(EMPTY_FIELDS);
    } else if (login === fakeUser.username && password === fakeUser.password) {
      dispatch(authLogin(true));
      navigate(`${PROFILE_ROUTE}/:1`);
    } else {
      setEmailError(ANOTHER_ERR);
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
        login_subtitle={"Login"}
        password_subtitle={"Password"}
        button_title={"Submit"}
      />
    </div>
  );
};

export default Login;
