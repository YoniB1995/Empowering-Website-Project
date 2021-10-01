import React, { useState, Fragment, useEffect } from 'react';
import { nanoid } from 'nanoid';
import './Table.css';
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';

const Table = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [filterDate, setFilterDate] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [all, setAll] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/contactUs/getAllContactInformation')
      .then((res) => res.json())
      .then((data) => {
        setContacts(data.contactInformation);
        setAll(data.contactInformation);
      });
  }, []);

  const handleChange = (contact) => {
    contact.iscompleted = !contact.iscompleted;
    let id = contact._id;
    delete contact._id;
    delete contact.__v;
    fetch(`http://localhost:5000/contactUs/updateContactUs/${id}`, {
      method: 'PUT',
      body: JSON.stringify(contact),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    fetch('http://localhost:5000/contactUs/getAllContactInformation')
      .then((res) => res.json())
      .then((data) => {
        setContacts(data.contactInformation);
        setAll(data.contactInformation);
      });
  };

  let month = -2802041032;
  let week = -642099029;
  let day = -123744998;

  const filterDateFunc = (filterDate) => {
    setContacts(
      contacts.filter((a) => new Date(a.date) - new Date() > filterDate)
    );
  };

  const filterOpenFunc = (filterDate) => {
    setContacts(contacts.filter((a) => a.iscompleted === filterDate));
  };

  return (
    <div className='app-container'>
      <form>
        {filterOpen && (
          <div
            style={{
              background: 'white',
              position: 'fixed',
              top: '50%',
              left: '50%',
              border: '2px solid black',
              zIndex: '1111',
            }}
          >
            <p
              onClick={() => {
                setFilterOpen((old) => !old);
                filterOpenFunc(true);
              }}
            >
              טופל
            </p>
            <p
              onClick={() => {
                setFilterOpen((old) => !old);
                filterOpenFunc(false);
              }}
            >
              לא טופל
            </p>
            <p
              onClick={() => {
                setFilterOpen((old) => !old);
                setContacts(all);
              }}
            >
              הכל
            </p>
          </div>
        )}
        {filterDate && (
          <div
            style={{
              background: 'white',
              position: 'fixed',
              top: '50%',
              left: '50%',
              border: '2px solid black',
              zIndex: '1111',
            }}
          >
            <p
              onClick={() => {
                setFilterDate((old) => !old);
                filterDateFunc(month);
              }}
            >
              חודש
            </p>
            <p
              onClick={() => {
                setFilterDate((old) => !old);
                filterDateFunc(week);
              }}
            >
              שבוע
            </p>
            <p
              onClick={() => {
                setFilterDate((old) => !old);
                filterDateFunc(day);
              }}
            >
              יום
            </p>
            <p
              onClick={() => {
                setFilterDate((old) => !old);
                setContacts(all);
              }}
            >
              הכל
            </p>
          </div>
        )}
        <table>
          <thead>
            <tr>
              <th>סיבת פנייה</th>
              <th>אימייל</th>
              <th>תוכן</th>
              <th>הערות</th>
              <th onClick={() => setFilterDate((old) => !old)}>תאריך</th>
              <th onClick={() => setFilterOpen((old) => !old)}>טופל/לא טופל</th>
            </tr>
          </thead>
          {contacts.length === 0 && <h1>אין פניות</h1>}
          <tbody>
            {contacts?.map((contact) => (
              <Fragment>
                <ReadOnlyRow
                  contact={contact}
                  handleChange={() => handleChange(contact)}
                />
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Table;
