import React, { useState } from 'react';
import Input from '../features/Input/Input';
import ButtonComponent from '../features/Button/ButtonComponent';
import './adressForm.css'

const AddressForm =({checkOutToken,next})=> { 
    // const checkInput =(e)=>{
    //     {e.target.value.length > 1 ? console.log("כרטיסך שמור במערכת"):<p>אנא מלא את כל הפרטים</p>}
    // }
    const [user,setUser] = useState({});

    const handleSubmit = (e) => {
        setUser({ ...user,[e.target.name]: e.target.value} );
        console.log(user);
      };
         
    return (
     <div>
     <form className="adress-form"  onSubmit={()=>{next()} } onClick={handleSubmit}>
      <label> שם פרטי</label>
      <input type="text" name="fName" className="formInput" onChange={handleSubmit} />
      <label>שם משפחה</label>
      <input type="text" name="lName" className="formInput" onChange={handleSubmit}/>
      <label>אימייל</label>
      <input type="email" name="email" className="formInput" onChange={handleSubmit}/>
      {/* <label>עיר מגורים</label>
      <Input type="text" name="city" className="formInput"/>
      <label>כתובת</label>
      <Input type="text" name="country" className="formInput"/> */}
      <ButtonComponent  type="submit" text="הבא" />
      
</form>
</div>
    )
}

export default AddressForm
