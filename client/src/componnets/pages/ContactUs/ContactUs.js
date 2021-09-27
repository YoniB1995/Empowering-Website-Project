import "./ContactUs.css"
import React, { useState } from 'react';
import Input from "../../features/Input/Input";
import ButtonComponent from "../../features/Button/ButtonComponent";
import { Select } from 'antd';
const { Option } = Select;


export default function ContactU() {
const handleSubmit=(e)=>{
  e.preventDefault();

}
  return (
    <form className="contact-form" onSubmit={handleSubmit} >
      <h1>יצירת קשר</h1>
      <label> סיבת פנייה</label>
      <Select className="select">
        <Option value="חבר מועדון">חבר מועדון</Option>
        <Option value="אחר">אחר</Option>
      </Select>
      <label>אימייל</label>
      <Input type="email" name="user_email" className="contact" />
      <label>תיאור</label>
      <textarea name="message" className="contact" style={{ width: "340px", height: "100px", borderRadius: "5px", margin: "5px" }} required />
      <ButtonComponent className="form-button" type="submit" text="שלח" />
    </form>
  );
}



































