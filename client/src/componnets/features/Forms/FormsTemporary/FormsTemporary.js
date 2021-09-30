import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthContextProvider";
// import { loginAdmin } from "../../../../service/admin-service";

const FormsTemporary = () => {
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const { isLogin, login } = useContext(AuthContext);

  if (isLogin) {
    return <Redirect to="/" />;
  }

  const saveInfoEmail = (e) => {
    setAdminEmail(e.target.value);
    console.log(adminEmail);
  };

  const saveInfoPassword = (e) => {
    setAdminPassword(e.target.value);
    console.log(adminPassword);
  };

  const userAdmin = {
      email: adminEmail,
      password: adminPassword,
  };

  return (
    <>
      <div>
        <h1>Email:</h1>
        <input type="email" onChange={saveInfoEmail} required />
        <h1>Password</h1>
        <input onChange={saveInfoPassword} type="password" required />
        <button onClick={() => login(userAdmin)}>Login</button>
      </div>
    </>
  );
};

export default FormsTemporary;
