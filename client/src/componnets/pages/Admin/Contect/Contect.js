<<<<<<< HEAD
import { Table } from "antd";
import PartnersContect from "./Partners-Contect";
import ProgramsContect from "./Programs-Contect";
import StaffContect from "./Staff-Contect";
// import AdminNavBar from "../../Features/Admin-Nav/Admin-Navbar";
=======
import { Table } from 'antd';
import PartnersContect from './Partners-Contect';
import ProgramsContect from './Programs-Contect';
// import StaffContect from './Staff-Contect';
import EditableTable from './EditableTable/EditableTable';
import AdminNavBar from '../../../features/Admin/Admin-Nav/Admin-Navbar';
>>>>>>> d88b2420d03e0bfb43d9a8a1254b5ed63284a767

const { Column, ColumnGroup } = Table;

const Contect = () => {
  return (
    <>
<<<<<<< HEAD
      <StaffContect />
=======
      <AdminNavBar />
      {/* <StaffContect /> */}
      <EditableTable />
>>>>>>> d88b2420d03e0bfb43d9a8a1254b5ed63284a767
      <ProgramsContect />
      <PartnersContect />
    </>
  );
};
export default Contect;
