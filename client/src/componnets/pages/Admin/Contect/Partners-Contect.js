import { Table, Space } from "antd";
import DeleteModal from "../../Features/Modal/Delete-Modal";
import EditModal from "../../Features/Modal/Edit-Modal";
import "antd/dist/antd.css";
import AddModal from "../../Features/Modal/Add-Modal";

const { Column, ColumnGroup } = Table;
const data = [
  {
    key: "1",
    fullName: "John",
    description: "Brown",
    role: "New York No. 1 Lake Park",
    image: "London No. 1 Lake Park",
  },
  {
    key: "2",
    fullName: "Jim",
    description: "Green",
    role: "London No. 1 Lake Park",
    image: "London No. 1 Lake Park",
  },
  {
    key: "3",
    fullName: "Joe",
    description: "Black",
    role: "Sidney No. 1 Lake Park",
    image: "London No. 1 Lake Park",
  },
  {
    key: "1",
    fullName: "John",
    description: "Brown",
    role: "New York No. 1 Lake Park",
    image: "London No. 1 Lake Park",
  },
  {
    key: "2",
    fullName: "Jim",
    description: "Green",
    role: "London No. 1 Lake Park",
    image: "London No. 1 Lake Park",
  },
  {
    key: "3",
    fullName: "Joe",
    description: "Green",
    role: "Sidney No. 1 Lake Park",
    image: "London No. 1 Lake Park",
  },
];

const PartnersContect = (props) => {
  return (
    <div>
      <h3 style={{ textAlign: "center", padding: "10px" }}> שותפים </h3>
      <div
        style={{ textAlign: "right", fontSize: "24px", paddingBottom: "10px" }}
      >
        <AddModal />
      </div>

      <Table dataSource={data}>
        <Column title="שם מלא" dataIndex="fullName" key="fullName" />
        <Column title="תיאור" dataIndex="description" key="description" />
        <Column title="תמונה" dataIndex="role" key="role" />
        <Column title="תמונה" dataIndex="image" key="image" />

        <Column
          title="Action"
          key="action"
          render={(text, record) => (
            <div className="action-buttons">
              <Space size="small">
                <EditModal />
                <DeleteModal stuffMemberName={record.fullName} />
              </Space>
            </div>
          )}
        />
      </Table>
    </div>
  );
};
export default PartnersContect;
