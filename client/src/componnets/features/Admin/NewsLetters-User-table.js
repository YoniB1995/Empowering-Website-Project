/* eslint-disable react-hooks/exhaustive-deps */
import { Table, Tag, Space } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import EditModal from "./Modal/Edit-Modal";
import DeleteModal from "./Modal/Delete-Modal";
import { UserOutlined } from "@ant-design/icons";
import { getAllMembers } from "../../../service/newsletter-service";
import React, { useEffect, useState } from "react";
import { P } from "@antv/g2plot";

const { Column, ColumnGroup } = Table;

const NewsLettersUserTable = () => {
  const [dataa, setDataa] = useState([]);

  useEffect(() => {
    getAllMembers()
      .then((res) => res.json())
      .then((result) => setDataa(result.subscribers))
      .catch((err) => console.log(err));
  }, []);

  // dataa.email_address
  // dataa.status

  

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>משתמשים בניז לייטר</h3>
      <div>
        <ul>
          {dataa?.map((data) => {
            return (
              <div>
                <li>{data.email_address}</li>
                <li>{data.status}</li>
              </div>
            );
          })}
        </ul>
      </div>

      <div
        style={{ textAlign: "right", fontSize: "24px", paddingBottom: "10px" }}
      ></div>

      <Table dataSource={dataa.subscribers}>
 
        {/* <Column render={(text, record) => <UserOutlined />} /> */}

        <Column title="Email Address" dataIndex="email_address" key="email_address"
          render={(email_address) => (
            <>
            
              {email_address?.map((email) => (
                <Tag color="blue" key={email}>
                  {email.email_address}
                </Tag>
              ))}
            </>
          )}
        />
        
        {/* <Column title="כותרת" dataIndex="email" key="email" />
        <Column title="תאריך הצטרפות" dataIndex="date" key="date" /> */}
      </Table>
    </div>
  );
};
export default NewsLettersUserTable;
