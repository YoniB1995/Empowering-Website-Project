import React from 'react';

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type='text'
          required='required'
          placeholder='Enter a title...'
          name='title'
          value={editFormData.title}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type='text'
          required='required'
          placeholder='Enter an description...'
          name='description'
          value={editFormData.description}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type='text'
          required='required'
          placeholder='Enter a markdown...'
          name='markdown'
          value={editFormData.markdown}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>{editFormData.createdAt}</td>
      <td>
        <button type='submit'>Save</button>
        <button type='button' onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
