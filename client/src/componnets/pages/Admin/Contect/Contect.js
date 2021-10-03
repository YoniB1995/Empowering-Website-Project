import TeamTable from './EditableTable/Team/Table';
import ContactTable from './EditableTable/ContactTable/Table';
import PlansTable from './EditableTable/Plans/Table';
import AdminNavBar from '../../../features/Admin/Admin-Nav/Admin-Navbar';

const Contect = () => {
  return (
    <>
      <AdminNavBar />
      <h1>צוות</h1>
      <TeamTable />
      <h1>פניות</h1>
      <ContactTable />
      <h1>תכניות</h1>
      <PlansTable />
    </>
  );
};
export default Contect;
