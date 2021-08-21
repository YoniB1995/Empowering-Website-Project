import "./Form.css";
import Input from "../features/Input/Input";
import Button from "../features/Button/Button";
import {Link } from 'react-router-dom';
import React, {useState} from 'react'

const ForgotPasswordForm = () => {
  const [one,setOne] = useState('')
  return (
    <form class="login-form" action="./" method="POST">
      <div class="login-form__content">
        <div class="login-form__header"><Link to="/">Login to your account</Link></div>
        <Input type="email" name="email" placeholder="Email" />
        <Button className="form-button" type="submit" text="Send" />
        <div class="login-form__links">
        </div>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;