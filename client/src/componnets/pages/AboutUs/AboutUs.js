import React from "react";
import VerticalImgCard from "../../features/vertical-img-card/VerticalImgCard";
import Copartner from "../Home/Copartners/Copartners";
import Volunteers from "./volunteers/Volunteers";
import Staff from "./staff/Staff";
import { ArrowLeftOutlined } from "@ant-design/icons";

import "./AboutUs.css";

const AboutUs = () => {
  const title1 = (
    <h3 style={{ fontSize: "20px" }}>עידוד וייעוץ לנשים ליציאה ללימודים</h3>
  );
  const title2 = <h3 style={{ fontSize: "20px" }}>טיפול בפניות הציבור</h3>;

  const title3 = <h3 style={{ fontSize: "20px" }}>מינוף ועידוד עסקים בקרב נשים בקהילה</h3>;
  const description1 = (
    <ul className="target-card-list">
      <li>שינוי תפיסה תודעתית שתואר אקדמאי הוא בר השגה</li>
      <li>
        {" "}
        <ArrowLeftOutlined style={{ color: "#40BAD5", fontSize: "20px" }} />
        נפגעות תקיפה מינית
      </li>
      <li>
        <ArrowLeftOutlined style={{ color: "#40BAD5", fontSize: "20px" }} />
        הכוונה למלגות ממוקדות לגילאי בשתפ עם ארגונים 
        ומוסדות קורסים להכשרה
        מקצועית
      </li>
      <li>
        {" "}
        <ArrowLeftOutlined style={{ color: "#40BAD5", fontSize: "20px" }} />
        סיוע למשפחות חד הוריות במצוקה כללית
      </li>
    </ul>
  );

  const description2 = (
    <ul className="target-card-list">
      <li>באופן אישי או דרך קהילת נשים אתיופיות מעצימו </li>
      <li>
        <ArrowLeftOutlined style={{ color: "#40BAD5", fontSize: "20px" }} />
        מתן סיוע מיידי לפניות של נשים{" "}
      </li>
      <li>
        <ArrowLeftOutlined style={{ color: "#40BAD5", fontSize: "20px" }} />{" "}
        נפגעות תקיפה מינית
      </li>
      <li>
        <ArrowLeftOutlined style={{ color: "#40BAD5", fontSize: "20px" }} />
        אלימות משפחתית{" "}
      </li>
      <li>
        {" "}
        <ArrowLeftOutlined style={{ color: "#40BAD5", fontSize: "20px" }} />
        סיוע למשפחות חד הוריות במצוקה כללית
      </li>
    </ul>
  );
  const description3 = (
    <ul className="target-card-list">
      <li>מינוף ועידוד עסקים בקרב נשים בקהילה </li>
      <li>
        <ArrowLeftOutlined style={{ color: "#40BAD5", fontSize: "20px" }} />
        שיווק ופרסום והנגשת העסקים בקהילה
      </li>
      <li>
        <ArrowLeftOutlined style={{ color: "#40BAD5", fontSize: "20px" }} />
        לוויו ומינוף עסקים קיימים{" "}
      </li>
      <li>
        <ArrowLeftOutlined style={{ color: "#40BAD5", fontSize: "20px" }} />{" "}
        קניית שירותים פנים קההילתית להרחבת מספר הלקוחות
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
      <Staff />
      <Volunteers />

      <Copartner />
    </div>
  );
};

export default AboutUs;
