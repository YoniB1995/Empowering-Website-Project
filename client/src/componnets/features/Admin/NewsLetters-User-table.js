import { Table, Tag, Space } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import EditModal from "./Modal/Edit-Modal";
import DeleteModal from "./Modal/Delete-Modal";
import {UserOutlined} from "@ant-design/icons"
const { Column, ColumnGroup } = Table;
const data = [
  {
    key: "1",
    email: "London No. 1 Lake Park",
    date: "21.04.2021",
  },
  {
    key: "2",
    email: "London No. 1 Lake Park",
    date: "16.05.2021",
  },
  {
    key: "3",
    email: "London No. 1 Lake Park",
    date: "14.03.2021",
  },
  {
    key: "4",
    email: "London No. 1 Lake Park",
    date: "14.02.2021",
  },
  {
    key: "5",
    email: "London No. 1 Lake Park",
    date: "11.02.2021",
  },
  {
    key: "6",
    email: "London No. 1 Lake Park",
    date: "21.02.2021",
  },
];

const NewsLettersUserTable = () => {
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>משתמשים בניוזלטר</h3>
      <div
        style={{ textAlign: "right", fontSize: "24px", paddingBottom: "10px" }}
      ></div>
      <Table dataSource={data}>
      <Column
          render={(text, record) => (
            <UserOutlined />
          )}
        />
        <Column title="כותרת" dataIndex="email" key="email" />
        <Column title="תאריך הצטרפות" dataIndex="date" key="date" />
      </Table>
    </div>
  );
};
export default NewsLettersUserTable;
