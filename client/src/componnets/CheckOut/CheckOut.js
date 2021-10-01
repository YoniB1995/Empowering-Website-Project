import React, { useEffect, useState } from "react";
import { Steps } from "antd";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import  { commerce } from "../pages/commerce/Commerce";
import './checkOut.css'
import ButtonComponent from "../features/Button/ButtonComponent";
import { Link } from "react-router-dom";
const { Step } = Steps;

const steps = ["פרטי הלקוח","פרטי תשלום"]

const CheckOut = ({cart,handleEmptyCart}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [formData,setFormData]=useState();
  const [isFinished,setIsFinished]=useState(false);


useEffect(()=>{
  const checkOutToken= async ()=>{
    try{
    const token=await commerce.checkout.generateToken(cart.id,{type:"cart"})
    console.log(token)
    setCheckoutToken(token)
    }
    catch(error) {
      console.log(error)
    }
  }
  checkOutToken()
},[cart])

const timeOut=()=>{
  setTimeout(()=>{
    setIsFinished(true)
  },3000);
}

const nextStep = ()=>{ setActiveStep ((prevActiveStep)=> prevActiveStep +1 )};
const backStep = ()=>{ setActiveStep ((backActiveStep)=> backActiveStep -1 )};

  const Form =()=> activeStep===0 ? <AddressForm checkOutToken={checkoutToken} next={next}/>:<PaymentForm checkOutToken={checkoutToken} backStep={backStep} next={next} timeOut={timeOut}/>  
  const Confirmation =()=>{ return <div className="confDiv">
    <h1>תודה על רכישתכם</h1>
   <Link to='/'><button>חזרה לדף הבית</button></Link> 
   
  </div>}

  const next = (data)=>{
    setFormData(data);
    nextStep();
  }
  // console.log(formData);

  return (
    <div className="checkOutDiv">
      <h1 className="checkOutHeader" >קופה</h1>
      <Steps current={activeStep} >
        {steps.map((step)=>{ return <Step title={step}></Step>
        })}
      </Steps>
      {activeStep === steps.length ? <Confirmation handleEmptyCart={handleEmptyCart}/> : <Form/>}
    </div>
  );
};
export default CheckOut ;

// return (
//   <div className="checkOutDiv">
//     <h1 className="checkOutHeader" >קופה</h1>
//     <Steps current={activeStep} >
//       <Step title="פרטי הלקוח" description="אנא מלא את הפרטים לביצוע הרכישה" />
//       <Step
//         title="פרטי תשלום"
//         // subTitle="Left 00:00:08"
//         description="אנא הכנס את פרטי הכרטיס וחכה לאישור העסקה"
//       />
//       {/* <Step title= "סיום התהליך" description="התשלום בוצע בהצלחה" /> */}
//     </Steps>
//     {activeStep === Steps.}
//   </div>
// );
// };
// export default CheckOut ;