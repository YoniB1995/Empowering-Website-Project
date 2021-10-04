import TeamTable from './EditableTable/Team/Table';
import ContactTable from './EditableTable/ContactTable/Table';
import PlansTable from './EditableTable/Plans/Table';
import NewsLettersUserTable from '../../../features/Admin/NewsLetters-User-table';
import { ProtectedRoute } from '../../../../AppRouter/ProtectedRoute';
const Contect = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>צוות</h1>
      <TeamTable />
      <h1 style={{ textAlign: 'center' }}>פניות</h1>
      <ContactTable />
      <h1 style={{ textAlign: 'center' }}>תכניות</h1>
      <PlansTable />
      <h1 style={{ textAlign: 'center' }}>רשימת תפוצה</h1>
      <NewsLettersUserTable />
    </>
  );
};
export default Contect;
