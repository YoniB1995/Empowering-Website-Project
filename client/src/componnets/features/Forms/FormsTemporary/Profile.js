import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../../contexts/AuthContextProvider";
// import JSONpretty from "react-json-pretty";
import { getAllAdmins } from "../../../../service/admin-service";
import { UserOutlined, LoginOutlined } from "@ant-design/icons";
import { Redirect } from "react-router";

import "./Profile.css";
const Profile = () => {
  const { isLogin,logout } = useContext(AuthContext);

  const [admins, setAdmins] = useState([]);

  const isToken = localStorage.getItem("token");
  const adminUser = localStorage.getItem("useremail");
  useEffect(() => {
    getAllAdmins()
      .then((res) => res.json())
      .then((result) => setAdmins(result));
  }, []);

  const logoutAdmin = () => {
    logout()
    return <Redirect to="/form" />
  }

  return (
    <div>
      {/*       
      {isLogin && (
        
      )} */}
      <div>
        {isToken ? (
          <div className="profile">
            <div className="user-icon-container">
              
              <LoginOutlined onClick={logoutAdmin} style={{ fontSize: "14px", color: "white" }} />
              {/* <LoginOutlined /> */}
            </div>
            <p>hello</p>

            <p>
              {" "}
              {admins.map(
                (admin) => admin.email === adminUser && admin.username
              )}
            </p>
          </div>
        ) : (
          <h1>No USER</h1>
        )}
      </div>
    </div>
  );
};

export default Profile;
