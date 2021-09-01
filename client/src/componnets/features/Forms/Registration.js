import "./Form.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import passwordValidator from 'password-validator';
import { pick } from 'lodash';


const schema = new passwordValidator();
 

schema
.is().min(6)                              
.is().max(99)                             
.has().uppercase()                            
.has().lowercase()                            

const errorsMessages = {
  min: 'הסיסמא צריכה לכלול 6 תווים ומעלה',
  max: 'הסיסמא לא יכולה לכלול מעל 99 תווים',
  uppercase: 'הסיסמא צריכה לכלול אותיות גדולות',
  lowercase: 'הסיסמא צריכה לכלול אותיות קטנות'
}

const RegistrasionForm = () => {

  const [passwordError, setPasswordError] = useState([]);
  
  const [values,setValues] = useState({
    email:"",
    password:"",
    userName:""
  });

  const handleChange = (e)=>{
      setValues({
      ...values,
      [e.target.name] : e.target.value
    })
   
}


  useEffect(()=>{
      if(values.password){
    const errors = schema.validate(values.password, { list: true }); 
    if(errors.length > 0){
      const newErrors = pick(errorsMessages, errors);
      const errorMessagesArray = Object.values(newErrors)
      setPasswordError(errorMessagesArray)
    }else{
      setPasswordError({})
    }
}
  },[values.password])

  return (
    <form class="login-form" action="localhost:8080//admin/logIn" method="POST">
      <div class="login-form__content">
        <div class="login-form__header">הרשמה</div>
        <Input type="text" name="userName" placeholder="שם משתמש"  handleChange={handleChange}/>
        <Input type="email" name="email" placeholder="אימייל"  handleChange={handleChange}/>
        <Input type="password" name="password" placeholder="סיסמא"  handleChange={handleChange}/>
        { passwordError.length > 0 && passwordError.map(errorMessage => <div style={{color:"red",fontSize:12}}>{errorMessage}</div>)}


        <Button className="form-button" type="submit" text="הרשמה" onClick={()=>{console.log(values)}} disabled={passwordError.length > 0} />
        <div class="login-form__links">
        </div>
      </div>
    </form>
  );
};

export default RegistrasionForm;