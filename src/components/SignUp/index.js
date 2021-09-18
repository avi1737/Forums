import React, { useEffect } from "react";
import LoginSignUpLayout from "../../container/LoginSignUpLayout";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import classes from "../../container/LoginSignUpLayout/styles.module.css";
import { callSignup } from "../../Graphs/Auth/SignUp";
import { useDispatch, useSelector } from "react-redux";
import {
  setLoginFlag,
  setUserAuthtoken,
  setUserData,
} from "../../actions/auth";

const SignupForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  let isAuthenticated = useSelector((state) => state.auth.loginFlag);

  useEffect(() => {
    if (isAuthenticated) {
      history.push(`${process.env.PUBLIC_URL}/dashboard`);
    }
  }, []);

  async function signup(email, password) {
    try {
      const response = await callSignup(email, password);
      dispatch(setLoginFlag(true));
      dispatch(setUserAuthtoken(response.user.refreshToken));
      dispatch(
        setUserData({ uid: response.user.uid, email: response.user.email })
      );
      history.push(`${process.env.PUBLIC_URL}/dashboard`);
    } catch (e) {
      history.push(`${process.env.PUBLIC_URL}/SignUp`);
    }
  }

  return (
    <Formik
      initialValues={{ email: "", password: "", agree: false }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .min(7, "Must be 7 characters or more")
          .required("Required"),
        agree: Yup.boolean().oneOf([true], "You must accept the policy."),
      })}
      onSubmit={(values, { setSubmitting }) => {
        const { email, password } = values;
        signup(email, password);
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <div className={classes.input_container}>
            <div className={classes.input_with_lable}>
              <label htmlFor="email" className={classes.label}>
                Email
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
                placeholder="7+ characters"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className={classes.error_message}>
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
          </div>

          <div className={classes.lable_for_checkbox}>
            <input type="checkbox" {...formik.getFieldProps("agree")} />
            <label>
              Creating and account means you are okay with the{" "}
              <Link to="/Terms">Terms and condition</Link> and
              <Link to="Privacy">Privacy Policy</Link>.
            </label>

            {formik.touched.agree && formik.errors.agree ? (
              <div className={classes.error_message}>{formik.errors.agree}</div>
            ) : null}
          </div>

          <button type="submit" className={classes.button}>
            Create Account
          </button>
        </form>
      )}
    </Formik>
  );
};

function SignUp() {
  return (
    <LoginSignUpLayout>
      <>
        <h2>Sign Up for Branding</h2>
        <p>Or sign up using your email address</p>
        <SignupForm />
      </>
    </LoginSignUpLayout>
  );
}

export default SignUp;
