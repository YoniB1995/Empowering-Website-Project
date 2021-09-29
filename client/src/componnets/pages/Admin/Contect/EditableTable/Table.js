import React, { useState, Fragment } from 'react';
import { nanoid } from 'nanoid';
import './Table.css';
import data from './mock-data.json';
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';

const Table = () => {
  const [filterClick, setFilterClick] = useState(false);
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: '',
    date: '',
    phoneNumber: '',
    email: '',
  });

  const [editFormData, setEditFormData] = useState({
    fullName: '',
    date: '',
    phoneNumber: '',
    email: '',
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      date: addFormData.date,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      date: editFormData.date,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      date: contact.date,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  let month = -2802041032;
  let week = -642099029;
  let day = -123744998;

  const handleFilter = (filterDate) => {
    setContacts(
      contacts.filter((a) => new Date(a.date) - new Date() > filterDate)
    );
  };

  return (
    <div className='app-container'>
      <form onSubmit={handleEditFormSubmit}>
        {filterClick && (
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
                setFilterClick((old) => !old);
                handleFilter(month);
              }}
            >
              last month
            </p>
            <p
              onClick={() => {
                setFilterClick((old) => !old);
                handleFilter(week);
              }}
            >
              last week
            </p>
            <p
              onClick={() => {
                setFilterClick((old) => !old);
                handleFilter(day);
              }}
            >
              last day
            </p>
            <p
              onClick={() => {
                setContacts(data);
              }}
            >
              all
            </p>
          </div>
        )}
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th onClick={() => setFilterClick((old) => !old)}>date</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type='text'
          name='fullName'
          required='required'
          placeholder='Enter a name...'
          onChange={handleAddFormChange}
        />
        <input
          type='text'
          name='date'
          required='required'
          placeholder='Enter an addres...'
          onChange={handleAddFormChange}
        />
        <input
          type='text'
          name='phoneNumber'
          required='required'
          placeholder='Enter a phone number...'
          onChange={handleAddFormChange}
        />
        <input
          type='email'
          name='email'
          required='required'
          placeholder='Enter an email...'
          onChange={handleAddFormChange}
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

export default Table;
