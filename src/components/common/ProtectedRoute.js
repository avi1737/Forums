import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem("user_name");
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
