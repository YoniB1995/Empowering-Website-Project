import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="vertical-card">
        <div className="vertical-card-img-container">
          <img src="./empowering_logo2.png" alt="vision-vector" id="img-card" />
        </div>
        <div className="vertical-card-body">
          <div className="header">
            <div className="header-decoration"></div>
            <h3 className="vertical-card-title" style={{ color: "black" }}>
              שגיאה 404{" "}
            </h3>
          </div>
          <div className="vertical-card-description">
            {" "}
            <div>הקישור לא זמין / לא קיים. </div>
            <Link to="/">בחזרה לדף הבית</Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
