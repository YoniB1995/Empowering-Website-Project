import React from 'react'
import Review from './Review'
import './checkOut.css'


const PaymentForm =({checkOutToken , backStep,next,timeOut})=> {
    return (
        <div>
            <Review checkOutToken={checkOutToken} backStep={backStep} next={next} timeOut={timeOut}/>
            <div  className="btnPayment">
                <button className="btnBack" onClick={backStep}>חזרה</button>
                <button className="btnCheck" type="submit" onClick={()=>{next()}}>{checkOutToken.live.subtotal.formatted_with_symbol}לתשלום</button>
        </div>
        </div>
    )
}
export default PaymentForm


