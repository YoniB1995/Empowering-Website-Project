import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../../contexts/AuthContextProvider";
// import JSONpretty from "react-json-pretty";
import { getAllAdmins } from "../../../../service/admin-service";
import "./Profile.css"
const Profile = () => {
  const { isLogin } = useContext(AuthContext);

  // const [dataa, setDataa] = useState([]);
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
          <h1 className="profile">
            Hello:
            {admins.map((admin) => admin.email === adminUser && admin.username)}
          </h1>
        ) : (
          <h1>No USER</h1>
        )}
      </div>
    </div>
  );
};

export default Profile;
