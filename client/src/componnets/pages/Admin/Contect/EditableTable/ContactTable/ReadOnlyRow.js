import React from 'react';

const ReadOnlyRow = ({ contact, handleChange, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.inquiry}</td>
      <td>{contact.email}</td>
      <td>{contact.content}</td>
      <td>{contact.notes}</td>
      <td>{contact.date}</td>
      <td>
        <input
          type='checkbox'
          onChange={handleChange}
          checked={contact.iscompleted}
        />
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
