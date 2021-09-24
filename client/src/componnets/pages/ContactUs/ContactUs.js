import "./ContactUs.css"
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Input from "../../features/Input/Input";
import Button from "../../features/Button/ButtonComponent";

const Result = ()=>{
    return(
    <p>
        הפנייה נשלחה בהצלחה ומחכה לטיפול 
    </p>)
}


export default function ContactUs() {

    const [result,showResult] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_x0t079f', 'template_hd5sd1b', e.target, 'user_SOzAQnowdiifBWI9s7QPh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true);
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <label>סיבת פנייה</label>
      <Input type="text" name="description" />
      <label>אימייל</label>
      <Input type="email" name="user_email" />
      <label>תיאור</label>
      <textarea name="message" style={{width:"400px",height:"100%",borderRadius:"5px",margin:"5px"}}/>
      <Button className="form-button" type="submit" text="שלח"/>
      <div>{ result ? <Result/> : null }</div>
    </form>
  );
}

