import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Input, Button } from "antd";
import { FacebookOutlined, MailOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import { addMemberToNewsletter } from "../../../service/newsletter-service";
import { useTranslation } from "react-i18next";

import "./Footer.css";

const { Header, Footer, Sider, Content } = Layout;

const Footer1 = () => {
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
    <footer>
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
        <div>
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
              <MailOutlined style={{ fontSize: "20px", padding: "5px" }} />
              {t("emailContact")}{" "}
            </p>
            <Link to="/ContactU">
              <Button
                shape="round"
                size="middle"
                style={{
                  width: "100px",
                  background: "#F1CCB9",
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
              background: "#F1CCB9",
              marginRight: "10px",
            }}
            onClick={handleClick}
          >
            {t("send")}
          </Button>
        </div>
        <div className="footer-facebook">
          <FacebookOutlined style={{ fontSize: "20px" }} />
          <p>{t("siteNamefacebook")} </p>
        </div>
      </div>
    </footer>
    // </Footer>
  );
};
export default Footer1;
