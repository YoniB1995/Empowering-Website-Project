import React, { useState } from 'react';
import ButtonComponent from '../features/Button/ButtonComponent';
import './adressForm.css'
import { cardUser } from '../../service/card-service';

const AddressForm = ({ checkOutToken, next }) => {
  const [fullname, setFullName] = useState();
  const [email, setEmail] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    next();
  };

  const saveFullName = (e) => {
    setFullName(e.target.value);
  };

  const setEmailDetails = (e) => {
    setEmail(e.target.value);
  };

  const userDetails = {
    card: {
      fullName: fullname,
      email: email
    }

  };
  return (
    <div className="adressContainer">
      <form className="adressForm" onSubmit={handleSubmit}  >
        <label>שם מלא</label>
        <input type="text" name="fullName" className="formInput" onChange={saveFullName} />
        <label>אימייל</label>
        <input type="email" name="email" className="formInput" onChange={setEmailDetails} />
        <ButtonComponent className="storeBtnForm"  type="submit" text="הבא" onClick={() => { cardUser(userDetails) }} ></ButtonComponent>
      </form>
    </div>
  )
}
export default AddressForm
