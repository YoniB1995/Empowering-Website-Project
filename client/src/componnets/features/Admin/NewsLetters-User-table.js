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

  useEffect(() => {
    getAllMembers()
      .then((res) => {
        setDataa(res.filterdMembers);
        console.log(dataa);
      })
      .catch((err) => console.log(err));
  }, []);

        // dataa.email_address 
      // dataa.status
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>משתמשים בניז לייטר</h3>ו
      <div
        style={{ textAlign: "right", fontSize: "24px", paddingBottom: "10px" }}
      ></div>

      <Table dataSource={""}>
        <Column render={(text, record) => <UserOutlined />} />
        <Column
      title="Tags"
      dataIndex="tags"
      key="tags"
      render={tags => (
        <>
          {tags.map(tag => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
        <Column title="כותרת" dataIndex="email" key="email" />
        <Column title="תאריך הצטרפות" dataIndex="date" key="date" />
      </Table>
    </div>
  );
};
export default NewsLettersUserTable;
