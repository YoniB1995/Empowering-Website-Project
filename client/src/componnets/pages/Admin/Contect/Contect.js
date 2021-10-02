import { Table } from 'antd';
import PartnersContect from './Partners-Contect';
import ProgramsContect from './Programs-Contect';
// import StaffContect from './Staff-Contect';
import TeamTable from './EditableTable/Team/Table';
import ContactTable from './EditableTable/ContactTable/Table';
import AdminNavBar from '../../../features/Admin/Admin-Nav/Admin-Navbar';
// import StaffContect from '../Staff-Contect';

const { Column, ColumnGroup } = Table;

const Contect = () => {
  return (
    <>
      <AdminNavBar />
      {/* <StaffContect/> */}
      <h1>צוות</h1>
      <TeamTable />
      <h1>פניות</h1>
      <ContactTable />
      {/* <ProgramsContect /> */}
      {/* <PartnersContect /> */}
    </>
  );
};
export default Contect;
