import { Table } from "antd";
import "antd/dist/antd.css";
import Filter from "../../../features/Admin/Filter";
import ReadModal from "../../../features/Admin/Modal/Read-Modal";
import "../../Admin/Admin.css";
const { Column, ColumnGroup } = Table;
const data = [
  {
    key: "1",
    firstName: "John",
    lastName: "Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    firstName: "Jim",
    lastName: "Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "1",
    firstName: "John",
    lastName: "Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    firstName: "Jim",
    lastName: "Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const Contact = () => {
  return (
    <div>
      <h3 style={{ textAlign: "center" }}> פניות </h3>

      <Table dataSource={data}>
        <Column title="איימל" dataIndex="lastName" key="lastName" />
        <Column
          title={
            <div>
              <span style={{ padding: "10px" }}>סיבת פנייה</span>
              <Filter
                firstOption="הכל"
                secondOption="חבר מועדון"
                thirdOption="אחר"
              />
            </div>
          }
          dataIndex="lastName"
          key="lastName"
        />
        <Column
          title={
            <div>
              <span style={{ padding: "10px" }}>סטטוס פנייה</span>
              <Filter
                firstOption="הכל"
                secondOption="פתוח"
                thirdOption="סגור"
              />
            </div>
          }
          dataIndex="lastName"
          key="lastName"
        />
        <Column
          title="תוכן הפנייה"
          key="content"
          render={(text, record) => (
            <ReadModal
              contactPersonName={record.firstName}
              contactText={record.address}
            />
          )}
        />
      </Table>
    </div>
  );
};
export default Contact;
