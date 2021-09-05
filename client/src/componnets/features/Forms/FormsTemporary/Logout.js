import { useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthContextProvider";

const Logout = () => {
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    logout();
  }, []);

  return <Redirect to="/form" />;
};

export default Logout;