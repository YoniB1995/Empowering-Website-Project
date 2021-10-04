import React, {useState,useEffect} from "react";
import "./copartner.css";
import "animate.css";
import {getAllPartners} from '../../../../service/partners-service'
import WOW from "wowjs";
import { useTranslation } from "react-i18next";

const Copartner = () => {
  const {t} = useTranslation();
  const [partners,setPartners] = useState([]);

  useEffect(()=>{
    getAllPartners()
    .then(res => res.json())
    .then(data => setPartners(data.partners))
  },[])

  return (
    <div className="copartner-container">
      <div className="copartner-header">
        <h3>{t("Partners")}</h3>
        <div className="copartner-header-decortion"></div>
      </div>
      <div className="copartner-wrapper">
          {partners.map((partner)=>
      <div className="animate__animated animate__fadeInUp">
        <div className="copartner-logo-container">
        <img className="copartner-logo" src={partner.image} alt={partner.name} />
        </div>
        </div>
          )}
        
      </div>
    </div>
  );
};
export default Copartner;
