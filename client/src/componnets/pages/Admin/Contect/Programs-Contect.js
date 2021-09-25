import { Table, Space } from "antd";
import DeleteModal from "../../../features/Admin/Modal/Delete-Modal";
import EditModal from "../../../features/Admin/Modal/Edit-Modal";
import AddModal from "../../../features/Admin/Modal/Add-Modal";
import "antd/dist/antd.css";


const { Column, ColumnGroup } = Table;
const data = [
  {
    key: '1',
    title: 'John',
    description: 'Brown',
    createdAt: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    title: 'Jim',
    description: 'Green',
    createdAt: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    title: 'Joe',
    description: 'Black',
    createdAt: 'Sidney No. 1 Lake Park',
  },
  {
    key: '1',
    title: 'John',
    description: 'Brown',
    createdAt: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    title: 'Jim',
    description: 'Green',
    createdAt: 'London No. 1 Lake Park',
    image: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    title: 'Joe',
    description: 'Green',
    createdAt: 'Sidney No. 1 Lake Park',
    image: 'London No. 1 Lake Park',
  },
];

const inputPlaceHolders = ['title', 'description', 'createdAt', 'image'];
const ProgramsContect = () => {
  return (
    <div>
      <h3 style={{ textAlign: 'center' }}> תוכניות </h3>
      <div
        style={{ textAlign: 'right', fontSize: '24px', paddingBottom: '10px' }}
      >
        <AddModal inputPlaceHolders={inputPlaceHolders} />
      </div>

      <Table dataSource={data}>
        <Column title='כותרת' dataIndex='title' key='title' />
        <Column title='תיאור' dataIndex='description' key='description' />
        <Column title='תגית' dataIndex='createdAt' key='createdAt' />
        <Column title='נוסדה' dataIndex='address' key='address' />
        <Column
          title='Action'
          key='action'
          render={(text, record) => (
            <div className='action-buttons'>
              <Space size='small'>
                <EditModal />
                <DeleteModal stuffMemberName={record.firstName} />
              </Space>
            </div>
          )}
        />
      </Table>
    </div>
  );
};
export default ProgramsContect;
