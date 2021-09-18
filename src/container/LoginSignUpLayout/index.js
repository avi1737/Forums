import React from "react";
import classes from "./styles.module.css";

function LoginSignUpLayout({ children }) {
  return (
    <div className={classes.container}>
      <div className={classes.container_left}>
        <h4>Branding</h4>
        <h1>Lets create something Amazing work with us</h1>
      </div>
      <div className={classes.container_right}>{children}</div>
    </div>
  );
}

export default LoginSignUpLayout;
