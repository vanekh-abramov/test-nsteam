import React from "react";
import classes from "./LoginForm.module.scss";

const LoginForm = ({ submitLogin, inputLogin, inputPassword, emailError }) => {
  return (
    <form className={classes.login_form} action="submit" onSubmit={submitLogin}>
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
  );
};

export default LoginForm;
