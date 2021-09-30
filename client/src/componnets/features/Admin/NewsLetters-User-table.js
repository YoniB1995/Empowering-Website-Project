/* eslint-disable react-hooks/exhaustive-deps */
import { Table, Tag, Space } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import EditModal from "./Modal/Edit-Modal";
import DeleteModal from "./Modal/Delete-Modal";
import { UserOutlined } from "@ant-design/icons";
import { getAllMembers } from "../../../service/newsletter-service";
import React, { useEffect, useState } from "react";

const { Column, ColumnGroup } = Table;

const NewsLettersUserTable = () => {
  const [dataa, setDataa] = useState([]);

  // useEffect(() => {
  //  getAllMembers()
  // .then((res) => {
  //   setDataa(res.filterdMembers);
  //   console.log(dataa);
  // })
  // .catch((err) => console.log(err));
  // }, []);
  const API =
  process.env.NODE_ENV === "production"
    ? `https://empowering-women-web.herokuapp.com/`
    : "http://localhost:5000";

  useEffect(()=>{
   const getAllMembers = () => {
    const options = {
      method: "get",
      body: JSON.stringify(),
      headers: { "Content-Type": "application/json" },
    };
    try {
      return fetch(`${API}/mailChimp/getAllMembers`, options)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setDataa(res.filterdMembers);
        });

    } catch (error) {
      console.log(error);
    }
  };

  })


  



  return (
    <div>
      <h3 style={{ textAlign: "center" }}>משתמשים בניז לייטר</h3>ו
      <div
        style={{ textAlign: "right", fontSize: "24px", paddingBottom: "10px" }}
      ></div>
    
    <h1>{dataa}</h1>
      
      <Table dataSource={dataa}>
        <Column render={(text, record) => <UserOutlined />} />
        <Column title="כותרת" dataIndex="email" key="email" />
        <Column title="תאריך הצטרפות" dataIndex="date" key="date" />
      </Table>
    </div>
  );
};
export default NewsLettersUserTable;
