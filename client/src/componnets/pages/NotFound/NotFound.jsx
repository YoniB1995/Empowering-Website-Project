import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 Error , Page Not Found!</h1>
      <img
        src="https://scontent.fhfa4-1.fna.fbcdn.net/v/t1.6435-9/129759444_104200958220746_6720961362101384791_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=e3f864&_nc_ohc=xIYzthtFmeAAX9CreIi&_nc_ht=scontent.fhfa4-1.fna&oh=c98a72bb61708c1e1e24535ecd7fc679&oe=617ED2C0"
        alt="empowering-women-logo"
      />
      <Link to="/">בחזרה לדף הבית</Link>
    </div>
  );
};

export default NotFound;
