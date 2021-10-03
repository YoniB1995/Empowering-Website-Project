import TeamTable from './EditableTable/Team/Table';
import ContactTable from './EditableTable/ContactTable/Table';
import PlansTable from './EditableTable/Plans/Table';

const Contect = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>צוות</h1>
      <TeamTable />
      <h1 style={{ textAlign: 'center' }}>פניות</h1>
      <ContactTable />
      <h1 style={{ textAlign: 'center' }}>תכניות</h1>
      <PlansTable />
    </>
  );
};
export default Contect;
