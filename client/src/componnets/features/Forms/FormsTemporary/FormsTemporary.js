import React, { useState } from "react";
import { Redirect } from "react-router";
import { loginAdmin } from "../../../../service/admin-service";

const FormsTemporary = () => {
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [islogin,setIslogin] = useState(false);
  const [logout,setLogout] = useState(false);

  const saveInfoEmail = (e) => {
    setAdminEmail(e.target.value);
    console.log(adminEmail);
  };

  const saveInfoPassword = (e) => {
    setAdminPassword(e.target.value);
    console.log(adminPassword);
  };

  const loginHandler = async () => {
    await loginAdmin(userAdmin);
    setIslogin(true)
  };

  const Logout = () => {
    localStorage.removeItem("token");
    setLogout(true)
  };

  const userAdmin = {
    user: {
      email: adminEmail,
      password: adminPassword,
    },
  };

  if (islogin) {
    return <Redirect to="Admin/NewArticles" />;
  }

  
  if (logout) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <div>
        <h1>Email:</h1>
        <input type="email" onChange={saveInfoEmail} required />
        <h1>Password</h1>
        <input onChange={saveInfoPassword} required />
        <button onClick={loginHandler}>Login</button>
        <button onClick={Logout}>Logout</button>
      </div>
    </>
  );
};

export default FormsTemporary;
