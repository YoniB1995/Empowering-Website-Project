import "./ContactUs.css";
import React, { useState } from "react";
import Input from "../../features/Input/Input";
import ButtonComponent from "../../features/Button/ButtonComponent";
import { Select } from "antd";
import {addContactUsInformation} from '../../../service/contactUs-service';
import { useTranslation } from "react-i18next";

const { Option } = Select;

export default function ContactU() {

  const {t} = useTranslation();


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
      <h1>{t("contact")}</h1>
      <label> {t("Cause of appeal")}</label>
      <Select onSelect={getInquiry} className="select">
        <Option value={t("club member")}>{t("club member")}</Option>
        <Option value={t("Other")}>{t("Other")}</Option>
      </Select>
      <label>{t("Email")}</label>
      <Input
        type="email"
        name="user_email"
        className="contact"
        handleChange={getEmail}
      />
      <label>{t("Description")}</label>
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
      <ButtonComponent className="form-button" type="submit" text={t("click")} onClick={()=>{addContactUsInformation(inquiry,email,content)}}/>
    </form>
  );
}
