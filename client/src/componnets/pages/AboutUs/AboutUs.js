import React from "react"
import VerticalImgCard from "../../features/vertical-img-card/VerticalImgCard";
import Copartner from "../Home/Copartners/Copartners";
import Goals from "../Home/goals/Goals";
import Vision from "../Home/vision/Vision";
import "./AboutUs.css"
import Staff from "./staff/Staff";
import Volunteers from "./volunteers/Volunteers";

const AboutUs = ()=>{

    return(
        <div className="aboutus-wrapper" >
            <Staff/>
            <Volunteers/>
            <div style={{display:"flex"}}>
                <VerticalImgCard img="./target.png"/>
                <VerticalImgCard img="./target.png"/>
                <VerticalImgCard img="./target.png"/>
                <VerticalImgCard img="./target.png"/>

            </div>
            <Copartner/>
            

        </div>
    )
}

export default AboutUs;