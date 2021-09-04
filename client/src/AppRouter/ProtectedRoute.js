import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContextProvider";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isLogin } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLogin) {
          return <Component />;
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { form: props.location } }} />
          );
        }
      }}
    />
  );
};
