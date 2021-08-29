import "./Form.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useState } from "react";


const LoginForm = () => {

  const [values,setValues] = useState({
    email:"",
    password:""
  });

  const handleChange = (e)=>{
    setValues({
      ...values,
      [e.target.name] : e.target.value
    })
   
  }

  const formHandleSubmit = (e)=>{
    e.preventDefault();
    console.log(values);
  }

 

  
  

  return (
    <form class="login-form" action="./"  >
      <div class="login-form__content">
        <div class="login-form__header">התחברות לאתר</div>
        <Input type="email" name="email" placeholder="אימייל"  handleChange={handleChange}/>
        <Input type="password" name="password" placeholder="סיסמא" handleChange={handleChange}/>
        <Button className="form-button" type="submit" text="התחברות" onClick={formHandleSubmit}/>
        <div class="login-form__links">
          <a class="login-form__link" href="./">
            ? שחכתה סיסמא 
          </a>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
