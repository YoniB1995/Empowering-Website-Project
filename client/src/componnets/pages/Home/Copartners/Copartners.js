import React from 'react'
import './copartner.css'
import "animate.css"
import { useEffect } from 'react'
import WOW from 'wowjs';


const Copartner =() =>{
    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
      }, [])
    return (
        <div className="copartnerMain">
            <hr></hr>
            <h1 class="animate__animated animate__backInRight ">שותפים</h1>
            <img src="logo.jpg" class="wow animate__animated animate__backInRight" alt="copartner"></img>
            <img src="logo.jpg" class="wow animate__animated animate__backInRight" alt="copartner"></img>
            <img src="logo.jpg" class="wow animate__animated animate__backInRight" alt="copartner"></img>
            <hr></hr>
        </div>
        
    )  
}
export default  Copartner;
