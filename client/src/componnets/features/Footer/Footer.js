import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Input, Button } from "antd";
import { FacebookOutlined, MailOutlined } from "@ant-design/icons";
import { addMemberToNewsletter } from "../../../service/newsletter-service";
import { useTranslation } from "react-i18next";

import "./Footer.css";


const Footer = () => {
  const { t } = useTranslation();
  const [singletNews, setSingletNews] = useState([]);

  const saveInfoEmail = (e) => {
    setSingletNews(e.target.value);
    console.log(singletNews);
  };

  const handleClick = () => {
    addMemberToNewsletter(singletNews);
    setSingletNews("");
    console.log("success");
  };

  return (
    <div>
      <footer className="page-container">
        <div className="about">
          <div className="footer-header-container">
            <div className="footer-header-decortion"> </div>
            <h4 className="footer-title">{t("about")}</h4>
          </div>
          <div>
            <ul>
              <li>{t("Area of activity")} </li>
              <li> {t("organizationType")} </li>
              <li> {t("Organization number")} </li>
            </ul>
          </div>
        </div>
        <div className="contect">
          <div className="footer-header-container">
            <div className="footer-header-decortion"> </div>
            <h4 className="footer-title">{t("Contact Us")}</h4>
          </div>
          <div className="footer-placeholder-icon-container">
            <img
              src="./placeholder.png"
              alt="plachholder-icon"
              id="footer-placeholder-icon"
            />
            {t("Streetinfo")}
          </div>
          <div className="contact-footer-btn">
            <div className="footer-mail">
              <p>
                {" "}
                <MailOutlined
                  style={{
                    fontSize: "20px",
                    padding: "5px",
                    color: " #faad80",
                  }}
                />
                {t("emailContact")}{" "}
              </p>
              <Link to="/ContactU">
                <Button
                  shape="round"
                  size="middle"
                  style={{
                    width: "100px",
                    background: "#faad80",
                    marginRight: "10px",
                  }}
                >
                  {t("click")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="newsletter">
          <div className="footer-header-container">
            <div className="footer-header-decortion"></div>
            <h4 className="footer-title">{t("Join the newsletter")}</h4>
          </div>
          <div className="join-newsletter-form">
            <div>
              <Input
                placeholder="מייל"
                shape="round"
                style={{ width: "200px" }}
                onChange={saveInfoEmail}
                value={singletNews}
              ></Input>
            </div>
            <Button
              shape="round"
              size="middle"
              style={{
                width: "100px",
                background: "#faad80",
                marginRight: "10px",
              }}
              onClick={handleClick}
            >
              {t("send")}
            </Button>
          </div>
          <div className="footer-facebook">
            <FacebookOutlined style={{ fontSize: "20px", color: "#faad80" }} />
            <p>{t("siteNamefacebook")} </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
