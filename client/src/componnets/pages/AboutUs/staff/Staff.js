import { Card } from "antd";
import './staff.css'
import { useState } from "react";
import Select from "../../../features/Select/Select";


const { Meta } = Card;

const Staff = () => {
    const [cardOnHover,setCardOnHover]=useState(false)
    
      const titleDisplay=cardOnHover?"visible":"hidden"
      const cardImgStyle=cardOnHover?"#EBEBEB":"#F5AD88"
      

      const imgOnMouseHover=()=>{
        setCardOnHover(true)

      }
      const imgOnMouseOut=()=>{
        setCardOnHover(false)


      }
     
    
  return (
    <div className="card-container">
        
        <h1>{titleDisplay}</h1>
        <div className="staff-header-container">
          <h3 className="staff-title">הכירו את הצוות שלנו</h3>

          <div className="staff-header-decoration"></div>
          </div>
          <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
     <Select/>
     </div>
      <Card
      className="staff-card"
        hoverable
        style={{width:240,border:"none",background:cardImgStyle,}}
        cover={
          <img
          className="staff-img"
          onMouseOver={imgOnMouseHover}
          onMouseOut={imgOnMouseOut}
           style={{borderRadius:"100%",width:"200px",height:"200px",margin:"auto"}}
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" className="card-title" style={{visibility:titleDisplay}}/>
      </Card>{" "}
    </div>
  );
};

export default Staff;
