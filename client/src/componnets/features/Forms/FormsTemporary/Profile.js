import React, { useState, useContext,useEffect} from "react";
import { AuthContext } from "../../../../contexts/AuthContextProvider";
import JSONpretty from 'react-json-pretty'
import {getAllAdmins} from "../../../../service/admin-service";

const Profile = ()=> {
    const { isLogin } = useContext(AuthContext);
    
    const [dataa, setDataa] = useState([]);

  useEffect(() => {
    getAllAdmins()
      .then((res) => {
        setDataa(res);
        console.log(dataa);
      })
      .catch((err) => console.log(err));
  }, []);
    
    return (
        <div>
                {dataa.map((d)=>{
                    return(
                        <div>
                            <li>{d.username}</li>
                        </div>
                    )
                })}
        </div>
    )
}

export default Profile;
