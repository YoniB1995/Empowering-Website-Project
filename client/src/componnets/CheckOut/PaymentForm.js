import React from 'react'
import Review from './Review'
import './checkOut.css'

const PaymentForm =({checkOutToken , backStep,next,timeOut})=> {
    return (
        <div>
            <Review checkOutToken={checkOutToken} backStep={backStep} next={next} timeOut={timeOut}/>
            <h1>אמצעי תשלום</h1>
            {/* <div style={{display:"flex",justifyContent:"space-between"}}> */}
            <div>
                <button onClick={backStep}>חזרה</button>
                <button type="submit" onClick={()=>{next()}}>{checkOutToken.live.subtotal.formatted_with_symbol} תשלום </button>
        </div>
        </div>
    )
}
export default PaymentForm
