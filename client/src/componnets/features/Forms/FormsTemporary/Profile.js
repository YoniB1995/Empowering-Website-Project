import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../../contexts/AuthContextProvider";
import JSONpretty from "react-json-pretty";
import { getAllAdmins } from "../../../../service/admin-service";
import { UserOutlined } from "@ant-design/icons";

import "./Profile.css";
const Profile = () => {
  const { isLogin } = useContext(AuthContext);

  const [admins, setAdmins] = useState([]);

  const isToken = localStorage.getItem("token");
  const adminUser = localStorage.getItem("useremail");
  useEffect(() => {
    getAllAdmins()
      .then((res) => res.json())
      .then((result) => setAdmins(result));
  }, []);

  return (
    <div>
      {/*       
      {isLogin && (
        
      )} */}
      <div>
        {isToken ? (
          <div className="profile">
            <div className="user-icon-container">
            <UserOutlined style={{fontSize:"20px",color:"white"}}/>
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
