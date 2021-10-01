import React, { useState } from 'react';
import Input from '../features/Input/Input';
import ButtonComponent from '../features/Button/ButtonComponent';
import './adressForm.css'
import { cardUser } from '../../service/card-service';

const AddressForm =({checkOutToken,next})=> { 
    // const checkInput =(e)=>{
    //     {e.target.value.length > 1 ? console.log("כרטיסך שמור במערכת"):<p>אנא מלא את כל הפרטים</p>}
    // }
    // const [user,setUser] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        next();
      };
    
      const [fullName, setFullName] = useState("");
      const [email, setEmail] = useState("");
          
      const getFullName = (e) => {
        setFullName(e.target.value);
      };
      const getEmail = (e) => {
        setEmail(e.target.value);
      };
         
    return (
     <div>
     <form className="adress-form" onSubmit={handleSubmit}  >
      <label> שם פרטי</label>
      <input type="text" name="fullName" className="formInput" onChange={getFullName} />
      {/* <label>שם משפחה</label>
      <input type="text" name="lName" className="formInput" onChange={handleSubmit}/> */}
      <label>אימייל</label>
      <input type="email" name="email" className="formInput" onChange={getEmail}/>
      {/* <label>עיר מגורים</label>
      <Input type="text" name="city" className="formInput"/>
      <label>כתובת</label>
      <Input type="text" name="country" className="formInput"/> */}
      <ButtonComponent  type="submit" text="הבא" onClick={()=>{cardUser(fullName,email)}} />
      
</form>
</div>
    )
}

export default AddressForm
