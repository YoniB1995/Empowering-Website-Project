import { Card } from "antd";
import './staff.css'
import { useState } from "react";


const { Meta } = Card;

const Staff = () => {
    const [cardOnHover,setCardOnHover]=useState(false)
    
      const titleDisplay=cardOnHover?"visible":"hidden"
      

      const imgOnMouseHover=()=>{
        setCardOnHover(true)

      }
      const imgOnMouseOut=()=>{
        setCardOnHover(false)


      }
     
    
  return (
    <div>
        <h1>{titleDisplay}</h1>
      <Card
      className="staff-card"
        hoverable
        style={{width:240,border:"none"}}
        cover={
          <img
          onMouseOver={imgOnMouseHover}
          onMouseOut={imgOnMouseOut}
           style={{borderRadius:"100%",width:"200px",height:"200px",margin:"auto"}}
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" className="card-title" style={{background:"red",visibility:titleDisplay}}/>
      </Card>{" "}
    </div>
  );
};

export default Staff;
