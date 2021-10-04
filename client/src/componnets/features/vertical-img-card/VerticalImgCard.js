import "./vertical-img-card.css";
import WOW from "wowjs";
import "animate.css"
import { useEffect } from "react";

const VerticalImgCard = (props) => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  const { title, img, description } = props;
  console.log(title)
  return (
    <div className="vertical-card animate__animated animate__fadeInUp">
      <div className="vertical-card-img-container">
        <img src={img} alt="vision-vector" id="img-card" />
      </div>
      <div className="vertical-card-body" style={title=="Goals" || "Vision" ?{display:"flex",flexDirection:"row",fontSize:"15px"}: {display:"flex"} }>
        <div className="header">
          <div className="header-decoration" ></div>
          <h3 className="vertical-card-title" style={{color:"black"}}>{title}</h3>
        </div>
        <div className="vertical-card-description">{description}</div>
      </div>
    </div>
  );
};

export default VerticalImgCard;


const obj=<div><p>"hello"</p><p>"hello"</p></div>
