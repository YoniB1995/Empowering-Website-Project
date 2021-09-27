import "./goals.css";
import "animate.css";
import { Button, Card } from "antd";
import { useEffect } from "react";
import WOW from "wowjs";
import {useTranslation} from "react-i18next"

const Goals = () => {
  const {t} = useTranslation();
  return (
      <div className="card">
        <div className="card-body">
          <div className="header">
            <div className="header-decoration"></div>
            <h3 className="card-title">{t("Goals")}</h3>
          </div>
          <div className="card-description">
            <div>
            {t("GoalsInfo")}
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
                marginTop: "20px",
              }}
            >
              קרא עוד
            </Button>
          </div>
        </div>
        <div className="img-container">
          <img src="./goals-vector.jpg" alt="goals-vector" id="img-goals" />
        </div>
      </div>
  );
};

export default Goals;
