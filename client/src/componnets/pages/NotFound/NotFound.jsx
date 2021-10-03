import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="notfound-card">
        <div className="notfound-card-img-container">
          <img src="./empowering_logo2.png" alt="vision-vector" id="img-card" />
        </div>
        <div className="notfound-card-body">
          <div className="notfound-header">
            <div className="notfound-header-decoration"></div>
            <h3 className="notfound-card-title" style={{ color: "black" }}>
              שגיאה 404{" "}
            </h3>
          </div>
          <div className="notfound-card-description">
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
