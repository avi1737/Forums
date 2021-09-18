import React, { useEffect } from "react";
import LoginSignUpLayout from "../../container/LoginSignUpLayout";
import { Formik } from "formik";
import * as Yup from "yup";
import classes from "../../container/LoginSignUpLayout/styles.module.css";
import { useHistory } from "react-router";
import { callLogin } from "../../Graphs/Auth/Login";
import { useDispatch, useSelector } from "react-redux";
import {
  setLoginFlag,
  setUserAuthtoken,
  setUserData,
} from "../../actions/auth";

const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  let isAuthenticated = useSelector((state) => state.auth.loginFlag);

  useEffect(() => {
    if (isAuthenticated) {
      history.push(`${process.env.PUBLIC_URL}`);
    }
  }, []);

  async function login(email, password) {
    try {
      const response = await callLogin(email, password);
      dispatch(await setLoginFlag(true));
      dispatch(await setUserAuthtoken(response.user.refreshToken));
      dispatch(
        await setUserData({
          uid: response.user.uid,
          email: response.user.email,
        })
      );

      history.push(`${process.env.PUBLIC_URL}/dashboard`);
    } catch (e) {
      history.push(`${process.env.PUBLIC_URL}/Login`);
    }
  }

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Invalid email address")
          .required("Email can't be empty"),
        password: Yup.string()
          .min(7, "Must be 7 characters or more")
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        const { email, password } = values;
        login(email, password);
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <div className={classes.input_container}>
            <div className={classes.input_with_lable}>
              <label htmlFor="email" className={classes.label}>
                Your Email
              </label>
              <input
                className={classes.input}
                id="email"
                type="email"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className={classes.error_message}>
                  {formik.errors.email}
                </div>
              ) : null}
            </div>

            <div className={classes.input_with_lable}>
              <label htmlFor="password" className={classes.label}>
                password
              </label>
              <input
                className={classes.input}
                type="password"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className={classes.error_message}>
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
          </div>

          <button className={classes.button} type="submit">
            Sign In
          </button>
        </form>
      )}
    </Formik>
  );
};

function Login() {
  return (
    <LoginSignUpLayout>
      <>
        <h2>Sign in to branding</h2>
        <p>or sign in using your email address</p>
        <LoginForm />
      </>
    </LoginSignUpLayout>
  );
}

export default Login;
