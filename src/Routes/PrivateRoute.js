import React from "react";
import { Route, Redirect } from "react-router-dom";

const isLogin = () => {
  return false;
};

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? <Redirect to="/client" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
