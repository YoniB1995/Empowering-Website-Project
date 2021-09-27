import "./vision.css";
import "animate.css";
import { Button, Card } from "antd";
import { useEffect } from "react";
import WOW from "wowjs";
import {useTranslation} from "react-i18next"

const Vision = () => {
  const {t} = useTranslation();
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <div className="wrapper">
      <div className="card">
        <div className="img-container">
          <img src="./vision-vector.jpg" alt="vision-vector" id="img-vision" />
        </div>
        <div className="card-body">
          <div className="header">
          <div className="header-decoration"></div>
          <h3 className="card-title">{t("vision")}</h3>
          </div>
          <div className="card-description">
            <div>
            
            {t("visionInfo")}
            
            </div>
            <Button
              className="about-us-home-btn"
              size="middle"
              shape="round"
              style={{
                background: "#f5ad88",
                borderColor: "#f5ad88",
                color: "white",
                width: "100px",
                marginTop:"20px"
              }}
            >
              קרא עוד
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
