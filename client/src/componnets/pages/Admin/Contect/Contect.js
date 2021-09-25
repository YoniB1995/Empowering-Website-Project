import { Table } from "antd";
import PartnersContect from "./Partners-Contect";
import ProgramsContect from "./Programs-Contect";
import StaffContect from "./Staff-Contect";
// import AdminNavBar from "../../Features/Admin-Nav/Admin-Navbar";

const { Column, ColumnGroup } = Table;

const Contect = () => {
  return (
    <>
      <StaffContect />
      <ProgramsContect />
      <PartnersContect />
    </>
  );
};
export default Contect;
