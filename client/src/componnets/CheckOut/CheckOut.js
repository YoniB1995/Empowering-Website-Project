import React, { useEffect, useState } from "react";
import { Steps } from "antd";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import  { commerce } from "../pages/store/Store";
import './checkOut.css'
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
    <h1 className="confirmHeader">! תודה על רכישתך</h1>
    <h4 className="confirmHeader">ברגעים אלו נשלח אלייך מייל עם פרטי ההזמנה</h4>
   <Link to='/'><button className="confirmBtn">חזרה לדף הבית</button></Link> 
  </div>}

  const next = (data)=>{
    setFormData(data);
    nextStep();
  }
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

