import React, { useState, Fragment, useEffect } from 'react';
import { nanoid } from 'nanoid';
import axios from 'axios';
import './Table.css';
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';

const Table = () => {
  const [filterClick, setFilterClick] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [file, setFile] = useState('');

  const [addFormData, setAddFormData] = useState({
    fullname: '',
    description: '',
    role: '',
    image: '',
    lang: '',
  });

  const [editFormData, setEditFormData] = useState({
    fullname: '',
    description: '',
    role: '',
    image: '',
    lang: '',
  });

  useEffect(() => {
    fetch('http://localhost:5000/team/hebrew')
      .then((res) => res.json())
      .then((data) => setContacts(data.team));
  }, []);

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    if (event.target.name === 'image') {
      setFile(event.target.files[0]);
    }
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
      fullname: addFormData.fullname,
      description: addFormData.description,
      role: addFormData.role,
      image: addFormData.image,
      lang: addFormData.lang,
    };

    fetch('http://localhost:5000/team/new', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newContact),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      fullname: editFormData.fullname,
      description: editFormData.description,
      role: editFormData.role,
      image: editFormData.image,
      lang: editFormData.lang,
    };
    fetch(`http://localhost:5000/team/edit/${editContactId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editedContact),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    const newContacts = [...contacts];

    const index = contacts.findIndex(
      (contact) => contact._id === editContactId
    );

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact._id);

    const formValues = {
      fullname: contact.fullname,
      description: contact.description,
      role: contact.role,
      image: contact.image,
      lang: contact.lang,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact._id === contactId);

    newContacts.splice(index, 1);
    fetch(`http://localhost:5000/team/${contactId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

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

  const insertProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    const res = await axios.post('http://localhost:5000/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    const { fileName, filePath } = await res.data;
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
              חודש
            </p>
            <p
              onClick={() => {
                setFilterClick((old) => !old);
                handleFilter(week);
              }}
            >
              שבוע
            </p>
            <p
              onClick={() => {
                setFilterClick((old) => !old);
                handleFilter(day);
              }}
            >
              יום
            </p>
          </div>
        )}
        <table>
          <thead>
            <tr>
              <th>שם מלא</th>
              <th>תיאור</th>
              <th>תפקיד</th>
              <th>תמונה</th>
              <th>פעולות</th>
            </tr>
          </thead>
          <tbody>
            {contacts?.map((contact) => (
              <Fragment>
                {editContactId === contact._id ? (
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

      <h2>הוסף חבר צוות</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type='text'
          name='fullname'
          required='required'
          placeholder='שם מלא'
          onChange={handleAddFormChange}
        />
        <input
          type='text'
          name='description'
          required='required'
          placeholder='תיאור'
          onChange={handleAddFormChange}
        />
        <input
          type='text'
          name='role'
          required='required'
          placeholder='תפקיד'
          onChange={handleAddFormChange}
        />
        <input
          className='login-form__input'
          type='file'
          name='image'
          onChange={handleAddFormChange}
        />
        <input
          type='text'
          name='lang'
          required='required'
          placeholder='english/hebrew'
          onChange={handleAddFormChange}
        />
        <button type='submit'>הוסף</button>
      </form>
    </div>
  );
};

export default Table;
