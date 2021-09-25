import { Table, Space } from 'antd';
import EditModal from '../../../features/Admin/Modal/Edit-Modal';
import DeleteModal from '../../../features/Admin/Modal/Delete-Modal';
import 'antd/dist/antd.css';
import AddModal from '../../../features/Admin/Modal/Add-Modal';

const { Column, ColumnGroup } = Table;
const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: 'וועד מנהל',
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: 'מייסדים',
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: 'צוות',
  },
];

const StaffContect = () => {
  return (
    <div>
      <h3 style={{ textAlign: 'center', padding: '10px' }}> צוות </h3>
      <div
        style={{ textAlign: 'right', fontSize: '24px', paddingBottom: '10px' }}
      >
        <AddModal />
      </div>

      <Table dataSource={data}>
        <Column title='שם מלא' dataIndex='firstName' key='firstName' />
        <Column title='תפקיד' dataIndex='lastName' key='lastName' />
        <Column title='תיאור' dataIndex='age' key='age' />
        <Column title='תמונה' dataIndex='address' key='address' />
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
export default StaffContect;
