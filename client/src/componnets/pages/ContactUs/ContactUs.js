import "./ContactUs.css";
import React, { useState } from "react";
import Input from "../../features/Input/Input";
import ButtonComponent from "../../features/Button/ButtonComponent";
import { Select } from "antd";
import { addContactUsInformation } from '../../../service/contactUs-service';

const { Option } = Select;

export default function ContactU() {


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
    <div className="contactConraier">
    <div className="contact">
      <div className="formDetails">
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
            className="contactInput"
            handleChange={getEmail}
          />
          <label>תיאור</label>
          <textarea
            name="message"
            className="contactInput"
            style={{
              width: "200px",
              height: "100px",
              borderRadius: "5px",
              margin: "5px",
              backgroundColor:"white",
              border: "2px solid #dddddd"
            }}
            required
            onChange={getContent}
          />
          <ButtonComponent className="formButton" type="submit" text="שלח" onClick={() => { addContactUsInformation(inquiry, email, content) }} />
        </form>
        </div>
      
      <div className="formImg">
      <img src="./contactUs.jpg" alt="image"></img>
      </div>
    </div>
    </div>
  );
}
