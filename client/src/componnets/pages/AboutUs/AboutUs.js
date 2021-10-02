import React from "react";
import VerticalImgCard from "../../features/vertical-img-card/VerticalImgCard";
import Copartner from "../Home/Copartners/Copartners";
import Volunteers from "./volunteers/Volunteers";
import Staff from "./staff/Staff";
import { ArrowLeftOutlined, TeamOutlined } from "@ant-design/icons";
import "./AboutUs.css";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  const title1 = <h3 style={{ fontSize: "20px" }}>{t("Encouragement")}</h3>;
  const title2 = (
    <h3 style={{ fontSize: "20px" }}>{t("Handling public inquiries")}</h3>
  );

  const title3 = (
    <h3 style={{ fontSize: "20px" }}>{t("encourage business")}</h3>
  );
  const description1 = (
    <ul className="target-card-list">
      <li>{t("conscious perception")}</li>
      <li>
        {" "}
        <ArrowLeftOutlined style={{ color: "#40BAD5", fontSize: "20px" }} />
        {t("sexualVictims")}{" "}
      </li>
      <li>
        <ArrowLeftOutlined style={{ color: "#40BAD5", fontSize: "20px" }} />
        {t("scholarships")}
      </li>
      <li>
        {" "}
        <ArrowLeftOutlined style={{ color: "#40BAD5", fontSize: "20px" }} />
        {t("famileAssistance")}{" "}
      </li>
    </ul>
  );

  const description2 = (
    <ul className="target-card-list">
      <li>{t("publicinquiriesinperson")} </li>
      <li>
        <ArrowLeftOutlined style={{ color: "#40BAD5", fontSize: "20px" }} />
        {t("Providing assistance")}
      </li>
      <li>
        <ArrowLeftOutlined style={{ color: "#40BAD5", fontSize: "20px" }} />{" "}
        {t("sexualVictims")}
      </li>
      <li>
        <ArrowLeftOutlined style={{ color: "#40BAD5", fontSize: "20px" }} />
        {t("Domestic violence")}
      </li>
      <li>
        {" "}
        <ArrowLeftOutlined style={{ color: "#40BAD5", fontSize: "20px" }} />
        {t("Assistance to single-parent")}{" "}
      </li>
    </ul>
  );
  const description3 = (
    <ul className="target-card-list">
      <li>{t("Leverage business")}</li>
      <li>
        <ArrowLeftOutlined style={{ color: "#40BAD5", fontSize: "20px" }} />
        {t("Marketing Business")}
      </li>
      <li>
        <ArrowLeftOutlined style={{ color: "#40BAD5", fontSize: "20px" }} />
        {t("Accompanying businesses")}
      </li>
      <li>
        <ArrowLeftOutlined style={{ color: "#40BAD5", fontSize: "20px" }} />{" "}
        {t("Purchasing services")}{" "}
      </li>
    </ul>
  );
  return (
    <div className="aboutus-wrapper">
      <div className="targets-header-container">
        <h3 className="targets-title"> המטרות שלנו</h3>

        <div className="targets-header-decoration"></div>
      </div>
      <div className="targets-container">
        <div className="target-card-container-right-side">
          <VerticalImgCard
            img="./target.png"
            title={title1}
            description={description1}
          />
        </div>
        <div className="target-card-container-left-side ">
          <VerticalImgCard
            img="./target.png"
            title={title2}
            description={description2}
          />
        </div>
        <div className="target-card-container-right-side ">
          <VerticalImgCard
            img="./target.png"
            title={title3}
            description={description3}
          />
        </div>
      </div>
      <div className="buffer-staff-div">
        <div className="staff-icon-buffer">
          <div className="left-cube-staff-buffer"></div>
          <TeamOutlined style={{ fontSize: "80px", color: "#f5ad88" }} />
          <TeamOutlined style={{ fontSize: "80px", color: "#F2DAC3" }} />
          <div className="right-cube-staff-buffer"></div>

          <div></div>
        </div>
      </div>
      <Staff />
      {/* <Volunteers /> */}

      <Copartner />
    </div>
  );
};

export default AboutUs;
