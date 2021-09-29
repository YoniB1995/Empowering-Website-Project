import "./ContactUs.css";
import React, { useState } from "react";
import Input from "../../features/Input/Input";
import ButtonComponent from "../../features/Button/ButtonComponent";
import { Select } from "antd";
import {addContactUsInformation} from '../../../service/contactUs-service';

const { Option } = Select;

export default function ContactU() {

  const date = Date.now();
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [inquiry, setInquiry] = useState("");

  const getEmail = (e) => {
    setEmail(e.target.value);
  };
  const getContent = (e) => {
    setContent(e.target.value);
  };

  const getInquiry = (selectedValue) => {
    setInquiry(selectedValue);
  };

  console.log(inquiry);
  console.log(email);

  console.log(content);

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h1>יצירת קשר</h1>
      <label> סיבת פנייה</label>
      <Select onSelect={getInquiry} className="select">
        <Option value="חבר מועדון">חבר מועדון</Option>
        <Option value="אחר">אחר</Option>
      </Select>
      <label>אימייל</label>
      <Input
        type="email"
        name="user_email"
        className="contact"
        handleChange={getEmail}
      />
      <label>תיאור</label>
      <textarea
        name="message"
        className="contact"
        style={{
          width: "340px",
          height: "100px",
          borderRadius: "5px",
          margin: "5px",
        }}
        required
        onChange={getContent}
      />
      <ButtonComponent className="form-button" type="submit" text="שלח" onClick={()=>{addContactUsInformation(inquiry,email,content,date)}}/>
    </form>
  );
}
