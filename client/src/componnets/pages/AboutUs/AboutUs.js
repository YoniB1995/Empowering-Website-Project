import React from "react"
import Goals from "../Home/goals/Goals";
import Vision from "../Home/vision/Vision";
import "./AboutUs.css"
import Staff from "./staff/Staff";

const AboutUs = ()=>{

    return(
        <div>
            <Vision/>
            <Goals/>
            <Staff/>
            

        </div>
    )
}

export default AboutUs;